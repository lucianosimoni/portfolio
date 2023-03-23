import ProjectItem from "./ProjectItem";
import { useState } from "react";

export default function Projects({ reference }) {
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
    "h-screen p-8 gap-8 flex flex-col bg-doodle-pattern bg-cover border-t-0 border-b-[1rem] border-palette-black transition-[border] snap-center scrollbar-hide overflow-x-hidden overflow-y-auto bg-palette-white";
  const bottomBar =
    "h-screen p-8 gap-8 flex flex-col bg-doodle-pattern bg-cover border-t-[1rem] border-b-0 border-palette-black transition-[border] snap-center scrollbar-hide overflow-x-hidden overflow-y-auto bg-palette-white";
  const bothBar =
    "h-screen p-8 gap-8 flex flex-col bg-doodle-pattern bg-cover border-y-[1rem] border-palette-black transition-[border] snap-center scrollbar-hide overflow-x-hidden overflow-y-auto bg-palette-white";

  return (
    <section
      ref={reference}
      onScroll={handleScroll}
      className={isAtTop ? topBar : isAtBottom ? bottomBar : bothBar}
    >
      {/* 🅰️TEXT */}
      <div className="h-auto flex flex-col gap-4 text-center">
        <h1 className="text-palette-green drop-shadow-xl font-normal text-2xl md:text-3xl lg:text-6xl">
          My projects
        </h1>
        <span className="text-palette-black text-md">🙂</span>
      </div>

      {/* 🖼️ GRID */}
      <div className="h-auto w-fit mx-auto grid gap-8 grid-cols-2 grid-rows-2">
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
          imgPath={"/src/assets/ai-interviewer.webp"}
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
          imgPath={"/src/assets/pothole.webp"}
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
          imgPath={"/src/assets/trextter.webp"}
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
          imgPath={"/src/assets/address-book.webp"}
        />
      </div>
    </section>
  );
}
