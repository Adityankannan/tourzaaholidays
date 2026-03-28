import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../store/slices/packagesSlice";

const tabs = [
  {
    id: "international",
    label: "International",
    icon: "✈️",
    desc: "Explore the world",
  },
  { id: "domestic", label: "Domestic", icon: "🇮🇳", desc: "Incredible India" },
];

const PackageTabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((s) => s.packages.activeTab);

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => dispatch(setActiveTab(tab.id))}
          className="relative group focus:outline-none"
          data-hover="true"
        >
          <motion.div
            className={`flex items-center gap-3 px-7 py-4 rounded-2xl border font-inter font-semibold text-base
              transition-colors duration-300 ${
                activeTab === tab.id
                  ? "bg-gold-gradient text-dark-900 border-gold-500 shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                  : "bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.label}</span>
            <span
              className={`font-inter font-normal text-xs ${
                activeTab === tab.id ? "text-dark-700" : "text-white/40"
              }`}
            >
              {tab.desc}
            </span>
          </motion.div>

          {/* Active underline */}
          {activeTab === tab.id && (
            <motion.div
              layoutId="tabUnderline"
              className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-gold-400 rounded-full"
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default PackageTabs;
