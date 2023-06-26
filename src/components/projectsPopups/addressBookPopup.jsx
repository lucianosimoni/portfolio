export default function AddressBookPopup({ setViewMoreData }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-palette-black bg-opacity-60 z-[55] overflow-y-auto scrollbar-hide">
      <div className="m-16 p-8 rounded-3xl h-fit bg-palette-white relative">
        {/* Intro */}
        <section>
          <div className="flex flex-row">
            <h1 className="font-bold text-4xl my-4 text-palette-black">
              Address Book
            </h1>
            <span className="font-thin text-2xl text-palette-green ml-auto mr-8">
              Todo: Migrate it to a Vite Environment
            </span>
          </div>
          <p className="sm:text-base lg:text-lg text-palette-black">
            Provides a system to store and manage contacts and meetings.
            Featuring a sleek neumorphic design to enhance the user interface
            and improve the overall user experience.
          </p>

          <div className="bg-address-book-transparent sm:h-[200px] lg:h-[480px] w-full my-8 bg-contain bg-no-repeat bg-center rounded-2xl" />
        </section>

        {/* The Idea Behind it */}
        <section>
          <h2 className="font-bold sm:text-lg text-center lg:text-2xl mb-4 mt-8 text-palette-black">
            The idea behind it 🤔
          </h2>
          <p className="sm:text-base lg:text-lg text-palette-black mb-3">
            During my bootcamp, I was given an activity, but I decided to take
            it as a personal challenge and push myself further. Inspired by the
            neumorphist design trend, I decided to incorporate it into my CSS
            React.js project, which I meticulously handcrafted.
          </p>
        </section>

        {/* Frontend */}
        <section>
          <h2 className="font-bold sm:text-lg text-center lg:text-2xl mb-4 mt-8 text-palette-black">
            🖥️ Frontend
            <i className="text-palette-black opacity-50">
              {" "}
              - React.js | CSS | Axios
            </i>
          </h2>

          <div className="flex flex-row">
            <p className="sm:text-base lg:text-lg text-palette-black mb-3 w-fit mr-8">
              I chose React.js for this project because I wanted a framework
              that is both simple and capable of handling complex
              functionalities. By utilizing <b>React.js</b> along with Firebase,
              I am able to develop my Address Book app effectively. I decided to
              forego other CSS technologies in order to personally code every
              aspect of this small project. This approach allows me to easily
              achieve the desired Neumorphism design.
            </p>

            <div className="h-[350px] w-full bg-address-book-main bg-contain bg-no-repeat bg-center rounded-2xl"></div>
          </div>
        </section>

        {/* Backend */}
        <section>
          <h2 className="font-bold sm:text-lg text-center lg:text-2xl mb-4 mt-8 text-palette-black">
            🗃️ Backend
            <i className="text-palette-black opacity-50">
              {" "}
              - Firebase | Firebase Auth | Firebase Realtime Database
            </i>
          </h2>
          <div className="flex flex-row">
            <div className="h-[350px] w-full bg-address-book-register bg-contain bg-no-repeat bg-center rounded-2xl"></div>

            <div className="w-fit ml-8">
              <p className="sm:text-base lg:text-lg text-palette-black mb-3">
                The backend for this project is incredibly straightforward,
                thanks to my decision to utilize Firebase as its primary
                framework. Firebase has proven to be an excellent tool, offering
                a combination of simplicity and power, providing all the
                essential components required for this small-scale project.
              </p>
              <p className="sm:text-base lg:text-lg text-palette-black mb-3">
                I found Firebase to be an exceptional tool for this project, as
                it offers a perfect balance of <b>simplicity and robustness</b>.
                It provided me with all the necessary resources to accomplish my
                goals effectively, making it an ideal choice for this
                smaller-scale project.
              </p>
            </div>
          </div>
        </section>

        {/* Neumorphism */}
        <section>
          <h2 className="font-bold sm:text-lg text-center lg:text-2xl mb-4 mt-8 text-palette-black">
            🖌️ The Neumorphist design
          </h2>
          <p className="sm:text-base lg:text-lg text-palette-black mb-3">
            In this project I focused some good time on the CSS styling,
            learning about some new things like animations and border control.
            Being a good friend with the neomorphism design, I followed it's
            path to build a nice stectly made UI with a nice UX also.
          </p>
          <p className="sm:text-base lg:text-lg text-palette-black mb-3">
            I recomment looking into the add new card animation,{" "}
            <b>nice huh?</b>.
          </p>

          <div className="sm:h-[200px] lg:h-[400px] w-full bg-address-book-meetings bg-contain bg-no-repeat bg-center"></div>
        </section>

        {/* Bottom Buttons */}
        <section>
          <div className="h-auto flex gap-2 items-end justify-center flex-grow mt-4">
            <a
              target="_blank"
              href="https://lucianosimoni.github.io/react-address-book/"
              className="cursor-pointer text-palette-black text-center w-[40%] ml-2 mb-2 shadow-btn-thick hover:shadow-btn-thick-hover active:shadow-btn-thick-click hover:-translate-x-btn-hover hover:translate-y-btn-hover active:-translate-x-btn-click active:translate-y-btn-click transform-gpu bg-palette-yellow border-2 lg:border-4 border-palette-black text-sm lg:text-xl font-bold rounded-full py-1 lg:py-2 px-8 lg:px-16 transition-[box-shadow_translate] duration-200 noselect"
            >
              Preview the Live version
            </a>
            <a
              target="_blank"
              href="https://github.com/lucianosimoni/react-address-book"
              className="cursor-pointer text-palette-black text-center w-[25%] text-sm lg:text-xl border-2 lg:border-4 h-fit py-1 lg:py-2 px-5 lg:px-6 border-palette-black hover:bg-palette-green font-bold rounded-full transition-[background-color] noselect"
            >
              GitHub
            </a>
            {/* 
            // TODO: ADD THE BACKEND OR REMOVE IT
            <a
              target="_blank"
              href="https://github.com/lucianosimoni/address-book-server"
              className="cursor-pointer text-palette-black text-center w-[25%] text-sm lg:text-xl border-2 lg:border-4 h-fit py-1 lg:py-2 px-5 lg:px-6 border-palette-black hover:bg-palette-green font-bold rounded-full transition-[background-color] noselect"
            >
              GitHub Backend
            </a> */}
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
