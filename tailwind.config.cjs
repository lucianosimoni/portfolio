/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "doodle-pattern": "url('/src/assets/doodle-pattern.png')",
      "mountain-dark": "url('/src/assets/mountain-dark.png')",
    },
    extend: {
      keyframes: {
        "close-clip": {
          from: {
            "clip-path": "inset(0 40% 0 40%)",
          },
          to: {
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
        "openning-clip": "close-clip 1s ease 2s 1 reverse both",
        "closing-clip": "close-clip 1s ease 2s 1 normal both",
        "doggo-splash": "large-to-default 1s ease 1s 1 normal both",
        "doggo-splash-img":
          "large-to-default-doggo-img 1s ease 1s 1 normal both",
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
