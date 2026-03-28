import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Happy Travellers",
    icon: "😊",
    description: "Delighted guests who trust us year after year",
  },
  {
    value: 50,
    suffix: "+",
    label: "Destinations",
    icon: "🗺️",
    description: "Handcrafted itineraries to iconic & offbeat spots",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of Trust",
    icon: "🏆",
    description: "A decade of delivering extraordinary journeys",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    icon: "⭐",
    description: "Our guests recommend us to their loved ones",
  },
];

const useCounter = (target, duration, start) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatItem = ({ stat, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(stat.value, 1800, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col items-center text-center p-8 glass-card
                 hover:border-gold-500/40 transition-all duration-400 hover:shadow-[0_0_40px_rgba(251,191,36,0.1)]"
    >
      <motion.div
        className="text-4xl mb-4"
        animate={inView ? { scale: [0.5, 1.2, 1], opacity: [0, 1, 1] } : {}}
        transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
      >
        {stat.icon}
      </motion.div>

      <div className="font-playfair font-black text-5xl gold-text mb-1">
        {count}
        {stat.suffix}
      </div>

      <div className="font-inter font-semibold text-white text-base mb-2">
        {stat.label}
      </div>

      <p className="font-inter text-white/45 text-sm leading-relaxed">
        {stat.description}
      </p>

      {/* Bottom accent line */}
      <motion.div
        className="h-0.5 bg-gold-gradient rounded-full mt-4"
        initial={{ width: 0 }}
        animate={inView ? { width: "40%" } : {}}
        transition={{ delay: index * 0.12 + 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-600/5 blur-3xl" />
      </div>

      <div className="section-padding" ref={sectionRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-inter text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-4 block">
            Our Impact
          </span>
          <h2 className="section-title text-white">
            Numbers That <span className="gold-text">Tell Our Story</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
