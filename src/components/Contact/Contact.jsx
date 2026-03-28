import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setContactFormStatus } from "../../store/slices/uiSlice";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../../config/constants";

const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="font-inter text-sm text-white/70 font-medium"
    >
      {label} {required && <span className="text-gold-400">*</span>}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white
                   placeholder-white/30 focus:outline-none focus:border-gold-500/60 focus:bg-white/8
                   transition-all duration-300 resize-none"
      />
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white
                   placeholder-white/30 focus:outline-none focus:border-gold-500/60 focus:bg-white/8
                   transition-all duration-300"
      />
    )}
  </div>
);

const contactInfo = [
  {
    icon: <FaWhatsapp className="text-xl text-green-400" />,
    label: "WhatsApp",
    value: "+91 99999 99999",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: <FaEnvelope className="text-xl text-gold-400" />,
    label: "Email",
    value: "hello@tourzaaholidays.com",
    href: "mailto:hello@tourzaaholidays.com",
  },
  {
    icon: <FaPhone className="text-xl text-blue-400" />,
    label: "Call Us",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    icon: <FaMapMarkerAlt className="text-xl text-red-400" />,
    label: "Office",
    value: "Chennai, Tamil Nadu, India",
    href: "#",
  },
];

const Contact = () => {
  const dispatch = useDispatch();
  const formStatus = useSelector((s) => s.ui.contactFormStatus);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    message: "",
  });

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setContactFormStatus("submitting"));

    // Build WhatsApp message and redirect
    const msg = encodeURIComponent(
      `Hello Tourzaa Holidays!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDestination: ${form.destination}\nMessage: ${form.message}`,
    );
    setTimeout(() => {
      dispatch(setContactFormStatus("success"));
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      setForm({ name: "", phone: "", email: "", destination: "", message: "" });
      setTimeout(() => dispatch(setContactFormStatus("idle")), 4000);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-600/5 blur-3xl pointer-events-none" />

      <div className="section-padding">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-inter text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-title text-white mb-4">
            Plan Your <span className="gold-text">Dream Trip</span>
          </h2>
          <p className="font-inter text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Share your travel dreams with us, and our experts will craft a
            personalised itinerary just for you — completely free!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* ─── Contact Info ─── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="glass-card p-7 mb-2">
              <h3 className="font-playfair font-bold text-2xl text-white mb-2">
                Let&apos;s Plan Together
              </h3>
              <p className="font-inter text-white/55 text-sm leading-relaxed">
                Fill the form and we&apos;ll instantly connect you with our
                travel experts on WhatsApp for a free consultation.
              </p>
            </div>

            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="glass-card p-4 flex items-center gap-4 hover:border-gold-500/40
                           hover:shadow-[0_0_20px_rgba(251,191,36,0.07)] transition-all duration-300"
                data-hover="true"
              >
                <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="font-inter text-xs text-white/40 uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="font-inter text-sm text-white font-medium">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Quick WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Tourzaa Holidays! I want to plan a trip.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2 mt-2"
              data-hover="true"
            >
              <FaWhatsapp className="text-xl" />
              Chat Directly on WhatsApp
            </a>
          </motion.div>

          {/* ─── Contact Form ─── */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  label="Full Name"
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                />
                <InputField
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  required
                />
              </div>

              <InputField
                label="Email Address"
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange("email")}
              />

              <InputField
                label="Preferred Destination"
                id="destination"
                placeholder="e.g., Bali, Kashmir, Dubai…"
                value={form.destination}
                onChange={handleChange("destination")}
                required
              />

              <InputField
                label="Tell Us About Your Trip"
                id="message"
                type="textarea"
                placeholder="Travel dates, group size, budget, special requests…"
                value={form.message}
                onChange={handleChange("message")}
              />

              <motion.button
                type="submit"
                disabled={formStatus === "submitting"}
                whileTap={{ scale: 0.98 }}
                className={`btn-gold w-full flex items-center justify-center gap-2 text-base py-4 mt-1 ${
                  formStatus === "submitting"
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                }`}
                data-hover="true"
              >
                {formStatus === "submitting" ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-dark-900/30 border-t-dark-900 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.7,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    Connecting…
                  </>
                ) : formStatus === "success" ? (
                  <>✅ Opening WhatsApp…</>
                ) : (
                  <>
                    <FaWhatsapp className="text-xl" />
                    Send via WhatsApp
                  </>
                )}
              </motion.button>

              <p className="font-inter text-center text-xs text-white/30">
                Your details are only used to provide travel assistance. We
                never spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
