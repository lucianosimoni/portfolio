export default function App() {
  // clip-path-inset-
  // middle [0_40%_0_40%]
  // right [0_15%_0_65%]
  // closed [0_50%_0_50%]

  return (
    <main className="bg-palette-white h-screen w-screen">
      <div
        id="background-doodles"
        className="fixed h-screen w-screen bg-doodle-pattern opacity-[3%] bg-cover bg-repeat "
      ></div>

      {/* FIXME: h-full is with a 1px gap in the bottom - Possible solution: h-[calc(100vh+2px)] and overflow-hidden in its parent*/}
      <div className="bg-mountain-dark bg-cover h-full clip-path-inset-[0_40%_0_40%] transition-[clip-path] "></div>
    </main>
  );
}
