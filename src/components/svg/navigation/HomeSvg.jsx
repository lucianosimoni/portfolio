export default function HomeSvg({ selected }) {
  return (
    <div className="text-palette-black absolute group-hover/nav:opacity-100 group-hover/nav:scale-100 scale-0 opacity-0 left-[3.5px] top-[3.5px] transition-all duration-500">
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
      >
        <path
          fill={selected ? "#f6bd60" : "currentColor"}
          className="transition-colors duration-500"
          strokeWidth={4}
          stroke="#14213d"
          d="M11 42q-1.25 0-2.125-.875T8 39V19.5q0-.7.325-1.35.325-.65.875-1.05l13-9.75q.4-.3.85-.45.45-.15.95-.15.5 0 .95.15.45.15.85.45l13 9.75q.55.4.875 1.05.325.65.325 1.35V39q0 1.25-.875 2.125T37 42h-9V28h-8v14Z"
        />
      </svg>
    </div>
  );
}
