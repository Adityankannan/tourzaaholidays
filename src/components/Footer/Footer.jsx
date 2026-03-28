import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { WHATSAPP_NUMBER, NAV_LINKS } from "../../config/constants";

const socialLinks = [
  {
    icon: <FaWhatsapp />,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "WhatsApp",
    color: "hover:text-green-400 hover:border-green-400/40",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/",
    label: "Instagram",
    color: "hover:text-pink-400 hover:border-pink-400/40",
  },
  {
    icon: <FaFacebook />,
    href: "https://facebook.com/",
    label: "Facebook",
    color: "hover:text-blue-400 hover:border-blue-400/40",
  },
  {
    icon: <FaYoutube />,
    href: "https://youtube.com/",
    label: "YouTube",
    color: "hover:text-red-400 hover:border-red-400/40",
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  const handleNavClick = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-dark-800 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Main footer grid */}
        <div className="section-padding py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ─── Brand ─── */}
          <div className="lg:col-span-1">
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 mb-5 focus:outline-none"
              data-hover="true"
            >
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                <span className="font-playfair font-bold text-dark-900 text-lg">
                  T
                </span>
              </div>
              <div className="leading-none">
                <span className="font-playfair font-bold text-xl text-white">
                  Tourzaa
                </span>
                <span className="block font-inter text-[10px] tracking-[0.25em] uppercase text-gold-400">
                  holidays
                </span>
              </div>
            </button>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-6">
              Crafting extraordinary travel experiences across India and the
              world since 2015. Your journey, our passion.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`w-9 h-9 rounded-full glass-card flex items-center justify-center
                             text-white/50 text-base border-white/10 transition-all duration-300 ${s.color}`}
                  data-hover="true"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ─── Quick Links ─── */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-inter text-sm text-white/55 hover:text-gold-400 transition-colors duration-300
                               flex items-center gap-2 group focus:outline-none"
                    data-hover="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-400 transition-colors duration-300 flex-shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Top Destinations ─── */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-5">
              Top Destinations
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Dubai",
                "Bali",
                "Kashmir",
                "Kerala",
                "Maldives",
                "Rajasthan",
              ].map((dest) => (
                <li key={dest}>
                  <button
                    onClick={() => handleNavClick("#packages")}
                    className="font-inter text-sm text-white/55 hover:text-gold-400 transition-colors duration-300
                               flex items-center gap-2 group focus:outline-none"
                    data-hover="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-400 transition-colors duration-300 flex-shrink-0" />
                    {dest}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Contact ─── */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-5">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/55 hover:text-gold-400 transition-colors duration-300"
                  data-hover="true"
                >
                  <FaWhatsapp className="text-green-400 flex-shrink-0" />
                  <span className="font-inter text-sm">+91 99999 99999</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@tourzaaholidays.com"
                  className="flex items-center gap-3 text-white/55 hover:text-gold-400 transition-colors duration-300"
                  data-hover="true"
                >
                  <FaEnvelope className="text-gold-400 flex-shrink-0" />
                  <span className="font-inter text-sm">
                    hello@tourzaaholidays.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-3 text-white/55 hover:text-gold-400 transition-colors duration-300"
                  data-hover="true"
                >
                  <FaPhone className="text-blue-400 flex-shrink-0" />
                  <span className="font-inter text-sm">+91 99999 99999</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 glass-card p-4">
              <p className="font-inter text-xs text-white/40 mb-1">
                Office Hours
              </p>
              <p className="font-inter text-sm text-white/70">
                Mon – Sat: 9 AM – 7 PM
              </p>
              <p className="font-inter text-sm text-white/70">
                Sunday: 10 AM – 4 PM
              </p>
            </div>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="border-t border-white/5 section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/30">
            © {new Date().getFullYear()} Tourzaa Holidays. All rights reserved.
          </p>
          <p className="font-inter text-xs text-white/20">
            Crafted with ❤️ to inspire your next adventure
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
