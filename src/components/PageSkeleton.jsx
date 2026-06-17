//src/components/PageSkeleton.jsx
function SkeletonBlock({ type = "cards" }) {
  if (type === "about") {
    return (
      <section className="relative bg-[#050505] px-4 py-16 sm:px-5 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-4 w-40 animate-pulse rounded-full bg-yellow-400/20" />
            <div className="mx-auto mt-5 h-10 w-72 animate-pulse rounded-2xl bg-white/10 sm:w-[420px]" />
            <div className="mx-auto mt-5 h-4 w-full max-w-xl animate-pulse rounded-full bg-white/10" />
            <div className="mx-auto mt-3 h-4 w-4/5 max-w-lg animate-pulse rounded-full bg-white/10" />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="h-[460px] animate-pulse rounded-[2rem] border border-yellow-400/15 bg-white/[0.05]" />
            <div className="space-y-4">
              <div className="h-12 w-44 animate-pulse rounded-full bg-yellow-400/15" />
              <div className="h-14 w-full animate-pulse rounded-2xl bg-white/10" />
              <div className="h-24 w-full animate-pulse rounded-2xl bg-white/10" />
              <div className="grid gap-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-28 animate-pulse rounded-[1.5rem] border border-white/10 bg-white/[0.05]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (type === "transformations") {
    return (
      <section className="relative bg-[#070707] px-4 py-16 sm:px-5 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-4 w-44 animate-pulse rounded-full bg-yellow-400/20" />
            <div className="mx-auto mt-5 h-10 w-80 animate-pulse rounded-2xl bg-white/10" />
            <div className="mx-auto mt-5 h-4 w-full max-w-xl animate-pulse rounded-full bg-white/10" />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-[1.6rem] border border-yellow-400/15 bg-white/[0.04] p-2.5"
              >
                <div className="h-[390px] animate-pulse rounded-[1.25rem] bg-white/10" />
                <div className="p-4">
                  <div className="h-4 w-36 animate-pulse rounded-full bg-yellow-400/20" />
                  <div className="mt-4 h-7 w-48 animate-pulse rounded-xl bg-white/10" />
                  <div className="mt-3 h-4 w-32 animate-pulse rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#050505] px-4 py-16 sm:px-5 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-4 w-40 animate-pulse rounded-full bg-yellow-400/20" />
          <div className="mx-auto mt-5 h-10 w-72 animate-pulse rounded-2xl bg-white/10" />
          <div className="mx-auto mt-5 h-4 w-full max-w-xl animate-pulse rounded-full bg-white/10" />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-56 animate-pulse rounded-[1.6rem] border border-yellow-400/15 bg-white/[0.04]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PageSkeleton() {
  return (
    <>
      <SkeletonBlock type="about" />
      <SkeletonBlock type="transformations" />
      <SkeletonBlock />
      <SkeletonBlock />
      <SkeletonBlock />
    </>
  );
}

export default PageSkeleton;