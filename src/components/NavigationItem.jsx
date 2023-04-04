import HomeSvg from "./svg/navigation/HomeSvg.jsx";
import ProjectsSvg from "./svg/navigation/ProjectsSvg.jsx";
import AboutMeSvg from "./svg/navigation/AboutMeSvg.jsx";
import AskMyAiSvg from "./svg/navigation/AskMyAiSvg.jsx";
import EducationSvg from "./svg/navigation/EducationSvg.jsx";
import ContactsSvg from "./svg/navigation/ContactsSvg.jsx";

export default function NavigationItem({ onClick, name, selected }) {
  const formattedName = name.replace(/ /g, "").toLowerCase();
  const icons = {
    home: <HomeSvg selected={selected} />,
    projects: <ProjectsSvg selected={selected} />,
    aboutme: <AboutMeSvg selected={selected} />,
    askmyai: <AskMyAiSvg selected={selected} />,
    education: <EducationSvg selected={selected} />,
    contacts: <ContactsSvg selected={selected} />,
  };
  const renderIcon = () => icons[formattedName] || null;

  return (
    <li
      onClick={onClick}
      className="flex flex-col p-[1rem] bg-[#f7ede250] rounded-2xl group/li cursor-pointer transition-all relative"
    >
      {renderIcon()}
      <div
        className={
          selected
            ? "group-hover/nav:scale-0 border-4 rounded-full border-palette-black bg-palette-yellow p-2 transition-all duration-500"
            : "group-hover/nav:scale-0 border-4 rounded-full border-palette-black bg-palette-black p-2 transition-all duration-500"
        }
      />
      <span className="flex items-center justify-center h-[2rem] w-[6rem] top-[calc(50%-1rem)] left-[-6rem] rounded-l-full text-palette-black bg-[#f7ede290] font-bold opacity-0 group-hover/li:opacity-100 transition-[opacity] duration-300 absolute">
        {name}
      </span>
    </li>
  );
}
