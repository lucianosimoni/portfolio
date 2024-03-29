export default function EducationSvg({ selected }) {
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
          d="M44.5 33.85q-.65 0-1.075-.425Q43 33 43 32.35v-12.6l-17.6 9.5q-.35.2-.7.275-.35.075-.75.075t-.725-.075q-.325-.075-.675-.275L4.4 19.3q-.4-.2-.575-.55-.175-.35-.175-.75t.175-.75Q4 16.9 4.4 16.7l18.1-9.9q.35-.2.7-.3.35-.1.75-.1t.75.1q.35.1.7.3l19.8 10.75q.4.25.6.6.2.35.2.75v13.45q0 .65-.425 1.075-.425.425-1.075.425Zm-20.55 7.7q-.4 0-.75-.075t-.7-.275L11 34.9q-.7-.4-1.125-1.1-.425-.7-.425-1.55v-8.7l12.45 6.8 1 .5q.5.25 1.05.25t1.075-.25q.525-.25 1.025-.5l12.4-6.8v8.7q0 .85-.425 1.55-.425.7-1.125 1.1l-11.5 6.3q-.35.2-.7.275-.35.075-.75.075Z"
        />
      </svg>
    </div>
  );
}
