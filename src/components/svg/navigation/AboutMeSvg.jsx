export default function AboutMeSvg({ selected }) {
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
          strokeWidth={4}
          stroke="#14213d"
          d="M23.9 11.3q-1.5 0-2.575-1.075Q20.25 9.15 20.25 7.65q0-1.5 1.075-2.575Q22.4 4 23.9 4q1.5 0 2.575 1.075Q27.55 6.15 27.55 7.65q0 1.5-1.075 2.575Q25.4 11.3 23.9 11.3ZM20 44q-.65 0-1.075-.425-.425-.425-.425-1.075V17.1q-4.3-.9-7.075-3.7Q8.65 10.6 8.1 6.8q-.1-.65.35-1.125Q8.9 5.2 9.6 5.2q.55 0 .975.4.425.4.525 1 .55 3.4 3.45 5.6 2.9 2.2 6.85 2.2h5q1.9 0 2.8.325.9.325 2.3 1.525l8.05 7.55q.45.45.475 1.075.025.625-.425 1.075-.45.45-1.075.45T37.5 26l-8.2-7.7v24.2q0 .65-.425 1.075Q28.45 44 27.8 44q-.65 0-1.075-.425-.425-.425-.425-1.075V31.25h-4.8V42.5q0 .65-.425 1.075Q20.65 44 20 44Z"
        />
      </svg>
    </div>
  );
}
