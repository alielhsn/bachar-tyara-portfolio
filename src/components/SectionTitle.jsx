// src/components/SectionTitle.jsx
function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-400 sm:text-sm sm:tracking-[0.35em]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base md:mt-5 md:text-lg md:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;