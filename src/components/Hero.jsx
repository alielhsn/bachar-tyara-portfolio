//src/components/Hero.jsx
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
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

function Hero() {
  const { content, isArabic } = useLanguage();
const { coach, hero } = content;


  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden premium-gradient px-4 pb-14 pt-28 sm:px-5 md:px-10 md:pb-20 md:pt-32"
    >
      <div className="absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-yellow-500/20 blur-[95px] md:h-80 md:w-80 md:blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-[115px] md:h-96 md:w-96 md:blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <div className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border border-yellow-400/20 bg-white/5 px-3 py-2 text-xs text-yellow-100 shadow-2xl shadow-yellow-500/10 backdrop-blur-xl sm:px-4 sm:text-sm md:mx-0">
            <Sparkles className="h-4 w-4 shrink-0 text-yellow-300" />
            <span className="line-clamp-1">{hero.badge}</span>
          </div>

          <h1 className="mt-6 text-[3.2rem] font-black leading-[0.9] tracking-tight text-white sm:text-6xl md:mt-7 md:text-7xl lg:text-8xl">
            {hero.titleTop}
            <span className="block gold-text">{hero.titleHighlight}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg md:mx-0 md:mt-7 md:text-xl md:leading-9">
            {coach.slogan}
          </p>

          <div className="mt-8 grid gap-3 sm:mx-auto sm:max-w-md md:mx-0 md:flex md:max-w-none md:gap-4">
            <a
              href={coach.whatsappUrl}
              target="_blank"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-6 py-4 font-black text-black shadow-2xl shadow-yellow-500/25 transition active:scale-[0.98] md:w-auto md:hover:-translate-y-1 md:hover:bg-yellow-300"
            >
              {hero.bookButton}
              <ArrowRight className={`h-5 w-5 transition ${isArabic ? "rtl-flip" : "md:group-hover:translate-x-1"}`} />
            </a>

            <a
              href={coach.instagramUrl}
              target="_blank"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur-xl transition active:scale-[0.98] md:w-auto md:hover:-translate-y-1 md:hover:border-yellow-400/40 md:hover:text-yellow-200"
            >
              <InstagramIcon className="h-5 w-5" />
              {hero.instagramButton}
            </a>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-2 sm:mx-auto sm:max-w-md sm:gap-3 md:mx-0 md:mt-12 md:max-w-2xl">
            {coach.stats.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-2xl p-3 text-center sm:rounded-3xl sm:p-5"
              >
                <p className="text-xl font-black text-yellow-300 sm:text-2xl md:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[0.68rem] font-medium leading-4 text-white/50 sm:mt-2 sm:text-xs md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[420px] md:max-w-[520px]"
        >
          <div className="relative rounded-[2rem] border border-yellow-400/25 bg-white/5 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl transition md:rotate-[-2deg] md:p-4 md:hover:rotate-0 md:hover:scale-[1.02]">
            <div className="absolute -left-1 top-8 z-20 rounded-2xl border border-yellow-400/30 bg-black/70 px-3 py-2 shadow-2xl backdrop-blur-xl sm:-left-4 sm:px-4 sm:py-3">
              <p className="text-[0.62rem] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
  {hero.coachLabel}
</p>
              <p className="max-w-[135px] truncate text-sm font-black text-yellow-300 sm:max-w-none sm:text-base">
                {coach.name}
              </p>
            </div>

            <img
  src={coach.mainImage}
  alt={coach.name}
  loading="eager"
  fetchPriority="high"
  decoding="async"
  width="900"
  height="1200"
  className="h-[430px] w-full rounded-[1.5rem] object-cover object-center sm:h-[500px] md:h-[560px] md:rounded-[1.8rem]"
/>

            <a
              href={coach.whatsappUrl}
              target="_blank"
              className="absolute -bottom-4 right-3 z-20 rounded-2xl border border-white/10 bg-black/75 p-3 shadow-2xl backdrop-blur-xl transition active:scale-[0.98] sm:right-5 sm:rounded-3xl sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400 text-black sm:h-11 sm:w-11">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[0.68rem] text-white/45 sm:text-xs">{hero.ready}</p>
                  <p className="text-sm font-black text-white sm:text-base">{hero.messageNow}</p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-14 h-px max-w-7xl bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent md:mt-20" />
    </section>
  );
}

export default Hero;