//src/components/Transformations.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionTitle from "./SectionTitle";

function TransformationCard({ client, index, labels, transformation }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.18) }}
      className="group relative w-full max-w-full overflow-hidden rounded-[1.6rem] border border-yellow-400/15 bg-white/[0.04] p-2.5 shadow-[0_24px_75px_rgba(0,0,0,0.5)] backdrop-blur-xl transition active:scale-[0.99] sm:rounded-[2rem] sm:p-3 md:hover:-translate-y-2 md:hover:border-yellow-400/35"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-white/5 opacity-100 md:opacity-0 md:transition md:duration-500 md:group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[1.25rem] bg-black sm:rounded-[1.5rem]">
        <motion.img
          key={client.images[activeImage]}
          src={client.images[activeImage]}
          alt={`${client.name} ${labels[activeImage] || "Transformation"}`}
          initial={{ opacity: 0.55, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="h-[390px] w-full object-cover object-center transition duration-700 sm:h-[430px] md:group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 rounded-full border border-yellow-400/25 bg-black/70 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.18em] text-yellow-200 backdrop-blur-xl sm:left-4 sm:top-4 sm:px-4 sm:text-xs">
          {labels[activeImage] || `Photo ${activeImage + 1}`}
        </div>

        <div className="absolute bottom-3 left-2 right-2 flex min-w-0 gap-1 rounded-2xl border border-white/10 bg-black/75 p-1.5 backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:gap-2 sm:rounded-full sm:p-2">
          {client.images.map((_, imageIndex) => (
            <button
              key={imageIndex}
              type="button"
              onClick={() => setActiveImage(imageIndex)}
              className={`min-w-0 flex-1 truncate rounded-full px-1.5 py-2 text-[0.62rem] font-black transition active:scale-[0.97] sm:px-3 sm:text-xs ${
                activeImage === imageIndex
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-white/65 hover:bg-white/20 hover:text-white"
              }`}
            >
              {labels[imageIndex] || `Photo ${imageIndex + 1}`}
            </button>
          ))}
        </div>
      </div>

      <div className="relative p-4 sm:p-5">
        <div className="flex min-w-0 items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400 sm:text-sm sm:tracking-[0.22em]">
              {transformation} #{index + 1}
            </p>

            <h3 className="mt-2 truncate text-xl font-black text-white sm:mt-3 sm:text-2xl">
  {client.name}
</h3>

            <p className="mt-2 text-sm text-white/55 sm:text-base">
              {client.goal}
            </p>
          </div>

          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-yellow-400 text-black shadow-lg shadow-yellow-500/20 transition sm:h-12 sm:w-12 md:group-hover:rotate-12">
            <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Transformations() {
    const { content } = useLanguage();
const { transformations } = content;
const clients = transformations.clients;

  return (
    <section
  id="transformations"
  className="relative w-full max-w-full scroll-mt-24 overflow-hidden bg-[#070707] px-4 py-16 sm:px-5 md:px-10 md:py-24"
>
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[105px] md:h-96 md:w-96 md:blur-[130px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-[115px] md:h-96 md:w-96 md:blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl overflow-hidden">
        <SectionTitle
  eyebrow={transformations.eyebrow}
  title={transformations.title}
  description={transformations.description}
/>

        <div className="mx-auto mt-10 flex max-w-4xl items-start justify-center gap-3 rounded-[1.6rem] border border-yellow-400/15 bg-white/[0.04] p-4 text-left backdrop-blur-xl sm:items-center sm:gap-4 sm:rounded-[2rem] sm:p-5 sm:text-center md:mt-12">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-yellow-400 text-black sm:h-12 sm:w-12">
            <Trophy className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

          <p className="text-sm leading-7 text-white/60 md:text-base">
            {transformations.note}
          </p>
        </div>

        <div className="mt-10 grid w-full max-w-full grid-cols-1 gap-5 sm:gap-7 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {clients.map((client, index) => (
            <TransformationCard
  key={client.name}
  client={client}
  index={index}
  labels={transformations.labels}
  transformation={transformations.transformation}
/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Transformations;