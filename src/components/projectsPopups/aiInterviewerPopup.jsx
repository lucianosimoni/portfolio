export default function AiInterviewerPopup({ setViewMoreData }) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-palette-black bg-opacity-60 z-[55] overflow-y-auto scrollbar-hide">
      <div className="m-16 p-8 rounded-3xl h-fit bg-palette-white relative">
        {/* Intro */}
        <section>
          <div className="flex flex-row">
            <h1 className="font-bold text-4xl mb-4 text-palette-black">
              AI Interviewer
            </h1>
            <span className="font-thin text-2xl text-palette-green ml-auto mr-8">
              Under development
            </span>
          </div>
          <p className="sm:text-base lg:text-lg text-palette-black">
            A powerful tool that aims to streamline the interview process by
            providing an AI-powered interviewer that can ask relevant and
            thought-provoking questions to candidates.
          </p>

          <div className="bg-ai-interviewer-transparent sm:h-[200px] lg:h-[480px] w-full my-8 bg-contain bg-no-repeat bg-center rounded-2xl" />
        </section>

        {/* The Idea Behind it */}
        <section>
          <h2 className="font-bold sm:text-lg lg:text-2xl mb-4 text-palette-black">
            The idea behind it
          </h2>
          <p className="sm:text-base lg:text-lg text-palette-black mb-3">
            AI Interviewer came up as an Idea for my bootcamp's final project,
            to showcase all of the skills I aquired during the 6 months of
            study.
          </p>
          <p className="sm:text-base lg:text-lg text-palette-black mb-3">
            As I became enamored with the capabilities of OpenAI's ChatGPT, I
            was inspired to create something of my own using artificial
            intelligence. The idea struck me to build an interviewer, and I
            eagerly set out to learn how to utilize the API (which was still in
            its early stages at the time).
          </p>
          <p className="sm:text-base lg:text-lg text-palette-black mb-5">
            Despite encountering some difficulties along the way, I persevered
            until my creation was fully functional and ready to be showcased to
            an audience of over 40 people. It was an exciting accomplishment to
            see the fruits of my labor come to life, and I felt proud to have
            harnessed the power of AI to bring my vision to fruition.
          </p>
        </section>

        {/* Frontend */}
        <section>
          <h2 className="font-bold sm:text-lg lg:text-2xl mb-4 text-palette-black">
            Frontend
            <i className="text-palette-black opacity-50">
              {" "}
              - React.js | TailwindCSS
            </i>
          </h2>

          <div className="flex flex-row">
            <p className="sm:text-base lg:text-lg text-palette-black mb-3 w-fit">
              I choose React.js for this project, because it is the main
              Framework I use for Frontend. Also react comes randy when working
              alongside big Design libraries like TailwindCSS (Which was
              extensively used in all pages).
            </p>

            <div className="h-[350px] w-full bg-ai-interviewer-dashboard bg-contain bg-no-repeat bg-center rounded-2xl"></div>
          </div>
        </section>

        {/* Backend */}
        <section>
          <h2 className="font-bold sm:text-lg lg:text-2xl my-4 text-palette-black">
            Backend
            <i className="text-palette-black opacity-50">
              {" "}
              - Node.js | OpenAI | Express.js | PostgreSQL
            </i>
          </h2>
          <p className="sm:text-base lg:text-lg text-palette-black mb-3">
            AI Interviewer came up as an Idea for my bootcamp's final project,
            to showcase all of the skills I aquired during the 6 months of
            study.
          </p>
        </section>

        {/* RDM Design */}
        <section>
          <h2 className="font-bold sm:text-lg lg:text-2xl mb-4 text-palette-black">
            RDM Design
          </h2>
          <p className="sm:text-base lg:text-lg text-palette-black mb-3">
            I decided to channel my creativity into building a database scheme
            using PostgreSQL. While I initially intended to create a more
            elaborate design, I had to keep it simple due to the limited
            timeframe. The resulting RDM design can be seen in the following
            image. Though it may seem basic, I'm proud of what I was able to
            achieve in the given time frame.
          </p>

          <div className="sm:h-[200px] lg:h-[400px] w-full bg-rdm-design bg-contain bg-no-repeat bg-center rounded-2xl bg-palette-green"></div>
        </section>

        <section>
          <div className="h-auto flex gap-2 items-end flex-grow mt-4">
            <a
              target="_blank"
              href="https://ai-interviewer-gh3q.onrender.com"
              className="cursor-pointer text-palette-black text-center w-[60%] ml-2 mb-2 shadow-btn-thick hover:shadow-btn-thick-hover active:shadow-btn-thick-click hover:-translate-x-btn-hover hover:translate-y-btn-hover active:-translate-x-btn-click active:translate-y-btn-click transform-gpu bg-palette-yellow border-2 lg:border-4 border-palette-black text-sm lg:text-xl font-bold rounded-full py-1 lg:py-2 px-8 lg:px-16 transition-[box-shadow_translate] duration-200 noselect"
            >
              Preview the Live version
            </a>
            <a
              target="_blank"
              href="https://github.com/lucianosimoni/ai-interviewer-client"
              className="cursor-pointer text-palette-black text-center w-[40%] text-sm lg:text-xl border-2 lg:border-4 h-fit py-1 lg:py-2 px-5 lg:px-6 border-palette-black hover:bg-palette-green font-bold rounded-full transition-[background-color] noselect"
            >
              GitHub Frontend
            </a>
            <a
              target="_blank"
              href="https://github.com/lucianosimoni/ai-interviewer-server"
              className="cursor-pointer text-palette-black text-center w-[40%] text-sm lg:text-xl border-2 lg:border-4 h-fit py-1 lg:py-2 px-5 lg:px-6 border-palette-black hover:bg-palette-green font-bold rounded-full transition-[background-color] noselect"
            >
              GitHub Backend
            </a>
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
