/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "doodle-pattern": "url('/src/assets/doodle-pattern.webp')",
      "mountain-dark": "url('/src/assets/mountain-dark.webp')",
    },
    extend: {
      keyframes: {
        "close-clip": {
          "0%": {
            "clip-path": "inset(0 40% 0 40%)",
          },
          "20%": {
            "clip-path": "inset(0 39% 0 39%)",
          },
          "100%": {
            "clip-path": "inset(0 50% 0 50%)",
          },
        },
        "large-to-default": {
          from: {
            height: "32rem",
            width: "32rem",
            top: "calc(50% - 16rem)",
            left: "calc(50% - 16rem)",
          },
        },
        "large-to-default-doggo-img": {
          from: {
            width: "28rem",
          },
        },
      },
      animation: {
        "openning-clip": "close-clip 1s ease-in 2s 1 reverse backwards",
        "closing-clip": "close-clip 1s ease-in-out 0s 1 normal backwards",
        "doggo-splash": "large-to-default 1s ease-in 1s 1 normal backwards",
        "doggo-splash-img":
          "large-to-default-doggo-img 1s ease-in 1s 1 normal backwards",
      },
      colors: {
        "palette-white": "#f7ede2",
        "palette-green": "#84a59d",
        "palette-pink": "#f5cac3",
        "palette-yellow": "#f6bd60",
        "palette-black": "#14213d",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
