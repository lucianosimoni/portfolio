/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    backgroundImage: {
      rainforest: "url('/src/assets/rainforest.webp')",
      "rainforest-nobg": "url('/src/assets/rainforest-nobg.webp')",
      "ai-interviewer": "url('/src/assets/ai-interviewer.webp')",
      "address-book": "url('/src/assets/address-book.webp')",
      "doodle-pattern": "url('/src/assets/doodle-pattern.webp')",
      pothole: "url('/src/assets/pothole.webp')",
      trextter: "url('/src/assets/trextter.webp')",
      brazil: "url('/src/assets/brazil.webp')",
      "luciano-green": "url('/src/assets/luciano-green.webp')",
      "luciano-white": "url('/src/assets/luciano-white.webp')",

      "home-gradient-to-b": "linear-gradient(to bottom, #14213d00, #14213d)",

      "section-gradient-first":
        "linear-gradient(to bottom right, #F7EDE2, #FFDAC6, #FFE4D6)",
      "section-gradient-second":
        "linear-gradient(to bottom right, #FFDAC6, #FFE4D6, #FFDAC6)",
      "section-gradient-third":
        "linear-gradient(to bottom right, #FFE4D6, #FFDAC6, #F7EDE2)",
      "section-gradient-forth":
        "linear-gradient(to bottom right, #FFDAC6, #F7EDE2, #FFDAC6)",
    },
    extend: {
      keyframes: {
        "close-clip": {
          "0%": {
            "clip-path": "inset(0 calc(50%-8rem) 0 calc(50%-8rem))",
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
            height: "16rem",
          },
        },
        "fade-in": {
          from: {
            opacity: "0%",
          },
          to: {
            opacity: "100%",
          },
        },
      },
      animation: {
        "openning-clip": "close-clip 1s ease-in 2s 1 reverse backwards",
        "closing-clip": "close-clip 1s ease-in-out 0s 1 normal backwards",
        "doggo-splash": "large-to-default 1s ease-in 1s 1 normal backwards",
        "doggo-splash-img":
          "large-to-default-doggo-img 1s ease-in 1s 1 normal backwards",

        "opacity-fade-in-0s-delay":
          "fade-in 1s ease-in-out 0s 1 normal backwards",
        "opacity-fade-in-1s-delay":
          "fade-in 1s ease-in-out 1s 1 normal backwards",
        "opacity-fade-in-2s-delay":
          "fade-in 1s ease-in-out 2s 1 normal backwards",
        "opacity-fade-in-3s-delay":
          "fade-in 1s ease-in-out 3s 1 normal backwards",

        "opacity-fade-out-0s-delay":
          "fade-in 1s ease-in-out 0s 1 reverse backwards",
        "opacity-fade-out-1s-delay":
          "fade-in 1s ease-in-out 1s 1 reverse backwards",
        "opacity-fade-out-2s-delay":
          "fade-in 1s ease-in-out 2s 1 reverse backwards",
        "opacity-fade-out-3s-delay":
          "fade-in 1s ease-in-out 3s 1 reverse backwards",
      },
      colors: {
        "palette-white": "#f7ede2",
        "palette-green": "#84a59d",
        "palette-pink": "#f5cac3",
        "palette-yellow": "#f6bd60",
        "palette-black": "#14213d",
      },
      dropShadow: {
        "btn-thick": "-0.5rem 0.5rem 0 #14213d",
        "btn-thick-hover": "-0.25rem 0.25rem 0 #14213d",
      },
      boxShadow: {
        "btn-thick": "-0.5rem 0.5rem 0 #14213d",
        "btn-thick-hover": "-0.25rem 0.25rem 0 #14213d",
        "btn-thick-click": "0rem 0rem 0 #14213d",
      },
      spacing: {
        "btn-hover": "0.25rem",
        "btn-click": "0.5rem",
      },
    },
  },
  plugins: [require("tailwind-clip-path"), require("tailwind-scrollbar-hide")],
};
