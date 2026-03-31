import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ─── Bali (14 images) ─────────────────────────────────────────────────────────
import bali1 from "../../assets/images/bali/IMG_7413.JPG";
import bali2 from "../../assets/images/bali/IMG_7414.JPG";
import bali3 from "../../assets/images/bali/IMG_7415.JPG";
import bali4 from "../../assets/images/bali/IMG_7416.JPG";
import bali5 from "../../assets/images/bali/IMG_7417.JPG";
import bali6 from "../../assets/images/bali/IMG_7418.JPG";
import bali7 from "../../assets/images/bali/IMG_7419.JPG";
import bali8 from "../../assets/images/bali/IMG_7420.JPG";
import bali9 from "../../assets/images/bali/IMG_7421.JPG";
import bali10 from "../../assets/images/bali/IMG_7422.JPG";
import bali11 from "../../assets/images/bali/IMG_7443.JPG";
import bali12 from "../../assets/images/bali/IMG_7444.JPG";
import bali13 from "../../assets/images/bali/IMG_7445.JPG";
import bali14 from "../../assets/images/bali/IMG_7446.JPG";

// ─── Dubai (13 images) ────────────────────────────────────────────────────────
import dubai1 from "../../assets/images/dubai/IMG_7404.JPG";
import dubai2 from "../../assets/images/dubai/IMG_7405.JPG";
import dubai3 from "../../assets/images/dubai/IMG_7406.JPG";
import dubai4 from "../../assets/images/dubai/IMG_7407.JPG";
import dubai5 from "../../assets/images/dubai/IMG_7408.JPG";
import dubai6 from "../../assets/images/dubai/IMG_7411.JPG";
import dubai7 from "../../assets/images/dubai/IMG_7467.JPG";
import dubai8 from "../../assets/images/dubai/IMG_7468.JPG";
import dubai9 from "../../assets/images/dubai/IMG_7469.JPG";
import dubai10 from "../../assets/images/dubai/IMG_7470.JPG";
import dubai11 from "../../assets/images/dubai/IMG_7471.JPG";
import dubai12 from "../../assets/images/dubai/IMG_7473.JPG";
import dubai13 from "../../assets/images/dubai/car-desert.jpg";

// ─── Maldives (7 images) ──────────────────────────────────────────────────────
import maldives1 from "../../assets/images/maldives/IMG_7472.JPG";
import maldives2 from "../../assets/images/maldives/IMG_7474.JPG";
import maldives3 from "../../assets/images/maldives/pexels-saeb-mahajna-14125913-6297105.jpg";
import maldives4 from "../../assets/images/maldives/piqsels.com-id-zkibx.jpg";
import maldives5 from "../../assets/images/maldives/wallpaperflare.com_wallpaper (1).jpg";
import maldives6 from "../../assets/images/maldives/wallpaperflare.com_wallpaper.jpg";
import maldives7 from "../../assets/images/maldives/wallpaperflare.com_wallpaper4.jpg";

const destinations = [
  {
    name: "Kashmir",
    country: "India",
    images: [
      "https://picsum.photos/seed/kashmir-dest/600/800",
      "https://picsum.photos/seed/kashmir-dest2/600/800",
      "https://picsum.photos/seed/kashmir-dest3/600/800",
    ],
    tag: "Domestic",
  },
  {
    name: "Bali",
    country: "Indonesia",
    images: [
      bali1,
      bali2,
      bali3,
      bali4,
      bali5,
      bali6,
      bali7,
      bali8,
      bali9,
      bali10,
      bali11,
      bali12,
      bali13,
      bali14,
    ],
    tag: "International",
  },
  {
    name: "Kerala",
    country: "India",
    images: [
      "https://picsum.photos/seed/kerala-dest/600/800",
      "https://picsum.photos/seed/kerala-dest2/600/800",
      "https://picsum.photos/seed/kerala-dest3/600/800",
    ],
    tag: "Domestic",
  },
  {
    name: "Dubai",
    country: "UAE",
    images: [
      dubai1,
      dubai2,
      dubai3,
      dubai4,
      dubai5,
      dubai6,
      dubai7,
      dubai8,
      dubai9,
      dubai10,
      dubai11,
      dubai12,
      dubai13,
    ],
    tag: "International",
  },
  {
    name: "Maldives",
    country: "Maldives",
    images: [
      maldives1,
      maldives2,
      maldives3,
      maldives4,
      maldives5,
      maldives6,
      maldives7,
    ],
    tag: "International",
  },
  {
    name: "Rajasthan",
    country: "India",
    images: [
      "https://picsum.photos/seed/rajasthan-dest/600/800",
      "https://picsum.photos/seed/rajasthan-dest2/600/800",
      "https://picsum.photos/seed/rajasthan-dest3/600/800",
    ],
    tag: "Domestic",
  },
];

const DestinationCard = ({ dest, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  // Preload all images so subsequent slides appear instantly
  // Auto-advance every 4 seconds with random offset so cards don't flip in sync
  useEffect(() => {
    dest.images?.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    // Random initial delay to stagger card animations
    const randomOffset = Math.random() * 4000;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCurrent((c) => (c + 1) % dest.images.length);
      }, 4000);
    }, randomOffset);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [dest.images]);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + dest.images.length) % dest.images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % dest.images.length);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0"
      style={{ width: "240px", height: "340px" }}
      data-hover="true"
    >
      {/* Background images — smooth fade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={dest.images[current]}
          alt={`${dest.name} - ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-card-gradient" />

      {/* Tag */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`font-inter text-[10px] tracking-wider uppercase font-semibold px-3 py-1 rounded-full ${
            dest.tag === "International"
              ? "bg-blue-500/80 text-white"
              : "bg-gold-500/80 text-dark-900"
          }`}
        >
          {dest.tag}
        </span>
      </div>

      {/* Prev / Next arrows — shown on card hover */}
      {dest.images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                       w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm
                       flex items-center justify-center text-white
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200
                       hover:bg-gold-500/80"
            aria-label="Previous image"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                       w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm
                       flex items-center justify-center text-white
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200
                       hover:bg-gold-500/80"
            aria-label="Next image"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </>
      )}

      {/* Dot indicators — shown on card hover */}
      {dest.images.length > 1 && (
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1 z-10
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          {dest.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-4 h-1.5 bg-gold-400"
                  : "w-1.5 h-1.5 bg-white/40"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <div className="flex items-center gap-1.5 mb-1">
          <FaMapMarkerAlt className="text-gold-400 text-xs" />
          <span className="font-inter text-xs text-white/70 tracking-wide">
            {dest.country}
          </span>
        </div>
        <h3 className="font-playfair font-bold text-2xl text-white group-hover:text-gold-300 transition-colors duration-300">
          {dest.name}
        </h3>
        {/* Image counter */}
        <p className="font-inter text-[10px] text-white/40 mt-0.5">
          {current + 1} / {dest.images.length}
        </p>
        {/* Animated underline */}
        <motion.div
          className="h-0.5 bg-gold-gradient rounded-full mt-2"
          initial={{ width: 0 }}
          whileHover={{ width: "60%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const Destinations = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 overflow-hidden">
      <div className="section-padding">
        {/* ─── Header ─── */}
        <motion.div
          ref={headerRef}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-inter text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-4 block">
            Trending Now
          </span>
          <h2 className="section-title text-white mb-4">
            Most Popular <span className="gold-text">Destinations</span>
          </h2>
          <p className="font-inter text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Handpicked experiences loved by thousands of happy travellers — from
            the Himalayas to the Maldives.
          </p>
        </motion.div>
      </div>

      {/* ─── Scrollable Row ─── */}
      <div className="relative">
        {/* Left & Right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 px-16"
          drag="x"
          dragConstraints={{
            right: 0,
            left: -(destinations.length * 260 - window.innerWidth + 128),
          }}
          whileDrag={{ cursor: "grabbing" }}
          style={{ width: "max-content", cursor: "grab" }}
        >
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.name} dest={dest} index={i} />
          ))}
        </motion.div>
      </div>

      <div className="section-padding mt-8 text-center">
        <p className="font-inter text-white/30 text-sm">
          ← Drag to explore more destinations →
        </p>
      </div>
    </section>
  );
};

export default Destinations;
