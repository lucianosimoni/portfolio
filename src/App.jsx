import { useCallback, useEffect, useRef, useState } from "react";
import doggoImage from "./assets/doggo.webp";
import LucianoSvg from "./components/svg/LucianoSvg";
import MobileSplash from "./components/MobileSplash";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

export default function App() {
  // clip-path-inset-
  // middle [0_calc(50%-8rem)_0_calc(50%-8rem)]
  // right [0_11rem_0_calc(100%-11rem-16rem)]
  // closed [0_50%_0_50%]
  const [splash, setSplash] = useState(true);
  const [homeVisible, setHomeVisible] = useState(false);

  const homeSection = useRef();
  const projectsSection = useRef();
  const aboutSection = useRef();
  const aiSection = useRef();
  const educationSection = useRef();
  const contactSection = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  // useEffect(() => {
  //   window.addEventListener("wheel", handleMouseWheel);
  //   return () => {
  //     window.removeEventListener("wheel", handleMouseWheel);
  //   };
  // }, []);
  // const handleMouseWheel = debounce((event) => {
  //   const delta = event.deltaY;
  //   console.log("Delta Y is: ", delta);

  //   if (delta > 0) {
  //     console.log("DOWN");
  //     scrollTo(projectsSection);
  //   }
  //   if (delta < 0) {
  //     console.log("UP");
  //     scrollTo(homeSection);
  //   }
  // }, 100);

  const handleMainClick = (event) => {
    if (!splash && !homeVisible) {
      setHomeVisible(true);
    }
  };

  const scrollTo = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={
        homeVisible
          ? "overflow-y-auto overscroll-y-contain snap-y snap-mandatory h-screen w-full scroll-smooth scrollbar-hide"
          : "overflow-y-hidden overscroll-y-contain snap-y snap-mandatory h-screen w-full scroll-smooth scrollbar-hide"
      }
    >
      {/* 🦫 Mobile Splash */}
      <MobileSplash />

      {/* 📫 NAVIGATION */}
      <Navigation
        homeVisible={homeVisible}
        scrollTo={scrollTo}
        references={{
          homeSection,
          projectsSection,
          aboutSection,
          aiSection,
          educationSection,
          contactSection,
        }}
      />

      {/* 🏡 HOME */}
      <section
        onClick={handleMainClick}
        ref={homeSection}
        className="relative bg-palette-white h-screen w-100% snap-center"
      >
        {/* 🏔️ Mountain Clip */}
        <div
          className={
            splash
              ? "clip-path-inset-[0_calc(50%-8rem)_0_calc(50%-8rem)] bg-cover animate-openning-clip z-50 contrast-125 absolute bg-mountain-dark h-screen w-full transition-[clip-path] ease-in-out duration-1000"
              : homeVisible
              ? "clip-path-inset-[0_11rem_0_calc(100%-11rem-20%)] bg-cover z-50 contrast-125 absolute bg-mountain-dark h-screen w-full transition-[clip-path] ease-in-out duration-1000"
              : "clip-path-inset-[0_calc(50%-8rem)_0_calc(50%-8rem)] bg-cover z-50 contrast-125 absolute bg-mountain-dark h-screen w-full transition-[clip-path] ease-in-out duration-1000"
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
          onClick={homeVisible ? () => scrollTo(projectsSection) : null}
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
                <button
                  onClick={() => scrollTo(projectsSection)}
                  className="text-palette-black ml-2 mb-2 shadow-btn-thick hover:shadow-btn-thick-hover active:shadow-btn-thick-click hover:-translate-x-btn-hover hover:translate-y-btn-hover active:-translate-x-btn-click active:translate-y-btn-click transform-gpu bg-palette-yellow border-2 lg:border-4 border-palette-black text-sm lg:text-xl font-bold rounded-full py-1 lg:py-2 px-8 lg:px-16 transition-[box-shadow_translate] duration-200"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollTo(contactSection)}
                  className="text-palette-black text-sm lg:text-xl border-2 h-fit lg:border-4 py-1 lg:py-2 px-5 lg:px-6 border-palette-black hover:bg-palette-yellow font-bold rounded-full transition-[background-color] "
                >
                  Contact
                </button>
              </div>
            </div>
          ) : null}
        </section>
      </section>

      {/* ⚙️ PROJECTS */}
      <Projects
        reference={projectsSection}
        scrollTo={scrollTo}
        nextSectionRef={aboutSection}
      />

      {/* 👨🏻 ABOUT ME */}
      <AboutMe reference={aboutSection} />

      {/* 🧠 AI */}
      <section
        ref={aiSection}
        className="h-screen flex items-center snap-center justify-center bg-palette-pink"
      >
        <h1>AI ASK - SKILLS</h1>
      </section>

      {/* 📖 EDUCATION */}
      <section
        ref={educationSection}
        className="h-screen flex items-center snap-center justify-center bg-palette-yellow"
      >
        <h1>EDUCATION</h1>
      </section>

      {/* ☎️ CONTACTS */}
      <section
        ref={contactSection}
        className="h-screen flex flex-col items-center snap-center justify-center bg-palette-white"
      >
        <h1>EMAIL: lucianoSimoniPersonal@gmail.com</h1>
        <h2>FOOTER</h2>
        <span>
          Sorry, come back later because it still in progress - I hope that you
          liked what you saw
        </span>
      </section>
    </div>
  );
}
