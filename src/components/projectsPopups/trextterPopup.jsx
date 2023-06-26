export default function TrextterPopup({ setViewMoreData }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-palette-black bg-opacity-60 z-[55] overflow-y-auto scrollbar-hide">
      <div className="m-16 p-8 rounded-3xl h-fit bg-palette-white relative">
        {/* Intro */}
        <section>
          <div className="flex flex-row">
            <h1 className="font-bold text-4xl my-4 text-palette-black">
              Trextter
            </h1>
            <span className="font-thin text-2xl text-palette-green ml-auto mr-8">
              Completed
            </span>
          </div>
          <p className="sm:text-base lg:text-lg text-palette-black">
            Supposed to be a simple twitter design. uses a combination of HTML,
            CSS and JavaScript to bring the best responsiveness, pixel perfect
            design.
          </p>

          {/* Intro Image */}
          <div className="bg-trextter-transparent sm:h-[200px] lg:h-[480px] w-full my-8 bg-contain bg-no-repeat bg-center rounded-2xl" />
        </section>

        {/* The Idea Behind it */}
        <section>
          <h2 className="font-bold sm:text-lg text-center lg:text-2xl mb-4 mt-8 text-palette-black">
            The idea behind it 🤔
          </h2>
          <p className="sm:text-base lg:text-lg text-palette-black mb-3">
            The application was designed with a strong emphasis on
            responsiveness and effective HTML layout organization. It
            incorporates Google Material Design principles to create an
            appealing UI/UX, while drawing inspiration from Twitter's design
            concept. However, it currently lacks functionality as it solely
            relies on HTML and CSS.
          </p>

          {/* Idea Image */}
          <div className="bg-trextter-main sm:h-[200px] lg:h-[480px] w-full my-8 bg-contain bg-no-repeat bg-center rounded-2xl" />
        </section>

        {/* Bottom Buttons */}
        <section>
          <div className="h-auto flex gap-2 items-end justify-center flex-grow mt-4">
            <a
              target="_blank"
              href="https://lucianosimoni.github.io/html-twitter-trextter/"
              className="cursor-pointer text-palette-black text-center w-[40%] ml-2 mb-2 shadow-btn-thick hover:shadow-btn-thick-hover active:shadow-btn-thick-click hover:-translate-x-btn-hover hover:translate-y-btn-hover active:-translate-x-btn-click active:translate-y-btn-click transform-gpu bg-palette-yellow border-2 lg:border-4 border-palette-black text-sm lg:text-xl font-bold rounded-full py-1 lg:py-2 px-8 lg:px-16 transition-[box-shadow_translate] duration-200 noselect"
            >
              Preview the Live version
            </a>
            <a
              target="_blank"
              href="https://github.com/lucianosimoni/html-twitter-trextter"
              className="cursor-pointer text-palette-black text-center w-[25%] text-sm lg:text-xl border-2 lg:border-4 h-fit py-1 lg:py-2 px-5 lg:px-6 border-palette-black hover:bg-palette-green font-bold rounded-full transition-[background-color] noselect"
            >
              GitHub
            </a>
            <button
              className="cursor-pointer text-palette-black text-center w-[10%] text-sm lg:text-xl border-2 lg:border-4 h-fit py-1 lg:py-2 px-5 lg:px-6 border-palette-black hover:bg-palette-red font-bold rounded-full transition-[background-color] noselect"
              onClick={() => setViewMoreData({ visible: false, title: "" })}
            >
              Close
            </button>
          </div>
        </section>

        {/* Close Button */}
        <button
          className="h-20 w-20 hover:scale-110 absolute -right-4 -top-4 rounded-full font-bold drop-shadow-xl hover:drop-shadow-2xl bg-palette-red text-palette-white transition-all"
          onClick={() => setViewMoreData({ visible: false, title: "" })}
        >
          Close
        </button>
      </div>
    </div>
  );
}
