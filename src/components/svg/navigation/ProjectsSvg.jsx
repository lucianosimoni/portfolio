export default function ProjectsSvg({ selected }) {
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
          d="M7 40q-1.15 0-2.075-.925Q4 38.15 4 37V11q0-1.15.925-2.075Q5.85 8 7 8h12.8q.6 0 1.175.25.575.25.975.65l2.1 2.1H41q1.15 0 2.075.925Q44 12.85 44 14H10q-1.25 0-2.125.875T7 17v20l4.5-17.75q.25-1 1.1-1.625.85-.625 1.85-.625H43.1q1.45 0 2.4 1.15t.55 2.6l-4.4 16.95q-.3 1.2-1.1 1.75T38.5 40Z"
        />
      </svg>
    </div>
  );
}
