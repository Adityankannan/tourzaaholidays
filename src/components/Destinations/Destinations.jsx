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

// ─── Singapore (5 images) ─────────────────────────────────────────────────────
import singapore1 from "../../assets/images/singapore/cegoh-singapore-2005652_1920.jpg";
import singapore2 from "../../assets/images/singapore/cheongcs-singapore-jewel-4828998.jpg";
import singapore3 from "../../assets/images/singapore/merlion-statue-cityscape-singapore.jpg";
import singapore4 from "../../assets/images/singapore/outside-gardens-by-bay-singapore.jpg";
import singapore5 from "../../assets/images/singapore/pharaoh_ezypt-usj-1914942.jpg";

// ─── Thailand (6 images) ──────────────────────────────────────────────────────
import thailand1 from "../../assets/images/thailand/hanny-naibaho-DHueZ7ZhDHE-unsplash.jpg";
import thailand2 from "../../assets/images/thailand/miltiadis-fragkidis-xFOKUJgpQoU-unsplash.jpg";
import thailand3 from "../../assets/images/thailand/norbert-braun-08sVw9VV9QA-unsplash.jpg";
import thailand4 from "../../assets/images/thailand/rock-vincent-guitard-91sVkZScif0-unsplash.jpg";
import thailand5 from "../../assets/images/thailand/sumit-chinchane-jWKk-0ZBUyg-unsplash.jpg";
import thailand6 from "../../assets/images/thailand/timothy-blake-GbJfCjeupDE-unsplash.jpg";

// ─── Kerala (9 images) ────────────────────────────────────────────────────────
import kerala1 from "../../assets/images/kerala/IMG_7986.JPG";
import kerala2 from "../../assets/images/kerala/IMG_7987.JPG";
import kerala3 from "../../assets/images/kerala/IMG_7988.JPG";
import kerala4 from "../../assets/images/kerala/IMG_7989.JPG";
import kerala5 from "../../assets/images/kerala/IMG_7990.JPG";
import kerala6 from "../../assets/images/kerala/IMG_7991.JPG";
import kerala7 from "../../assets/images/kerala/IMG_7992.JPG";
import kerala8 from "../../assets/images/kerala/IMG_7993.JPG";
import kerala9 from "../../assets/images/kerala/IMG_7994.JPG";

// ─── Jaipur (12 images) ───────────────────────────────────────────────────────
import jaipur1 from "../../assets/images/jaipur/IMG_7577.JPG";
import jaipur2 from "../../assets/images/jaipur/IMG_7578.JPG";
import jaipur3 from "../../assets/images/jaipur/IMG_7579.JPG";
import jaipur4 from "../../assets/images/jaipur/IMG_7580.JPG";
import jaipur5 from "../../assets/images/jaipur/IMG_7581.JPG";
import jaipur6 from "../../assets/images/jaipur/IMG_7582.JPG";
import jaipur7 from "../../assets/images/jaipur/IMG_7583.JPG";
import jaipur8 from "../../assets/images/jaipur/IMG_7584.JPG";
import jaipur9 from "../../assets/images/jaipur/IMG_7585.JPG";
import jaipur10 from "../../assets/images/jaipur/IMG_7586.JPG";
import jaipur11 from "../../assets/images/jaipur/IMG_7587.JPG";
import jaipur12 from "../../assets/images/jaipur/IMG_7588.JPG";

// ─── Manali (16 images) ───────────────────────────────────────────────────────
import manali1 from "../../assets/images/manali/IMG_7589.JPG";
import manali2 from "../../assets/images/manali/IMG_7590.JPG";
import manali3 from "../../assets/images/manali/IMG_7591.JPG";
import manali4 from "../../assets/images/manali/IMG_7592.JPG";
import manali5 from "../../assets/images/manali/IMG_7593.JPG";
import manali6 from "../../assets/images/manali/IMG_7594.JPG";
import manali7 from "../../assets/images/manali/IMG_7595.JPG";
import manali8 from "../../assets/images/manali/IMG_7596.JPG";
import manali9 from "../../assets/images/manali/IMG_7597.JPG";
import manali10 from "../../assets/images/manali/IMG_7598.JPG";
import manali11 from "../../assets/images/manali/IMG_7599.JPG";
import manali12 from "../../assets/images/manali/IMG_7600.JPG";
import manali13 from "../../assets/images/manali/IMG_7601.JPG";
import manali14 from "../../assets/images/manali/IMG_7602.JPG";
import manali15 from "../../assets/images/manali/IMG_7603.JPG";
import manali16 from "../../assets/images/manali/IMG_7604.JPG";

// ─── Tamil Nadu (10 images) ───────────────────────────────────────────────────
import tamilnadu1 from "../../assets/images/tamilnadu/IMG_7970.JPG";
import tamilnadu2 from "../../assets/images/tamilnadu/IMG_7971.JPG";
import tamilnadu3 from "../../assets/images/tamilnadu/IMG_7972.JPG";
import tamilnadu4 from "../../assets/images/tamilnadu/IMG_7973.JPG";
import tamilnadu5 from "../../assets/images/tamilnadu/IMG_7974.JPG";
import tamilnadu6 from "../../assets/images/tamilnadu/IMG_7975.JPG";
import tamilnadu7 from "../../assets/images/tamilnadu/IMG_7976.JPG";
import tamilnadu8 from "../../assets/images/tamilnadu/IMG_7977.JPG";
import tamilnadu9 from "../../assets/images/tamilnadu/IMG_7978.JPG";
import tamilnadu10 from "../../assets/images/tamilnadu/IMG_7979.JPG";

// ─── Varanasi (10 images) ─────────────────────────────────────────────────────
import varanasi1 from "../../assets/images/varanasi/IMG_8044.JPG";
import varanasi2 from "../../assets/images/varanasi/IMG_8045.JPG";
import varanasi3 from "../../assets/images/varanasi/IMG_8046.JPG";
import varanasi4 from "../../assets/images/varanasi/IMG_8047.JPG";
import varanasi5 from "../../assets/images/varanasi/IMG_8048.JPG";
import varanasi6 from "../../assets/images/varanasi/IMG_8049.JPG";
import varanasi7 from "../../assets/images/varanasi/IMG_8050.JPG";
import varanasi8 from "../../assets/images/varanasi/IMG_8051.JPG";
import varanasi9 from "../../assets/images/varanasi/IMG_8052.JPG";
import varanasi10 from "../../assets/images/varanasi/IMG_8045(1).JPG";

const destinations = [
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
      kerala1,
      kerala2,
      kerala3,
      kerala4,
      kerala5,
      kerala6,
      kerala7,
      kerala8,
      kerala9,
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
    name: "Jaipur",
    country: "India",
    images: [
      jaipur1,
      jaipur2,
      jaipur3,
      jaipur4,
      jaipur5,
      jaipur6,
      jaipur7,
      jaipur8,
      jaipur9,
      jaipur10,
      jaipur11,
      jaipur12,
    ],
    tag: "Domestic",
  },
  {
    name: "Singapore",
    country: "Singapore",
    images: [singapore1, singapore2, singapore3, singapore4, singapore5],
    tag: "International",
  },
  {
    name: "Manali",
    country: "India",
    images: [
      manali1,
      manali2,
      manali3,
      manali4,
      manali5,
      manali6,
      manali7,
      manali8,
      manali9,
      manali10,
      manali11,
      manali12,
      manali13,
      manali14,
      manali15,
      manali16,
    ],
    tag: "Domestic",
  },
  {
    name: "Thailand",
    country: "Thailand",
    images: [thailand1, thailand2, thailand3, thailand4, thailand5, thailand6],
    tag: "International",
  },
  {
    name: "Tamil Nadu",
    country: "India",
    images: [
      tamilnadu1,
      tamilnadu2,
      tamilnadu3,
      tamilnadu4,
      tamilnadu5,
      tamilnadu6,
      tamilnadu7,
      tamilnadu8,
      tamilnadu9,
      tamilnadu10,
    ],
    tag: "Domestic",
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
    name: "Varanasi",
    country: "India",
    images: [
      varanasi1,
      varanasi2,
      varanasi3,
      varanasi4,
      varanasi5,
      varanasi6,
      varanasi7,
      varanasi8,
      varanasi9,
      varanasi10,
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
          loading="lazy"
          decoding="async"
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
