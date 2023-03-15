import { useEffect, useState } from "react";
import doggoImage from "./assets/doggo.webp";

export default function App() {
  // clip-path-inset-
  // middle [0_40%_0_40%]
  // right [0_15%_0_65%]
  // closed [0_50%_0_50%]
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  const classesMountainClip =
    "z-50 absolute bg-mountain-dark bg-cover h-full w-full clip-path-inset-[0_40%_0_40%] active:clip-path-inset-[0_15%_0_65%] transition-all duration-700";

  return (
    <main className="bg-palette-white h-screen w-screen bg-doodle-pattern bg-cover">
      {/* 🏔️ Mountain Clip */}
      <div
        className={
          splash
            ? classesMountainClip + " animate-openning-clip "
            : classesMountainClip
        }
      >
        <section className="flex h-full justify-center place-items-center">
          {/* 🖌️ Luciano */}
          <svg
            width="525"
            height="139"
            viewBox="0 0 525 139"
            fill="none"
            className="text-palette-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
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
          </svg>
        </section>
      </div>

      {/* 🐶 Doggo Logo */}
      <div className="animate-doggo-splash absolute flex items-center top-4 h-14 w-14 left-[calc(50%-1.75rem)] bg-palette-white rounded-full z-50 select-none drop-shadow-xl transition-all">
        <img
          src={doggoImage}
          className="animate-doggo-splash-img h-8 w-14 lg:w-[5vw]"
        ></img>
      </div>

      <section className="flex h-full justify-center place-items-center">
        {/* 🖌️ Luciano */}
        <svg
          width="525"
          height="139"
          viewBox="0 0 525 139"
          fill="none"
          className="text-palette-green"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
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
        </svg>
      </section>
    </main>
  );
}
