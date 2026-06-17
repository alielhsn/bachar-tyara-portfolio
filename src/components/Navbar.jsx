//src/components/Navbar.jsx
import { Dumbbell, Languages, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { content, toggleLanguage } = useLanguage();

  const { coach, nav } = content;

  const links = [
    { label: nav.home, href: "#home" },
    { label: nav.about, href: "#about" },
    { label: nav.transformations, href: "#transformations" },
    { label: nav.services, href: "#services" },
    { label: nav.contact, href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-8 md:py-4">
      <div className="mx-auto max-w-7xl">
        <nav
          className={`border border-yellow-400/15 bg-black/55 px-3 py-3 shadow-[0_18px_65px_rgba(0,0,0,0.48)] backdrop-blur-2xl transition-all duration-300 md:px-5 ${
            isOpen ? "rounded-[1.7rem]" : "rounded-full"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <a
              href="#home"
              onClick={handleLinkClick}
              className="flex min-w-0 items-center gap-2.5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 shadow-2xl shadow-yellow-500/20 md:h-11 md:w-11">
                <Dumbbell className="h-5 w-5 text-yellow-300" />
              </div>

              <div className="min-w-0">
                <p className="max-w-[140px] truncate text-xs font-black uppercase tracking-[0.16em] text-white sm:max-w-[220px] sm:text-sm sm:tracking-[0.22em]">
                  {coach.name}
                </p>
                <p className="max-w-[140px] truncate text-[0.68rem] text-white/45 sm:max-w-[220px] sm:text-xs">
                  {coach.title}
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-bold text-white/60 transition hover:bg-white/10 hover:text-yellow-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={toggleLanguage}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-white transition hover:border-yellow-400/35 hover:text-yellow-200"
              >
                <Languages className="h-4 w-4" />
                {content.languageButton}
              </button>

              <a
                href={coach.whatsappUrl}
                target="_blank"
                className="rounded-full bg-yellow-400 px-5 py-3 text-sm font-black text-black shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                {nav.startNow}
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleLanguage}
                className="grid h-10 min-w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 px-2 text-xs font-black text-yellow-200 transition active:scale-95"
                aria-label="Toggle language"
              >
                {content.languageButton}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition active:scale-95"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
              <div className="grid gap-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="rounded-2xl px-4 py-3 text-sm font-bold text-white/70 transition active:scale-[0.98] hover:bg-white/10 hover:text-yellow-200"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href={coach.whatsappUrl}
                  target="_blank"
                  onClick={handleLinkClick}
                  className="mt-2 rounded-2xl bg-yellow-400 px-4 py-3 text-center text-sm font-black text-black transition active:scale-[0.98]"
                >
                  {nav.startCoaching}
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;