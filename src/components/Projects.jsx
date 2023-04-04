import ProjectItem from "./ProjectItem";
import TransitionSvg from "./svg/projects/TransitionSvg";
import { useState } from "react";

export default function Projects({ reference, scrollTo, nextSectionRef }) {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const clientHeight = event.target.clientHeight;
    setIsAtTop(scrollTop === 0);
    setIsAtBottom(scrollTop + clientHeight === scrollHeight);
  };

  const topBar =
    "relative h-screen gap-8 flex flex-col border-t-0 border-b-[1rem] border-palette-black transition-[border] snap-center scrollbar-hide overflow-x-hidden overflow-y-auto bg-section-gradient-second";
  const bottomBar =
    "relative h-screen gap-8 flex flex-col border-t-[1rem] border-b-0 border-palette-black transition-[border] snap-center scrollbar-hide overflow-x-hidden overflow-y-auto bg-section-gradient-second";
  const bothBar =
    "relative h-screen gap-8 flex flex-col border-y-[1rem] border-palette-black transition-[border] snap-center scrollbar-hide overflow-x-hidden overflow-y-auto bg-section-gradient-second";

  return (
    <section
      ref={reference}
      onScroll={handleScroll}
      className={isAtTop ? topBar : isAtBottom ? bottomBar : bothBar}
    >
      <TransitionSvg />

      {/* 🅰️TEXT */}
      <div className="h-auto flex flex-col gap-4 text-center mt-8 z-20">
        <h1 className="text-palette-green drop-shadow-md font-bold md:text-2xl lg:text-5xl">
          My projects 📜
        </h1>
      </div>

      {/* 🖼️ GRID */}
      <div className="h-auto w-fit mx-auto grid gap-8 grid-cols-2 grid-rows-2 z-20">
        <ProjectItem
          title={"AI Interviewer"}
          description={
            "A powerful tool that aims to streamline the interview process by providing an AI-powered interviewer that can ask relevant and thought-provoking questions to candidates."
          }
          stack={
            "React.js ▪️ OpenAI 🔥 ▪️ PostgreSQL ▪️ Prisma ▪️ TailwindCSS ▪️ Speech Recognition"
          }
          previewLink={"https://ai-interviewer-gh3q.onrender.com"}
          githubLink={"https://github.com/lucianosimoni/ai-interviewer-client"}
          imgName="ai-interviewer"
        />
        <ProjectItem
          title={"Potholes"}
          description={
            "An app that allows users to report potholes in their city. With the power of the Google Maps API, users can pinpoint the exact location of the pothole, and provide more detailed information such as images of the hazard."
          }
          stack={
            "React.js ▪️ Google Maps API 🔥 ▪️ Json Server ▪️ CSS ▪️ Dark mode"
          }
          previewLink={
            "https://www.figma.com/proto/MJ7mp7MWYA54koczKWnxQe/PotHole-Report---Luciano-Simoni?page-id=0%3A1&node-id=3-2"
          }
          githubLink={"https://github.com/lucianosimoni/potholes"}
          imgName="pothole"
        />
        <ProjectItem
          title={"Trextter"}
          description={
            "Supposed to be a simple twitter design. uses a combination of HTML, CSS and JavaScript to bring the best responsiveness, pixel perfect design."
          }
          stack={
            "HTML/CSS ▪️ Responsive 🔥 ▪️ Google Material Design ▪️ JavaScript"
          }
          previewLink={"https://lucianosimoni.github.io/html-twitter-trextter/"}
          githubLink={"https://github.com/lucianosimoni/html-twitter-trextter"}
          imgName="trextter"
        />
        <ProjectItem
          title={"Address Book"}
          description={
            "Provides a system to store and manage contacts and meetings. Featuring a sleek neumorphic design to enhance the user interface and improve the overall user experience."
          }
          stack={
            "React ▪️ CSS ▪️ Firebase Real-time Database 🔥 ▪️ Neumorphism Design"
          }
          previewLink={"https://lucianosimoni.github.io/react-address-book/"}
          githubLink={"https://github.com/lucianosimoni/react-address-book"}
          imgName="address-book"
        />
      </div>

      {/* ⬇️ BOTTOM TRANSITION */}
      <div className="flex-auto flex justify-center items-end z-20">
        <div
          onClick={() => scrollTo(nextSectionRef)}
          className="hover:cursor-pointer group-[bottom-transition]: h-[150px] w-[300px] flex items-center justify-center rounded-t-full drop-shadow-xl bg-palette-black"
        >
          <svg
            width="88"
            height="48"
            fill="none"
            className="mt-8 group-hover:scale-110  cursor-pointer drop-shadow-2xl text-palette-white flex justify-center transition-[transform]"
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
      </div>
    </section>
  );
}
