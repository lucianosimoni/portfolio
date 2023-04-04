import { useState, useEffect } from "react";

export default function TransitionSvg() {
  const [width, setWidth] = useState(window.innerWidth * 0.2 + 176); // 20% of screen + 11rem/176px from the clip's mr

  useEffect(() => {
    // TODO: Debouce the Resize function
    const handleResize = () => {
      setWidth(window.innerWidth * 0.2 + 176);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const twentyPercent = width - 176;
  const fullRightSpace = 176;
  const halfRightSpace = fullRightSpace / 2;
  const quarterRightSpace = halfRightSpace / 2;
  const twentyPlusHalfRightSpace = twentyPercent + halfRightSpace;

  const gradientToColor = "#293241";

  return (
    <svg
      width={width}
      height={width}
      className="text-palette-black absolute right-0 overflow-visible z-0 "
    >
      <path
        d={`m 0 0
            l ${twentyPercent} 0
            l 0 ${halfRightSpace}
            c 0 ${quarterRightSpace}, ${quarterRightSpace} ${halfRightSpace}, ${halfRightSpace} ${halfRightSpace}
            l ${halfRightSpace} 0
            l 0 ${twentyPercent} 
            l ${-halfRightSpace} 0
            c ${-twentyPlusHalfRightSpace} 0, ${-twentyPlusHalfRightSpace} ${-twentyPlusHalfRightSpace}, ${-twentyPlusHalfRightSpace} ${-twentyPlusHalfRightSpace}
            z`}
        fill="url(#projectsSvgGradient)"
      />
      <defs>
        <linearGradient
          id="projectsSvgGradient"
          x1="0%"
          x2="0%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor={gradientToColor} />
        </linearGradient>
      </defs>
    </svg>
  );
}
