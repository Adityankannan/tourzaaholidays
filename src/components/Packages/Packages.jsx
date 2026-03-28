import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import PackageTabs from "./PackageTabs";
import PackageCard from "./PackageCard";
import international from "../../data/internationalPackages";
import domestic from "../../data/domesticPackages";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const Packages = () => {
  const activeTab = useSelector((s) => s.packages.activeTab);
  const packages = activeTab === "international" ? international : domestic;

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="py-28">
      {/* ─── Decorative top divider ─── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-28" />

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
            Curated Experiences
          </span>
          <h2 className="section-title text-white mb-4">
            Our <span className="gold-text">Tour Packages</span>
          </h2>
          <p className="font-inter text-white/60 max-w-xl mx-auto text-base leading-relaxed mb-10">
            Choose from our expertly crafted itineraries — every trip is
            tailor-made to match your dreams and budget.
          </p>

          {/* Tabs */}
          <PackageTabs />
        </motion.div>

        {/* ─── Cards Grid ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ─── View More CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="font-inter text-white/40 text-sm mb-4">
            Can&apos;t find your dream destination?
          </p>
          <a
            href={`https://wa.me/919999999999?text=${encodeURIComponent("Hi Tourzaa Holidays! I'd like a custom tour package. Can you help me plan?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
            data-hover="true"
          >
            Request Custom Package →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
