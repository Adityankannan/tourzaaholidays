import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaWhatsapp, FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { getWhatsAppLink } from "../../config/constants";

const PackageCard = ({ pkg, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // 3-D tilt on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 400,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 400,
    damping: 30,
  });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group rounded-2xl overflow-hidden bg-dark-700 border border-white/8
                 hover:border-gold-500/50 transition-colors duration-400 cursor-pointer"
      data-hover="true"
    >
      {/* ─── Card Image ─── */}
      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={pkg.image}
          alt={pkg.destination}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-card-gradient" />

        {/* Continent / Region tag */}
        <div className="absolute top-4 left-4">
          <span className="glass-card text-[10px] font-inter tracking-wider uppercase font-semibold px-3 py-1 text-gold-300">
            {pkg.continent || pkg.region}
          </span>
        </div>

        {/* Duration badge */}
        <div className="absolute top-4 right-4 glass-card px-3 py-1 flex items-center gap-1.5">
          <FaClock className="text-gold-400 text-xs" />
          <span className="font-inter text-xs text-white font-medium">
            {pkg.duration}
          </span>
        </div>

        {/* Flag */}
        <div
          className="absolute bottom-4 left-4 text-3xl"
          style={{ transform: "translateZ(15px)" }}
        >
          {pkg.flag}
        </div>
      </div>

      {/* ─── Card Body ─── */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <FaMapMarkerAlt className="text-gold-400 text-xs flex-shrink-0" />
            <span className="font-inter text-xs text-white/50 tracking-wide">
              {pkg.country || pkg.state}
            </span>
          </div>
          <h3 className="font-playfair font-bold text-xl text-white leading-tight group-hover:text-gold-300 transition-colors duration-300">
            {pkg.destination}
          </h3>
          <p className="font-inter text-xs italic text-gold-400/80 mt-0.5">
            {pkg.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="font-inter text-sm text-white/55 leading-relaxed line-clamp-2">
          {pkg.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5">
          {pkg.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="font-inter text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
            >
              {h}
            </span>
          ))}
          {pkg.highlights.length > 3 && (
            <span className="font-inter text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
              +{pkg.highlights.length - 3} more
            </span>
          )}
        </div>

        {/* Price + CTA row */}
        <div className="flex items-center justify-between pt-2 border-t border-white/8">
          <div>
            <p className="font-inter text-[10px] text-white/40 uppercase tracking-wider">
              Starting from
            </p>
            <p className="font-playfair font-bold text-xl gold-text">
              {pkg.startingPrice}
            </p>
            <p className="font-inter text-[10px] text-white/40">per person</p>
          </div>

          {/* Enquire button – appears on hover */}
          <motion.a
            href={getWhatsAppLink(pkg.destination)}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.85, x: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.85,
              x: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center gap-2 bg-gold-gradient text-dark-900 font-inter font-semibold
                       text-sm px-4 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]
                       transition-shadow duration-300 whitespace-nowrap"
            onClick={(e) => e.stopPropagation()}
            data-hover="true"
            aria-label={`Enquire about ${pkg.destination} package on WhatsApp`}
          >
            <FaWhatsapp className="text-base" />
            Enquire Now
          </motion.a>

          {/* Rating stars (static) */}
          <motion.div
            className="flex items-center gap-0.5"
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {[1, 2, 3, 4, 5].map((s) => (
              <FaStar key={s} className="text-gold-400 text-xs" />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── Gold glow border on hover ─── */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: "0 0 0 1.5px transparent, 0 20px 60px transparent",
        }}
        animate={
          isHovered
            ? {
                boxShadow:
                  "0 0 0 1.5px rgba(251,191,36,0.6), 0 20px 60px rgba(251,191,36,0.12)",
              }
            : { boxShadow: "0 0 0 1.5px transparent, 0 20px 60px transparent" }
        }
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default PackageCard;
