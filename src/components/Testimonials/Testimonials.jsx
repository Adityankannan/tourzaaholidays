import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import testimonials from "../../data/testimonials";

const TestimonialCard = ({ item, isActive }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: isActive ? 1 : 0.35, scale: isActive ? 1 : 0.93, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`glass-card p-8 mx-auto max-w-2xl transition-all duration-500 ${
      isActive
        ? "border-gold-500/30 shadow-[0_0_40px_rgba(251,191,36,0.08)]"
        : ""
    }`}
  >
    {/* Quote icon */}
    <FaQuoteLeft className="text-gold-500/40 text-4xl mb-5" />

    {/* Stars */}
    <div className="flex gap-1 mb-5">
      {Array.from({ length: item.rating }, (_, i) => (
        <FaStar key={i} className="text-gold-400 text-sm" />
      ))}
    </div>

    {/* Text */}
    <p className="font-inter text-white/75 text-base leading-relaxed mb-7 italic">
      &ldquo;{item.text}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-500/40"
      />
      <div>
        <p className="font-inter font-semibold text-white text-sm">
          {item.name}
        </p>
        <p className="font-inter text-white/50 text-xs">{item.location}</p>
      </div>
      <span className="ml-auto font-inter text-xs text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
        {item.package}
      </span>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-600/5 blur-3xl rounded-full" />
      </div>

      <div className="section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-inter text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-4 block">
            What Travellers Say
          </span>
          <h2 className="section-title text-white">
            Real Stories, <span className="gold-text">Real Smiles</span>
          </h2>
        </motion.div>

        {/* Testimonial display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <TestimonialCard item={testimonials[active]} isActive={true} />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center
                         text-white/60 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300
                         focus:outline-none"
              data-hover="true"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  data-hover="true"
                  className="focus:outline-none"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <motion.div
                    className="h-2 rounded-full bg-gold-400 cursor-pointer"
                    animate={{
                      width: active === i ? 24 : 8,
                      opacity: active === i ? 1 : 0.35,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center
                         text-white/60 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300
                         focus:outline-none"
              data-hover="true"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
