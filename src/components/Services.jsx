//src/components/Services.jsx
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Brain,
  Dumbbell,
  Flame,
  HeartPulse,
  ShieldCheck,
  Target,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionTitle from "./SectionTitle";

function Services() {
    const { content } = useLanguage();
const { coach, services } = content;
const servicesList = services.list;

  const serviceIcons = [Dumbbell, Activity, HeartPulse, Flame];

  const reasons = services.reasons.map((reason, index) => ({
  ...reason,
  icon: [Target, Brain, ShieldCheck][index],
}));

  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-[#050505] px-4 py-16 sm:px-5 md:px-10 md:py-24">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[130px]" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
  eyebrow={services.eyebrow}
  title={services.title}
  description={services.description}
/>

        <div className="mt-10 grid gap-5 sm:gap-6 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {servicesList.map((service, index) => {
            const Icon = serviceIcons[index] || Dumbbell;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-yellow-400/15 bg-white/[0.04] p-5 shadow-[0_24px_75px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-500 active:scale-[0.99] sm:rounded-[2rem] sm:p-6 md:hover:-translate-y-2 md:hover:border-yellow-400/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-white/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-yellow-400 text-black shadow-2xl shadow-yellow-500/20 transition duration-500 sm:h-16 sm:w-16 sm:rounded-3xl md:group-hover:rotate-6 md:group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-white sm:mt-8 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/55 sm:mt-4 sm:min-h-[112px] sm:leading-8">
                    {service.description}
                  </p>

                  <a
                    href={coach.whatsappUrl}
                    target="_blank"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-yellow-300 transition group-hover:gap-4"
                  >
                    {services.askButton}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 grid items-center gap-8 rounded-[2rem] border border-yellow-400/15 bg-white/[0.04] p-4 shadow-[0_28px_85px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-6 md:mt-24 md:gap-10 md:rounded-[2.5rem] md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <img
              src={coach.images?.[1] || coach.mainImage}
              alt={coach.name}
              className="h-[390px] w-full object-cover object-center sm:h-[460px] md:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
                {services.imageEyebrow}
              </p>

              <h3 className="mt-3 text-3xl font-black text-white md:text-4xl">
                {services.imageTitle}
              </h3>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-400">
                {services.whyEyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:mt-5 md:text-5xl">
                {services.whyTitleStart}{" "}
<span className="gold-text">{services.whyTitleHighlight}</span>
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60 sm:text-lg sm:leading-9 md:mt-6">
                {services.whyText}
              </p>
            </motion.div>

            <div className="mt-9 grid gap-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, delay: index * 0.08 }}
                    className="rounded-[2rem] border border-white/10 bg-black/25 p-5 transition hover:-translate-y-1 hover:border-yellow-400/30"
                  >
                    <div className="flex gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-yellow-400 text-black sm:h-[52px] sm:w-[52px]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-white">
                          {reason.title}
                        </h3>
                        <p className="mt-2 leading-7 text-white/55">
                          {reason.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <a
              href={coach.whatsappUrl}
              target="_blank"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-6 py-4 font-black text-black shadow-2xl shadow-yellow-500/25 transition active:scale-[0.98] sm:w-auto md:mt-10 md:px-8 md:hover:-translate-y-1 md:hover:bg-yellow-300"
            >
              {services.startButton}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;