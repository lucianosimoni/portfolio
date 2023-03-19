import { useEffect, useState } from "react";
import doggoImage from "./assets/doggo.webp";
import LucianoSvg from "./components/LucianoSvg";
import MobileSplash from "./components/MobileSplash";

export default function App() {
  // clip-path-inset-
  // middle [0_calc(50%-8rem)_0_calc(50%-8rem)]
  // right [0_11rem_0_calc(100%-11rem-16rem)]
  // closed [0_50%_0_50%]
  const [splash, setSplash] = useState(true);
  const [homeVisible, setHomeVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  const handleMainClick = (event) => {
    if (!splash && !homeVisible) {
      setHomeVisible(true);
    }
  };

  return (
    <>
      {/* 🦫 Mobile Splash */}
      <MobileSplash />

      {/* 📺 Medium and Rest of screens */}
      <div id="section-wrapper">
        {/* MAIN SECTION */}
        <section
          onClick={handleMainClick}
          className="bg-palette-white bg-center h-screen w-100% bg-doodle-pattern bg-cover"
        >
          {/* 🏔️ Mountain Clip */}
          <div
            className={
              splash
                ? "clip-path-inset-[0_calc(50%-8rem)_0_calc(50%-8rem)] animate-openning-clip z-50 contrast-125 absolute bg-mountain-dark bg-cover h-screen w-full transition-[clip-path] ease-in-out duration-1000"
                : homeVisible
                ? "clip-path-inset-[0_11rem_0_calc(100%-11rem-20%)] z-50 contrast-125 absolute bg-mountain-dark bg-cover h-screen w-full transition-[clip-path] ease-in-out duration-1000"
                : "clip-path-inset-[0_calc(50%-8rem)_0_calc(50%-8rem)] z-50 contrast-125 absolute bg-mountain-dark bg-cover h-screen w-full transition-[clip-path] ease-in-out duration-1000"
            }
          >
            <section className="flex h-full justify-center items-center">
              {/* 🖌️ Luciano */}
              <LucianoSvg
                colorClass={"text-palette-white"}
                homeVisible={homeVisible}
              />
            </section>
          </div>

          {/* 🔽 Down Arrow */}
          <div
            className={
              splash
                ? "-rotate-90 animate-opacity-fade-in-2s-delay z-50 absolute left-[calc(50%-2.75rem)] bottom-4 transition-[left] ease-in-out duration-1000"
                : homeVisible
                ? "rotate-0 left-[calc(100%-11rem-10%-2.75rem)] animate-pulse z-50 absolute bottom-4 transition-[left_rotate] ease-in-out duration-1000"
                : "-rotate-90 animate-pulse z-50 absolute left-[calc(50%-2.75rem)] bottom-4 transition-[left] ease-in-out duration-1000"
            }
          >
            <svg
              width="88"
              height="48"
              fill="none"
              className="hover:scale-110 cursor-pointer drop-shadow-2xl text-palette-white flex justify-center transition-[transform]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10 L44 40 L78 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
          <section className="">
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
                  Based in London. Fascinated with problem-solving. Always
                  providing a code with the future in mind.
                </p>
                {/* 🔘 Action Buttons */}
                <div className="flex gap-[1rem] p-2 items-end">
                  <button className="ml-2 mb-2 shadow-btn-thick hover:shadow-btn-thick-hover active:shadow-btn-thick-click hover:-translate-x-btn-hover hover:translate-y-btn-hover active:-translate-x-btn-click active:translate-y-btn-click transform-gpu bg-palette-yellow border-2 lg:border-4 border-palette-black text-sm lg:text-xl font-bold rounded-full py-1 lg:py-2 px-8 lg:px-16 transition-[box-shadow_translate] duration-200">
                    Projects
                  </button>
                  <button className="text-sm lg:text-xl border-2 h-fit lg:border-4 py-1 lg:py-2 px-5 lg:px-6 border-palette-black hover:bg-palette-yellow font-bold rounded-full transition-[background-color] ">
                    Contact
                  </button>
                </div>
              </div>
            ) : null}
          </section>
        </section>

        <section>
          <h1>HELLO I AM PROJECTS</h1>
        </section>

        <section>
          <h1>ABOUT ME</h1>
        </section>

        <section>
          <h1>AI ASK - SKILLS</h1>
        </section>

        <section>
          <h1>EDUCATION</h1>
        </section>

        <section>
          <h1>CONTACT</h1>
          <h2>FOOTER</h2>
        </section>
      </div>
    </>
  );
}
