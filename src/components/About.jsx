//src/components/About.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, Dumbbell, Flame, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionTitle from "./SectionTitle";

function About() {
const { content } = useLanguage();
const { coach, about } = content;

    const [activeCoachImage, setActiveCoachImage] = useState(0);

const mobileCoachImages = coach.images.slice(0, 3);

const goToPreviousCoachImage = () => {
  setActiveCoachImage((current) =>
    current === 0 ? mobileCoachImages.length - 1 : current - 1
  );
};

const goToNextCoachImage = () => {
  setActiveCoachImage((current) =>
    current === mobileCoachImages.length - 1 ? 0 : current + 1
  );
};

  const cards = about.cards.map((card, index) => ({
  ...card,
  icon: [Award, Flame, ShieldCheck][index],
}));

  const positions = [
    "left-[8%] top-[4%] h-72 w-52 rotate-[-8deg]",
    "right-[4%] top-[12%] h-64 w-48 rotate-[8deg]",
    "left-[28%] top-[30%] z-20 h-80 w-56 rotate-[0deg]",
    "left-[2%] bottom-[5%] h-60 w-44 rotate-[7deg]",
    "right-[12%] bottom-[2%] h-64 w-48 rotate-[-7deg]",
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#050505] px-4 py-16 sm:px-5 md:px-10 md:py-24"
    >
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-yellow-500/10 blur-[100px] md:h-80 md:w-80 md:blur-[120px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-white/5 blur-[110px] md:h-96 md:w-96 md:blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
         eyebrow={about.eyebrow}
title={about.title}
description={about.description}
        />

        <div className="mt-12 grid items-center gap-12 lg:mt-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Mobile animated coach gallery */}
<motion.div
  initial={{ opacity: 0, y: 22 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.6 }}
  className="lg:hidden"
>
  <div className="relative overflow-hidden rounded-[2.2rem] border border-yellow-400/20 bg-white/[0.055] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl">
    <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-yellow-400/20 blur-[85px]" />
    <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-white/10 blur-[90px]" />

    <div className="relative overflow-hidden rounded-[1.7rem] bg-black">
      <AnimatePresence mode="wait">
       <motion.img
  key={mobileCoachImages[activeCoachImage]}
src={mobileCoachImages[activeCoachImage]}
  alt={`${coach.name} ${activeCoachImage + 1}`}
  loading="lazy"
  decoding="async"
          initial={{ opacity: 0, scale: 1.08, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.96, x: -24 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="h-[440px] w-full object-cover object-center"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/20" />

      <div className="absolute left-4 top-4 rounded-full border border-yellow-400/25 bg-black/65 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-200 backdrop-blur-xl">
        {String(activeCoachImage + 1).padStart(2, "0")} /{" "}
        {String(mobileCoachImages.length).padStart(2, "0")}
      </div>

      <button
        type="button"
        onClick={goToPreviousCoachImage}
        className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/55 text-white backdrop-blur-xl transition active:scale-95"
        aria-label="Previous coach image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={goToNextCoachImage}
        className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/55 text-white backdrop-blur-xl transition active:scale-95"
        aria-label="Next coach image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-4 right-4">
        <motion.div
          key={`coach-caption-${activeCoachImage}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-300">
            {about.galleryBadge}
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            {coach.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-white/55">
            {about.coachImage} {activeCoachImage + 1} / {mobileCoachImages.length}
          </p>
        </motion.div>
      </div>
    </div>
  </div>

  <div className="mt-4 grid grid-cols-3 gap-2">
  {coach.images.slice(0, 3).map((image, index) => (
      <motion.button
        key={image}
        type="button"
        onClick={() => setActiveCoachImage(index)}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.05 }}
        className={`relative overflow-hidden rounded-2xl border p-1 shadow-[0_16px_45px_rgba(0,0,0,0.45)] transition active:scale-95 ${
          activeCoachImage === index
            ? "border-yellow-400 bg-yellow-400/15"
            : "border-yellow-400/15 bg-white/[0.04]"
        }`}
        aria-label={`Show coach image ${index + 1}`}
      >
        <img
  src={image}
  alt={`${coach.name} thumbnail ${index + 1}`}
  loading="lazy"
  decoding="async"
  width="180"
  height="180"
  className="h-20 w-full rounded-xl object-cover object-center"
/>

        <div
          className={`absolute inset-1 rounded-xl transition ${
            activeCoachImage === index
              ? "ring-2 ring-yellow-400/80"
              : "bg-black/20"
          }`}
        />

        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-2 py-0.5 text-[0.58rem] font-black text-white backdrop-blur-xl">
          {index + 1}
        </span>
      </motion.button>
    ))}
  </div>

  <div className="mt-3 flex items-center justify-center gap-1.5">
    {coach.images.slice(0, 3).map((image, index) => (
      <button
        key={`dot-${image}`}
        type="button"
        onClick={() => setActiveCoachImage(index)}
        className={`h-1.5 rounded-full transition-all ${
          activeCoachImage === index
            ? "w-7 bg-yellow-400"
            : "w-1.5 bg-white/25"
        }`}
        aria-label={`Go to coach image ${index + 1}`}
      />
    ))}
  </div>
</motion.div>

          {/* Desktop floating collage */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="relative hidden min-h-[560px] lg:block"
          >
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/20 bg-yellow-400/5 shadow-[0_0_120px_rgba(250,204,21,0.12)]" />

            {coach.images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                className={`absolute overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-white/5 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl ${positions[index]}`}
              >
                <img
  src={image}
  alt={`${coach.name} ${index + 1}`}
  loading="lazy"
  decoding="async"
  width="420"
  height="560"
  className="h-full w-full rounded-[1.5rem] object-cover object-center"
/>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 text-xs font-bold text-yellow-200 sm:px-5 sm:text-sm">
              <Dumbbell className="h-4 w-4 shrink-0" />
              {coach.title}
            </div>

            <h3 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              {about.coachingTitle}{" "}
<span className="gold-text">{about.coachingHighlight}</span>
            </h3>

            <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
              {coach.bio}
            </p>

            <div className="mt-7 flex flex-wrap gap-2 sm:gap-3">
              {coach.specialties.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/70 sm:px-4 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:gap-4 md:mt-10">
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                    className="glass-card group rounded-[1.5rem] p-4 transition active:scale-[0.99] sm:rounded-[2rem] sm:p-5 md:hover:-translate-y-1 md:hover:border-yellow-400/35"
                  >
                    <div className="flex gap-3 sm:gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-yellow-400 text-black shadow-lg shadow-yellow-500/20 sm:h-[52px] sm:w-[52px]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h4 className="text-lg font-black text-white sm:text-xl">
                          {card.title}
                        </h4>
                        <p className="mt-1 text-sm leading-7 text-white/55 sm:mt-2 sm:text-base">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;