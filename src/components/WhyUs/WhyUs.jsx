import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "🗺️",
    title: "Tailored Itineraries",
    description:
      "Every trip is custom-crafted around your preferences, travel style and budget — no cookie-cutter packages.",
  },
  {
    icon: "🤝",
    title: "Expert Local Guidance",
    description:
      "Our in-house travel experts and ground partners ensure you experience each destination like a local.",
  },
  {
    icon: "✈️",
    title: "Seamless Planning",
    description:
      "From visas and flights to hotels and day tours — we handle every detail so you only focus on enjoying.",
  },
  {
    icon: "📞",
    title: "24/7 Support",
    description:
      "Travel with confidence knowing our team is reachable round the clock via WhatsApp wherever you are.",
  },
  {
    icon: "💎",
    title: "Best Value Guaranteed",
    description:
      "We partner directly with hotels and operators to get you the best rates without compromising quality.",
  },
  {
    icon: "🌟",
    title: "Unforgettable Memories",
    description:
      "We curate unique experiences — sunset dinners, hidden gems, cultural immersions — that live with you forever.",
  },
];

const WhyUs = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(251,191,36,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="section-padding relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-inter text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-4 block">
            Why Tourzaa
          </span>
          <h2 className="section-title text-white mb-4">
            The <span className="gold-text">Tourzaa Difference</span>
          </h2>
          <p className="font-inter text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            We don&apos;t just plan trips — we craft journeys that resonate,
            inspire, and stay with you long after you&apos;ve returned home.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group glass-card p-7 hover:border-gold-500/40 hover:shadow-[0_0_40px_rgba(251,191,36,0.08)]
                         transition-all duration-400"
              data-hover="true"
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {feat.icon}
              </motion.div>
              <h3 className="font-playfair font-bold text-lg text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
                {feat.title}
              </h3>
              <p className="font-inter text-sm text-white/55 leading-relaxed">
                {feat.description}
              </p>

              {/* Animated accent */}
              <motion.div
                className="h-0.5 bg-gold-gradient rounded-full mt-5"
                initial={{ width: 0 }}
                animate={inView ? { width: "30%" } : {}}
                transition={{ delay: i * 0.1 + 0.4, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
