import { useEffect, useRef, useState } from "react";
import MobileSplash from "./components/MobileSplash";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Home from "./components/Home";

export default function App() {
  const [splash, setSplash] = useState(true);
  const [homeVisible, setHomeVisible] = useState(false);

  const homeSection = useRef();
  const projectsSection = useRef();
  const aboutSection = useRef();
  const aiSection = useRef();
  const educationSection = useRef();
  const contactSection = useRef();

  const [selectedSection, setSelectedSection] = useState(homeSection);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);

    const container = document.getElementById("main-container");
    const sections = [
      homeSection,
      projectsSection,
      aboutSection,
      aiSection,
      educationSection,
      contactSection,
    ];

    // Deboucing variables
    let timeoutId;
    const delay = 100;

    const handleScroll = () => {
      const scrollPos = container.scrollTop;

      sections.forEach((section) => {
        const sectionPos = section.current.offsetTop - 50;
        if (
          scrollPos >= sectionPos &&
          scrollPos < sectionPos + section.current.offsetHeight + 50
        ) {
          setSelectedSection(section);
        }
      });
    };

    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId); // Cancel any pending timeout

      timeoutId = setTimeout(() => {
        handleScroll();
      }, delay);
    };

    container.addEventListener("scroll", debouncedHandleScroll);
    return () => container.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  const scrollTo = (section) => {
    setSelectedSection(section);
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="main-container"
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
        selectedSection={selectedSection}
      />

      {/* 🏡 HOME */}
      <Home
        reference={homeSection}
        splash={splash}
        homeVisible={homeVisible}
        setHomeVisible={setHomeVisible}
        scrollTo={scrollTo}
        scrollToReferences={{ projectsSection, contactSection }}
      />

      {/* ⚙️ PROJECTS */}
      <Projects
        reference={projectsSection}
        scrollTo={scrollTo}
        nextSectionRef={aboutSection}
      />

      {/* 👨🏻 ABOUT ME */}
      <AboutMe
        reference={aboutSection}
        scrollTo={scrollTo}
        homeSectionRef={homeSection}
      />

      {/* 🧠 AI */}
      <section
        ref={aiSection}
        className="h-screen flex flex-col items-center snap-center justify-center bg-section-gradient-forth"
      >
        <h1 className="text-2xl">AI Ask | Skills</h1>
        <span>Soon to be added...</span>
        <span className="animate-bounce">Sorry</span>
      </section>

      {/* 📖 EDUCATION */}
      <section
        ref={educationSection}
        className="h-screen flex flex-col items-center snap-center justify-center bg-section-gradient-first"
      >
        <h1 className="text-2xl">Education</h1>
        <span>Soon to be added...</span>
        <span className="animate-bounce">Sorry</span>
      </section>

      {/* ☎️ CONTACTS */}
      <Contacts reference={contactSection} />
    </div>
  );
}
