//src/components/Testimonials.jsx
import { Quote, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionTitle from "./SectionTitle";

function Testimonials() {
    const { content } = useLanguage();
const { testimonials } = content;

  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden bg-[#070707] px-4 py-16 sm:px-5 md:px-10 md:py-24">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
  eyebrow={testimonials.eyebrow}
  title={testimonials.title}
  description={testimonials.description}
/>

        <div className="mt-10 grid gap-5 sm:gap-6 md:mt-16 md:grid-cols-3">
          {testimonials.list.map((item, index) => (
            <article
              key={item.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-yellow-400/15 bg-white/[0.04] p-5 shadow-[0_24px_75px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-500 active:scale-[0.99] sm:rounded-[2rem] sm:p-7 md:hover:-translate-y-2 md:hover:border-yellow-400/35"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-white/5 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-3xl bg-yellow-400 text-black shadow-2xl shadow-yellow-500/20">
                    <Quote className="h-7 w-7" />
                  </div>

                  <div className="flex gap-1 text-yellow-300">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-white/70 sm:mt-8 sm:min-h-[150px] sm:text-lg sm:leading-9">
                  “{item.text}”
                </p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <h3 className="text-xl font-black text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-yellow-400">
                    {item.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;