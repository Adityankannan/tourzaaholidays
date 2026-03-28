import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { WHATSAPP_NUMBER } from "../../config/constants";

// Floating decorative orb
const Orb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
    transition={{
      duration: 6 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

// Animated stat chip
const StatChip = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.7, ease: "easeOut" }}
    className="glass-card px-5 py-3 flex flex-col items-center"
  >
    <span className="font-playfair font-bold text-2xl gold-text">{value}</span>
    <span className="font-inter text-xs text-white/60 tracking-widest uppercase mt-0.5">
      {label}
    </span>
  </motion.div>
);

const Hero = () => {
  const ref = useRef(null);
  const bgRef = useRef(null);

  // Scroll-based parallax (Framer Motion — GPU composited, no jank)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mouse parallax — pure RAF, zero React re-renders
  useEffect(() => {
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf;

    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 18;
      target.y = (e.clientY / window.innerHeight - 0.5) * 18;
    };

    const loop = () => {
      current.x += (target.x - current.x) * 0.04;
      current.y += (target.y - current.y) * 0.04;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${current.x}px, ${current.y}px) scale(1.08)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleScroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ─── Parallax Background Image ─── */}
      <div className="absolute inset-0 z-0">
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{ willChange: "transform" }}
        >
          <img
            src="https://picsum.photos/seed/travel-hero-landscape/1920/1080"
            alt="Hero background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/50 via-transparent to-dark-900/50" />
      </div>

      {/* ─── Decorative Orbs ─── */}
      <Orb className="w-96 h-96 bg-gold-500 -top-20 -left-20" delay={0} />
      <Orb className="w-80 h-80 bg-blue-600 bottom-20 -right-10" delay={2} />
      <Orb className="w-64 h-64 bg-gold-400 top-1/3 right-1/4" delay={4} />

      {/* ─── Animated Grid Overlay ─── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ─── Main Content ─── */}
      <motion.div
        className="relative z-10 section-padding text-center max-w-5xl mx-auto w-full pt-20"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 glass-card px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="font-inter text-xs tracking-[0.3em] uppercase text-gold-400">
            Premium Travel Experiences
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-white mb-6"
        >
          Wherever You Go,{" "}
          <span className="relative inline-block">
            <span className="gold-text">Go with</span>
            {/* Underline shimmer */}
            <motion.span
              className="absolute -bottom-1 left-0 h-1 rounded-full bg-gold-gradient"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            />
          </span>
          <br />
          All Your Heart.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="font-inter text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Tourzaa Holidays crafts personalised journeys across India and the
          world — seamless planning, expert guidance, and memories that last a
          lifetime.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => handleScroll("packages")}
            className="btn-gold flex items-center gap-2 text-base px-8 py-4"
            data-hover="true"
          >
            <MdExplore className="text-xl" />
            Explore Packages
          </button>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Tourzaa Holidays! I would like to plan a trip. Please help me.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 text-base px-8 py-4"
            data-hover="true"
          >
            <FaWhatsapp className="text-xl" />
            Chat with Us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <StatChip value="1000+" label="Happy Travellers" delay={0.9} />
          <StatChip value="50+" label="Destinations" delay={1.0} />
          <StatChip value="10+" label="Years of Trust" delay={1.1} />
          <StatChip value="24/7" label="Support" delay={1.2} />
        </motion.div>
      </motion.div>

      {/* ─── Scroll Indicator ─── */}
      <motion.button
        onClick={() => handleScroll("packages")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-gold-400 transition-colors duration-300 focus:outline-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        data-hover="true"
        aria-label="Scroll down"
      >
        <span className="font-inter text-xs tracking-widest uppercase">
          Scroll
        </span>
        <FaChevronDown />
      </motion.button>
    </section>
  );
};

export default Hero;
