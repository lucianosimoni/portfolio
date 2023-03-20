export default function NavigationItem({ onClick, name, svg }) {
  return (
    <li
      onClick={onClick}
      className="p-4 cursor-pointer hover:scale-105 transition-all"
    >
      {/* <svg>Dot</svg>
      <svg>Icon</svg> */}
      <div className="border-4 rounded-full border-palette-black p-2"></div>
      {/* <span>{name}</span> */}
    </li>
  );
}
