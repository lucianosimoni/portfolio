export default function LucianoSvg({ colorClass, homeVisible = false }) {
  // homeVisible is only used if we want the text o move left when homeVisible is true
  return (
    <svg
      viewBox="0 0 525 139"
      fill="none"
      className={
        homeVisible
          ? colorClass +
            " left-[2rem] top-[7rem] absolute h-[9rem] transition-[top_left] ease-in-out duration-1000"
          : colorClass +
            " left-[calc(50%-17rem)] top-[calc(50%-4.5rem)] absolute h-[9rem] transition-[top_left] ease-in-out duration-1000 "
      }
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_129_478)">
        <path
          d="M288.123 56.1423C289.27 53.3019 289.34 53.1869 290.96 51.0073"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M134.869 99.1439C133.907 109.397 133.674 116.445 140.281 119.806C146.888 123.166 163.213 118.069 168.777 73.1664C165.899 90.5645 164.354 125.185 177.249 119.966C190.144 114.746 200.674 84.37 203.936 71.3215C199.715 88.9753 193.655 125.639 203.786 119.806C216.451 112.514 222.24 79.9297 248.771 70.0829C216.328 87.9812 218.689 118.277 234.04 119.966C246.61 121.348 263.817 113.423 276.166 81.0909C272.008 100.152 277.005 128.81 290.36 118.525C303.716 108.24 311.296 95.09 314.11 84.6M314.11 84.6C311.04 104.429 320.198 130.824 337.392 117.008M314.11 84.6C343.038 47.9236 357.924 99.1619 337.392 117.008M337.392 117.008C350.42 106.538 365.355 73.9342 373.798 74.0877C382.241 74.2413 377.592 130.113 381.872 119.495C388.861 102.158 403.631 73.0777 413.456 72.1566C425.737 71.0052 409.051 125.138 418.262 120.34C427.472 115.543 442.916 96.2924 445.794 89.7681C441.061 106.207 449.317 122.611 463.766 120.34C490.63 116.119 498.787 65.5986 471.539 70.012C444.291 74.4255 445.736 102.549 467.414 94.1316C489.092 85.7141 506.481 68.1867 510.774 51.0073"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9424 36.8655C29.0126 47.8098 49.9041 50.7969 66.3116 40.7673C75.1078 35.3904 87.7337 16.3964 73.5375 11.4734C59.3102 6.53959 51.0035 21.1091 54.6044 34.3421C60.1005 54.5394 82.3301 74.811 75.3432 97.4929C74.0705 101.624 69.7662 113.121 55.6696 118.376C41.1354 123.795 26.8516 109.081 37.8477 96.3983C49.1406 83.3729 62.9774 92.8008 69.7662 97.47C73.0701 99.7423 81.9729 114.922 91.2002 118.376C108.232 124.752 126.152 111.247 130.946 96.3983C142.406 60.9079 128.882 36.0085 106.441 54.7514"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_129_478"
          x="0.942139"
          y="0.490051"
          width="523.833"
          height="138.365"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0784314 0 0 0 0 0.129412 0 0 0 0 0.239216 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_129_478"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_129_478"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
