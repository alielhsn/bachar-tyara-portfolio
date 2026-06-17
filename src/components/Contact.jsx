//src/components/Contact.jsx
import { motion } from "framer-motion";
import {
  ArrowRight,
  Dumbbell,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Contact() {
    const { content, isArabic } = useLanguage();
const { coach, contact, footer } = content;

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-[#050505] px-4 py-16 sm:px-5 md:px-10 md:py-24">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/15 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-white/[0.05] p-5 text-center shadow-[0_32px_95px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-8 md:rounded-[3rem] md:p-14"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-white/5" />

          <div className="relative mx-auto max-w-4xl">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-[1.5rem] bg-yellow-400 text-black shadow-2xl shadow-yellow-500/30 sm:h-20 sm:w-20 sm:rounded-[2rem]">
  <Dumbbell className="h-8 w-8 sm:h-10 sm:w-10" />
</div>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.35em] text-yellow-400">
              {contact.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-7xl">
              {contact.titleStart}{" "}
<span className="gold-text">{contact.titleHighlight}</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9 md:mt-6">
              {contact.text}
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:justify-center sm:gap-4 md:mt-10">
              <a
                href={coach.whatsappUrl}
                target="_blank"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-6 py-4 font-black text-black shadow-2xl shadow-yellow-500/25 transition active:scale-[0.98] sm:w-auto md:px-8 md:hover:-translate-y-1 md:hover:bg-yellow-300"
              >
                <MessageCircle className="h-5 w-5" />
                {contact.whatsappButton}
                <ArrowRight className={`h-5 w-5 transition ${isArabic ? "rtl-flip" : "group-hover:translate-x-1"}`} />
              </a>

              <a
                href={coach.instagramUrl}
                target="_blank"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur-xl transition active:scale-[0.98] sm:w-auto md:px-8 md:hover:-translate-y-1 md:hover:border-yellow-400/40 md:hover:text-yellow-200"
              >
                <InstagramIcon className="h-5 w-5" />
                {contact.instagramButton}
              </a>
            </div>

            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-5 py-3 text-sm font-medium text-white/55">
              <MapPin className="h-4 w-4 text-yellow-300" />
              {coach.location}
            </div>
          </div>
        </motion.div>

        <footer className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <div>
            <p className="text-lg font-black text-white">
              {coach.name}
            </p>
            <p className="mt-1 text-sm text-white/45">
              {coach.title}
            </p>
          </div>

          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {footer.rights}
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;