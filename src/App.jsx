import { useEffect, useState } from "react";
import doggoImage from "./assets/doggo.webp";
import LucianoSvg from "./components/LucianoSvg";

export default function App() {
  // clip-path-inset-
  // middle [0_40%_0_40%]
  // right [0_15%_0_65%]
  // closed [0_50%_0_50%]
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  return (
    <main className="bg-palette-white h-screen w-screen bg-doodle-pattern bg-cover">
      {/* 🏔️ Mountain Clip */}
      <div
        className={
          splash
            ? "animate-openning-clip z-50 absolute bg-mountain-dark bg-cover h-screen w-full clip-path-inset-[0_calc(50%-128px)_0_calc(50%-128px)] transition-[clip-path-inset]"
            : "z-50 absolute bg-mountain-dark bg-cover h-screen w-full clip-path-inset-[0_calc(50%-128px)_0_calc(50%-128px)] transition-[clip-path-inset]"
        }
      >
        <section className="flex h-full justify-center place-items-center">
          {/* 🖌️ Luciano */}
          <LucianoSvg colorClass={"text-palette-white"} />
        </section>
      </div>

      {/* 🐶 Doggo Logo */}
      <div
        className={
          splash
            ? "animate-doggo-splash top-4 h-16 w-16 left-[calc(50%-2rem)] bg-palette-white rounded-full z-50 absolute flex items-center justify-center select-none drop-shadow-xl transition-all"
            : "top-4 h-16 w-16 left-[calc(50%-2rem)] bg-palette-white rounded-full z-50 absolute flex items-center justify-center select-none drop-shadow-xl transition-all"
        }
      >
        <img
          src={doggoImage}
          alt="An image of a Doggo"
          className={
            splash
              ? "animate-doggo-splash-img transition-all h-[2rem]"
              : "transition-all h-[2rem]"
          }
        />
      </div>

      <section className="flex h-full justify-center place-items-center">
        {/* 🖌️ Luciano */}
        <LucianoSvg colorClass={"text-palette-green"} />
      </section>
    </main>
  );
}
