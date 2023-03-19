export default function MobileSplash() {
  return (
    <div className="z-[51] visible md:invisible fixed flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-palette-white text-palette-black">
      <h1 className="animate-opacity-fade-in-0s-delay text-palette-green text-xl">
        <b>Hello there!</b>
      </h1>
      <span className="animate-opacity-fade-in-1s-delay">
        I'm <b className="">Luciano Simoni</b>
      </span>
      <span className="text-center animate-opacity-fade-in-2s-delay mb-4">
        My portfolio will be ready for <b>mobile</b> soon.
        <br /> Check it on a bigger screen.
      </span>
      <section className="flex flex-row gap-4 overflow-visible">
        <a
          target={"_blank"}
          href="https://github.com/lucianosimoni"
          className="animate-opacity-fade-in-3s-delay drop-shadow-button-action bg-palette-yellow border-2 border-palette-black rounded-full py-1 px-5"
        >
          <b>GitHub</b>
        </a>
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/luciano-simoni/"
          className="animate-opacity-fade-in-3s-delay drop-shadow-button-action bg-palette-yellow border-2 border-palette-black rounded-full py-1 px-5"
        >
          <b>LinkedIn</b>
        </a>
      </section>
    </div>
  );
}
