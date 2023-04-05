export default function LucianoImage({ bgImage, homeVisible = false }) {
  // homeVisible is only used if we want the text o move left when homeVisible is true
  const classIfHome =
    " bg-contain bg-no-repeat bg-center w-[400px] lg:w-[500px] h-[200px] lg:h-[300px] left-[2rem] lg:left-[calc(15%-1.5rem)] top-[calc(50%-12rem)] lg:top-[calc(50%-17rem)] absolute transition-[top_left] ease-in-out duration-1000 z-40";

  const classIfSplash =
    " bg-contain bg-no-repeat bg-center w-[800px] h-[400px] animate-opacity-fade-in-1s-delay left-[calc(50%-25rem)] top-[calc(50%-12.5rem)] absolute transition-[top_left] ease-in-out duration-1000 z-40";

  return (
    <div
      className={
        homeVisible
          ? // ON THE HOME SECTION
            bgImage + classIfHome
          : // CENTERED
            bgImage + classIfSplash
      }
    />
  );
}
