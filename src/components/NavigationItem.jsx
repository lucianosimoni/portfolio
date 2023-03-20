import homeSvg from "./assets/home.svg";
import projectsSvg from "./assets/projects.svg";
import aboutmeSvg from "./assets/aboutme.svg";
import askmyaiSvg from "./assets/askmyai.svg";
import educationSvg from "./assets/education.svg";
import contactsSvg from "./assets/contacts.svg";

export default function NavigationItem({ onClick, name }) {
  // FIXME: Icons are just black, not nice.
  // TODO: Add the current section and update navigation with colored yellow dot.
  return (
    <li
      onClick={onClick}
      className="p-[1rem] group/li my-4 cursor-pointer transition-all relative"
    >
      <img
        className="absolute group-hover/nav:opacity-100 group-hover/nav:scale-100 scale-0 opacity-0 left-[3.5px] top-[3.5px] transition-all duration-500"
        src={eval(`${name.replace(/ /g, "").toLowerCase()}Svg`)}
      />
      <div className="group-hover/nav:scale-0 border-4 rounded-full border-palette-black bg-palette-black p-2 duration-500 transition-all"></div>
      <span className="absolute left-[-170%] top-[16px] font-bold w-[6rem] text-right opacity-0 group-hover/li:opacity-100 transition-[opacity] duration-300">
        {name}
      </span>
    </li>
  );
}
