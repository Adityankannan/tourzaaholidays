import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { setNavScrolled } from "../../store/slices/uiSlice";
import { NAV_LINKS, WHATSAPP_NUMBER } from "../../config/constants";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const isScrolled = useSelector((s) => s.ui.isNavScrolled);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => dispatch(setNavScrolled(window.scrollY > 60));
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark-900/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="section-padding flex items-center justify-between h-20">
        {/* ─── Logo ─── */}
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 focus:outline-none"
          data-hover="true"
        >
          <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.4)]">
            <span className="font-playfair font-bold text-dark-900 text-lg">
              T
            </span>
          </div>
          <div className="leading-none">
            <span className="font-playfair font-inter text-xl text-white tracking-wide ">
              Tourzaa
            </span>
            <span className="block font-inter text-[10px] tracking-[0.25em] uppercase text-gold-400">
              holidays
            </span>
          </div>
        </button>

        {/* ─── Desktop Nav ─── */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="nav-link focus:outline-none"
              data-hover="true"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* ─── CTA + Hamburger ─── */}
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 btn-gold text-sm"
            data-hover="true"
          >
            <FaWhatsapp className="text-lg" />
            Book Now
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-gold-400 hover:text-gold-400 transition-colors duration-300 focus:outline-none"
            data-hover="true"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-dark-800/98 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <div className="section-padding py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link text-left text-base py-1 focus:outline-none"
                  data-hover="true"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm flex items-center gap-2 w-fit"
                data-hover="true"
              >
                <FaWhatsapp className="text-lg" />
                Book Now on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
