//src/utils/preloadSections.js
export function preloadSections() {
  const load = () => {
    import("../components/About");
    import("../components/Transformations");
    import("../components/Services");
    import("../components/Testimonials");
    import("../components/Contact");
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(load, { timeout: 1200 });
  } else {
    window.setTimeout(load, 800);
  }
}