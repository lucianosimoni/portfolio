import doggoImage from "../assets/doggo.webp";
import LucianoSvg from "../components/svg/LucianoSvg";

export default function Home({
  reference,
  homeVisible,
  splash,
  setHomeVisible,
  scrollTo,
  scrollToReferences,
}) {
  const handleMainClick = () => {
    if (!splash && !homeVisible) {
      setHomeVisible(true);
    }
  };

  return (
    <section
      onClick={handleMainClick}
      ref={reference}
      className="relative bg-section-gradient-first h-screen w-100% snap-center"
    >
      {/* 🏔️ Forest Clip */}
      <div
        className={
          splash
            ? "clip-path-inset-[0_calc(50%-8rem)_0_calc(50%-8rem)] animate-openning-clip z-50 absolute bg-rainforest bg-cover h-screen w-full transition-[clip-path] ease-in-out duration-1000"
            : homeVisible
            ? "clip-path-inset-[0_11rem_0_calc(100%-11rem-20%)] z-50 absolute bg-rainforest bg-cover h-screen w-full transition-[clip-path] ease-in-out duration-1000"
            : "clip-path-inset-[0_calc(50%-8rem)_0_calc(50%-8rem)] z-50 absolute bg-rainforest bg-cover h-screen w-full transition-[clip-path] ease-in-out duration-1000"
        }
      >
        {/* 🧊 Gradient */}
        <div className="w-full h-[40%] absolute right-[11rem] bottom-0 z-50 bg-home-gradient-to-b" />

        <section className="flex h-full justify-center items-center">
          {/* 🖌️ Luciano */}
          <LucianoSvg
            colorClass={"text-palette-white"}
            homeVisible={homeVisible}
          />
        </section>

        {/* 🔽 Down Arrow */}
        <div
          onClick={
            homeVisible
              ? () => scrollTo(scrollToReferences.projectsSection)
              : null
          }
          className={
            splash
              ? "-rotate-90 animate-opacity-fade-in-2s-delay z-50 absolute left-[calc(50%-2.75rem)] bottom-12 transition-[left] ease-in-out duration-1000"
              : homeVisible
              ? "rotate-0 left-[calc(100%-11rem-10%-2.75rem)] animate-pulse z-50 absolute bottom-4 transition-[left_rotate] ease-in-out duration-1000"
              : "-rotate-90 animate-pulse z-50 absolute left-[calc(50%-2.75rem)] bottom-12 transition-[left] ease-in-out duration-1000"
          }
        >
          <svg
            width="88"
            height="48"
            fill="none"
            className="hover:scale-110 cursor-pointer text-palette-white flex justify-center transition-[transform] overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10 L44 40 L78 10"
              stroke="currentColor"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* 🐶 Doggo Logo */}
      <div
        className={
          splash
            ? "animate-doggo-splash top-4 h-16 w-16 left-[calc(50%-2rem)] bg-palette-white rounded-full z-50 absolute flex items-center justify-center select-none drop-shadow-xl transition-[left]"
            : homeVisible
            ? "top-4 h-16 w-16 left-[calc(100%-11rem-10%-2rem)] bg-palette-white rounded-full z-50 absolute flex items-center justify-center select-none drop-shadow-xl transition-[left] duration-1000"
            : "top-4 h-16 w-16 left-[calc(50%-2rem)] bg-palette-white rounded-full z-50 absolute flex items-center justify-center select-none drop-shadow-xl transition-[left]"
        }
      >
        <img
          src={doggoImage}
          alt="An image of a Doggo"
          className={
            splash
              ? "animate-doggo-splash-img transition-[animation] h-[2rem]"
              : "transition-[animation] h-[2rem]"
          }
        />
      </div>

      {/* 📫 Main Section */}
      <section>
        {/* 🖌️ Luciano */}
        <LucianoSvg
          colorClass={"text-palette-green"}
          homeVisible={homeVisible}
        />

        {/* 🏡 Home Section */}
        {homeVisible ? (
          // LucianoSvg top pos in lg: h7, rest h5
          <div className="left-[3rem] lg:left-[15%] top-[calc(50%-2.5rem)] lg:top-[calc(50%-3.5rem)] absolute animate-opacity-fade-in-0s-delay transition-[top_left] duration-1000">
            <h2 className="text-[2rem] lg:text-[3rem] font-bold text-palette-yellow drop-shadow-lg">
              Full-stack Developer
            </h2>
            <p className="text-palette-black italic my-4 text-[1rem] lg:text-[1.5rem] break-words w-[50%] mb-[1rem]">
              Based in London. Fascinated with problem-solving. Always providing
              a code with the future in mind.
            </p>
            {/* 🔘 Action Buttons */}
            <div className="flex gap-[1rem] p-2 items-end">
              <button
                onClick={() => scrollTo(scrollToReferences.projectsSection)}
                className="text-palette-black ml-2 mb-2 shadow-btn-thick hover:shadow-btn-thick-hover active:shadow-btn-thick-click hover:-translate-x-btn-hover hover:translate-y-btn-hover active:-translate-x-btn-click active:translate-y-btn-click transform-gpu bg-palette-yellow border-2 lg:border-4 border-palette-black text-sm lg:text-xl font-bold rounded-full py-1 lg:py-2 px-8 lg:px-16 transition-[box-shadow_translate] duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollTo(scrollToReferences.contactSection)}
                className="text-palette-black text-sm lg:text-xl border-2 h-fit lg:border-4 py-1 lg:py-2 px-5 lg:px-6 border-palette-black hover:bg-palette-yellow font-bold rounded-full transition-[background-color] "
              >
                Contact
              </button>
            </div>
          </div>
        ) : null}
      </section>
    </section>
  );
}
