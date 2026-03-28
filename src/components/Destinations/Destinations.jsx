import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const destinations = [
  {
    name: "Kashmir",
    country: "India",
    image: "https://picsum.photos/seed/kashmir-dest/600/800",
    tag: "Domestic",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "https://picsum.photos/seed/bali-dest/600/800",
    tag: "International",
  },
  {
    name: "Kerala",
    country: "India",
    image: "https://picsum.photos/seed/kerala-dest/600/800",
    tag: "Domestic",
  },
  {
    name: "Dubai",
    country: "UAE",
    image: "https://picsum.photos/seed/dubai-dest/600/800",
    tag: "International",
  },
  {
    name: "Maldives",
    country: "Maldives",
    image: "https://picsum.photos/seed/maldives-dest/600/800",
    tag: "International",
  },
  {
    name: "Rajasthan",
    country: "India",
    image: "https://picsum.photos/seed/rajasthan-dest/600/800",
    tag: "Domestic",
  },
];

const DestinationCard = ({ dest, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
      {/* Background image */}
      <motion.img
        src={dest.image}
        alt={dest.name}
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-card-gradient" />

      {/* Tag */}
      <div className="absolute top-4 right-4">
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

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-1.5 mb-1">
          <FaMapMarkerAlt className="text-gold-400 text-xs" />
          <span className="font-inter text-xs text-white/70 tracking-wide">
            {dest.country}
          </span>
        </div>
        <h3 className="font-playfair font-bold text-2xl text-white group-hover:text-gold-300 transition-colors duration-300">
          {dest.name}
        </h3>
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
