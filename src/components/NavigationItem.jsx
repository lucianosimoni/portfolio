import HomeSvg from "./svg/HomeSvg.jsx";
import ProjectsSvg from "./svg/ProjectsSvg.jsx";
import AboutMeSvg from "./svg/AboutmeSvg.jsx";
import AskMyAiSvg from "./svg/AskMyAiSvg.jsx";
import EducationSvg from "./svg/EducationSvg.jsx";
import ContactsSvg from "./svg/ContactsSvg.jsx";

export default function NavigationItem({ onClick, name }) {
  // FIXME: Icons are just black, not nice.
  // TODO: Add the current section and update navigation with colored yellow dot.
  const formattedName = name.replace(/ /g, "").toLowerCase();
  const icons = {
    home: <HomeSvg />,
    projects: <ProjectsSvg />,
    aboutme: <AboutMeSvg />,
    askmyai: <AskMyAiSvg />,
    education: <EducationSvg />,
    contacts: <ContactsSvg />,
  };
  const renderIcon = () => icons[formattedName] || null;

  return (
    <li
      onClick={onClick}
      className="p-[1rem] group/li my-4 cursor-pointer transition-all relative"
    >
      {renderIcon()}
      <div className="group-hover/nav:scale-0 border-4 rounded-full border-palette-black bg-palette-black p-2 duration-500 transition-all"></div>
      <span className="text-palette-black absolute left-[-170%] top-[16px] font-bold w-[6rem] text-right opacity-0 group-hover/li:opacity-100 transition-[opacity] duration-300">
        {name}
      </span>
    </li>
  );
}
