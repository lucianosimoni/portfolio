import HomeSvg from "./svg/navigation/HomeSvg.jsx";
import ProjectsSvg from "./svg/navigation/ProjectsSvg.jsx";
import AboutMeSvg from "./svg/navigation/AboutMeSvg.jsx";
import AskMyAiSvg from "./svg/navigation/AskMyAiSvg.jsx";
import EducationSvg from "./svg/navigation/EducationSvg.jsx";
import ContactsSvg from "./svg/navigation/ContactsSvg.jsx";

export default function NavigationItem({ onClick, name, selected }) {
  // TODO: Add the current section and update navigation with colored yellow dot.
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
      className="p-[1rem] group/li my-4 cursor-pointer transition-all relative"
    >
      {renderIcon()}
      <div
        className={
          selected
            ? "group-hover/nav:scale-0 border-4 rounded-full border-palette-black bg-palette-yellow p-2 duration-500 transition-all"
            : "group-hover/nav:scale-0 border-4 rounded-full border-palette-black bg-palette-black p-2 duration-500 transition-all"
        }
      ></div>
      <span className="text-palette-black absolute left-[-170%] top-[16px] font-bold w-[6rem] text-right opacity-0 group-hover/li:opacity-100 transition-[opacity] duration-300">
        {name}
      </span>
    </li>
  );
}
