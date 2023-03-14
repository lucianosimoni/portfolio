export default function App() {
  // clip-path-inset-[0_36%_0_39%]
  return (
    <main className="bg-palette-white h-screen overflow-hidden">
      <div
        id="background-doodles"
        className="fixed h-screen w-screen bg-doodle-pattern opacity-[3%] bg-cover bg-repeat "
      ></div>

      <div className="h-[calc(100vh+2px)] clip-path-inset-[0_40%_0_40%] transition-all active:clip-path-inset-[0_20%_0_20%] bg-mountain-dark  bg-cover"></div>
    </main>
  );
}
