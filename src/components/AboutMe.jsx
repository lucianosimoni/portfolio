import { useState } from "react";
import BrazilSvg from "./svg/BrazilSvg";
import doggoImage from "/src/assets/doggo.webp";

export default function AboutMe({ reference, scrollTo, homeSectionRef }) {
  const [showingLess, setShowingLess] = useState(true);

  const handleShowButton = (event) => {
    setShowingLess(!showingLess);
  };

  return (
    <section
      ref={reference}
      className="md:p-8 lg:p-24 gap-24 grid grid-cols-2 items-center h-screen w-full relative snap-center scrollbar-hide overflow-hidden bg-section-gradient-third"
    >
      {/* 🚜 Logo */}
      <div
        onClick={() => scrollTo(homeSectionRef)}
        className="flex items-center justify-center cursor-pointer absolute top-0 left-[calc(50%-150px)] w-[300px] h-[80px] rounded-b-[2rem] bg-palette-black drop-shadow-xl"
      >
        <div className="flex items-center select-none drop-shadow-xl bg-palette-white rounded-full h-16 w-16">
          <img src={doggoImage} alt="An image of a Doggo" className="h-10" />
        </div>
      </div>

      {/* 📄 TEXT SECTION */}
      <div className="flex flex-col text-xs lg:text-sm gap-4 first:gap-8">
        <h2 className="text-palette-yellow drop-shadow-md font-bold md:text-2xl lg:text-5xl">
          Hello there 🙂
        </h2>

        {/* 🗞️ CONCISE VERSION */}
        <div
          className={
            showingLess
              ? "animate-opacity-fade-in-0s-delay flex flex-col gap-4 transition-all duration-100"
              : "hidden flex-col gap-4 transition-all duration-150"
          }
        >
          <p className="text-lg">
            I'm a recent bootcamp graduate with a lifelong passion for coding. I
            began experimenting with programming at a young age and have since
            honed my skills in building applications of all sizes. Whether
            working independently or as part of a team.
          </p>
          <p className="text-lg">
            I thrive on the challenge of developing solutions to complex
            problems.
          </p>
        </div>

        {/* 📰 NORMAL VERSION */}
        <div
          className={
            showingLess
              ? "hidden bg-slate-100 flex-col gap-4 transition-all duration-1000"
              : "animate-opacity-fade-in-0s-delay flex flex-col gap-4 lg:text-xs xl:text-sm transition-all duration-1000"
          }
        >
          <p className="text-lg">
            I'm a recent graduate from a bootcamp where I learned the necessary
            skills to become a full-stack software developer. My interest in
            coding started when I was just 12 years old, experimenting with
            replicating the functionalities of the games I played, building a
            range of mobile projects that allowed me to see the results of my
            work firsthand.
          </p>
          <p className="text-lg">
            I'm self-driven and self-taught, which is evident in the way I
            learned English to access more resources related to coding. After
            graduating from high school in Brazil in 2021, I moved to London to
            seek out new opportunities to further my development career.
          </p>
          <p className="text-lg">
            As a junior software developer, I bring strong coding skills and a
            passion for self-improvement to the table. I enjoy both independent
            and collaborative work, and I'm always eager to stay up-to-date with
            the latest trends and advancements in the field. I believe I can be
            a valuable asset to any team looking for a driven, enthusiastic
            developer.
          </p>
        </div>

        <button
          onClick={handleShowButton}
          className={
            showingLess
              ? "shadow-btn-thick hover:shadow-btn-thick-hover active:shadow-btn-thick-click hover:-translate-x-btn-hover hover:translate-y-btn-hover active:-translate-x-btn-click active:translate-y-btn-click text-palette-black text-center ml-2 mb-2  transform-gpu cursor-pointer bg-palette-yellow border-2 lg:border-4 border-palette-black text-sm lg:text-xl font-bold rounded-full py-1 lg:py-2 px-8 lg:px-16 transition-[box-shadow_translate] duration-200"
              : "shadow-btn-thick-hover -translate-x-btn-hover translate-y-btn-hover active:shadow-btn-thick-click active:-translate-x-btn-click active:translate-y-btn-click text-palette-black text-center ml-2 mb-2  transform-gpu cursor-pointer bg-palette-yellow border-2 lg:border-4 border-palette-black text-sm lg:text-xl font-bold rounded-full py-1 lg:py-2 px-8 lg:px-16 transition-[box-shadow_translate] duration-200"
          }
        >
          {showingLess ? "Show more" : "Show less"}
        </button>
      </div>

      {/* Brazil Section */}
      <div className="flex items-center">
        <BrazilSvg />
      </div>
    </section>
  );
}
