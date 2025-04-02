export default function Page() {
  return (
    <>
      <div className="flex flex-col text-center gap-4 mb-16">
        <h2 className="font-bold text-2xl">Select your favorite startup</h2>
        <section className="flex flex-col gap-4">
          <div>
            <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl text-white p-4 flex flex-col text-left">
              <div className="rounded-md bg-pink-300 w-full aspect-video mb-4" />
              <h3 className="font-bold text-2xl">AI DOL</h3>
              <p>AI startup</p>
              <button className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold mt-4 cursor-pointer w-fit">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="border-transparent border-r-[25vw] border-y-2 border-r-white h-0 w-0" />
            <span className="font-display">VS</span>
            <div className="border-transparent border-l-[25vw] border-y-2 border-l-white h-0 w-0" />
          </div>
          <div>
            <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl text-white p-4 flex flex-col text-left">
              <div className="rounded-md bg-pink-300 w-full aspect-video mb-4" />
              <h3 className="font-bold text-2xl">AI DOL</h3>
              <p>AI startup</p>
              <button className="px-4 py-2 text-lg bg-theme-light text-theme-dark rounded-md font-bold mt-4 cursor-pointer w-fit">
                Learn more
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
