import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { getWhatsAppLink } from "../../config/constants";

// ─── Image Slideshow inside card ──────────────────────────────────────────────
const CardSlideshow = ({
  images,
  destination,
  current,
  setCurrent,
  onHoverChange,
}) => {
  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div
      className="relative h-60 overflow-hidden group/img cursor-pointer"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {/* Images — crossfade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${destination} - photo ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-card-gradient pointer-events-none" />

      {/* Prev / Next arrows — visible on hover */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                       w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm
                       flex items-center justify-center text-white
                       opacity-0 group-hover/img:opacity-100 transition-opacity duration-200
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
                       opacity-0 group-hover/img:opacity-100 transition-opacity duration-200
                       hover:bg-gold-500/80"
            aria-label="Next image"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-4 h-1.5 bg-gold-400" : "w-1.5 h-1.5 bg-white/40"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Hover Popup Lightbox (rendered via portal) ────────────────────────────────
const ImagePopup = ({ images, current, setCurrent, onClose }) => {
  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="fixed z-[9995] pointer-events-none"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(560px, 90vw)",
      }}
    >
      <div
        className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7)] pointer-events-auto"
        onMouseLeave={onClose}
      >
        {/* Large image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Preview ${current + 1}`}
            className="w-full h-[320px] object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />
        </AnimatePresence>

        {/* Overlay bar */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Counter */}
        <div className="absolute top-3 right-3 glass-card px-3 py-1 font-inter text-xs text-white">
          {current + 1} / {images.length}
        </div>

        {/* Prev / Next */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                     bg-black/50 backdrop-blur-sm flex items-center justify-center
                     text-white hover:bg-gold-500/90 transition-colors duration-200"
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                     bg-black/50 backdrop-blur-sm flex items-center justify-center
                     text-white hover:bg-gold-500/90 transition-colors duration-200"
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>

        {/* Dot strip */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-5 h-2 bg-gold-400" : "w-2 h-2 bg-white/40"}`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Package Card ─────────────────────────────────────────────────────────────
const PackageCard = ({ pkg, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImgHovered, setIsImgHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const cardRef = useRef(null);

  // Resolve images — support both legacy `image` string and new `images` array
  const images =
    pkg.images ??
    (pkg.image
      ? [pkg.image]
      : ["https://picsum.photos/seed/placeholder/800/600"]);

  return (
    <>
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsImgHovered(false);
        }}
        className="relative group rounded-2xl overflow-hidden bg-dark-700 border border-white/8
                   hover:border-gold-500/50 transition-colors duration-300 cursor-pointer"
        data-hover="true"
      >
        {/* ─── Slideshow Image ─── */}
        <CardSlideshow
          images={images}
          destination={pkg.destination}
          current={imgIndex}
          setCurrent={setImgIndex}
          onHoverChange={setIsImgHovered}
        />

        {/* Tags overlaid on image */}
        <div className="relative">
          <div className="absolute -top-[220px] left-4 z-10">
            <span className="glass-card text-[10px] font-inter tracking-wider uppercase font-semibold px-3 py-1 text-gold-300">
              {pkg.continent || pkg.region}
            </span>
          </div>
          <div className="absolute -top-[220px] right-4 z-10 glass-card px-3 py-1 flex items-center gap-1.5">
            <FaClock className="text-gold-400 text-xs" />
            <span className="font-inter text-xs text-white font-medium">
              {pkg.duration}
            </span>
          </div>
          <div className="absolute -top-[52px] left-4 z-10 text-3xl">
            {pkg.flag}
          </div>
        </div>

        {/* ─── Card Body ─── */}
        <div className="p-5 flex flex-col gap-3">
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

          <p className="font-inter text-sm text-white/55 leading-relaxed line-clamp-2">
            {pkg.description}
          </p>

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
              aria-label={`Enquire about ${pkg.destination} on WhatsApp`}
            >
              <FaWhatsapp className="text-base" />
              Enquire Now
            </motion.a>

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

        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={
            isHovered
              ? {
                  boxShadow:
                    "0 0 0 1.5px rgba(251,191,36,0.6), 0 20px 60px rgba(251,191,36,0.12)",
                }
              : {
                  boxShadow: "0 0 0 1.5px transparent, 0 20px 60px transparent",
                }
          }
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* ─── Hover Popup via portal ─── */}
      {createPortal(
        <AnimatePresence>
          {isImgHovered && (
            <ImagePopup
              images={images}
              current={imgIndex}
              setCurrent={setImgIndex}
              onClose={() => setIsImgHovered(false)}
            />
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default PackageCard;
