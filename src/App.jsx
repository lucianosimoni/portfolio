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

    setTimeout(() => {
      setHomeVisible(true);
    }, 5000);
  }, []);

  return (
    <>
      {/* 🦫 Mobile Splash */}
      <MobileSplash />

      {/* 📺 Medium and Rest of screens */}
      <main className="bg-palette-white bg-center h-screen w-screen bg-doodle-pattern bg-cover">
        {/* 🏔️ Mountain Clip */}
        <div
          className={
            splash
              ? "animate-openning-clip z-50 contrast-125 absolute bg-mountain-dark bg-cover h-screen w-full clip-path-inset-[0_calc(50%-8rem)_0_calc(50%-8rem)] transition-[clip-path] ease-in-out duration-1000"
              : homeVisible
              ? "z-50 contrast-125 absolute bg-mountain-dark bg-cover h-screen w-full clip-path-inset-[0_11rem_0_calc(100%-11rem-16rem)] transition-[clip-path] ease-in-out duration-1000"
              : "z-50 contrast-125 absolute bg-mountain-dark bg-cover h-screen w-full clip-path-inset-[0_calc(50%-8rem)_0_calc(50%-8rem)] transition-[clip-path] ease-in-out duration-1000"
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
              ? "animate-opacity-fade-in-2s-delay z-50 absolute left-[calc(50%-2.75rem)] bottom-4 transition-[left] ease-in-out duration-1000"
              : homeVisible
              ? "left-[calc(100%-11rem-8rem-2.75rem)] animate-pulse z-50 absolute bottom-4 transition-[left] ease-in-out duration-1000"
              : "animate-pulse z-50 absolute left-[calc(50%-2.75rem)] bottom-4 transition-[left] ease-in-out duration-1000"
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
              ? "top-4 h-16 w-16 left-[calc(100%-11rem-8rem-2rem)] bg-palette-white rounded-full z-50 absolute flex items-center justify-center select-none drop-shadow-xl transition-[left] duration-1000"
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

        <section
          className={
            homeVisible
              ? "flex flex-col h-full justify-center items-center transition-all duration-1000"
              : "flex flex-col h-full justify-center items-center transition-all duration-1000"
          }
        >
          {/* 🖌️ Luciano */}
          <LucianoSvg
            colorClass={"text-palette-green"}
            homeVisible={homeVisible}
          />

          {/* 🏡 Home Section */}
          {homeVisible ? (
            <div className="animate-opacity-fade-in-0s-delay">
              <h2>Full-stack Developer</h2>
              <p>
                Based in London. Fascinated with problem-solving. Always
                providing a code with the future in mind.
              </p>
              {/* 🔘 Action Buttons */}
              <div>
                <button>Projects</button>
                <button>Contact</button>
              </div>
            </div>
          ) : null}
        </section>
      </main>
    </>
  );
}
