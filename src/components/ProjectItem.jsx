export default function ProjectItem({
  title,
  description,
  stack,
  previewLink,
  githubLink,
  imgName,
}) {
  const images = {
    "ai-interviewer": "bg-ai-interviewer ",
    "address-book": "bg-address-book ",
    pothole: "bg-pothole ",
    trextter: "bg-trextter ",
  };

  return (
    <div className="bg-palette-white flex flex-col w-[80%] p-2 rounded-[1.4rem] lg:rounded-[2.125rem] border-2 lg:border-4 border-palette-black shadow-btn-thick">
      {/* 🖼️ IMG */}
      <div
        className={`${images[imgName]} h-[100px] lg:h-[130px] xl:h-[200px] border-1 bg-cover bg-center w-full cursor-pointer hover:scale-[101%] rounded-[23px] border-palette-black transition-all duration-500`}
      />

      {/* 📖 TEXTS */}
      <div className="h-auto flex flex-col noselect text-palette-black py-2 gap-2 hover:cursor-default">
        <h2 className="text-palette-yellow text-xl lg:text-2xl xl:text-3xl font-bold drop-shadow-md">
          {title}
        </h2>
        <p className="text-xs">{description}</p>
        <span className="text-xs lg:text-sm h-auto">
          <b className="text-palette-green drop-shadow-xl">Tech | </b>
          {stack}
        </span>
      </div>

      {/* 🔽 Buttons */}
      <div className="h-auto flex gap-2 items-end flex-grow">
        <a
          target="_blank"
          href={previewLink}
          className="cursor-pointer text-palette-black text-center w-[60%] ml-2 mb-2 shadow-btn-thick hover:shadow-btn-thick-hover active:shadow-btn-thick-click hover:-translate-x-btn-hover hover:translate-y-btn-hover active:-translate-x-btn-click active:translate-y-btn-click transform-gpu bg-palette-yellow border-2 lg:border-4 border-palette-black text-sm lg:text-xl font-bold rounded-full py-1 lg:py-2 px-8 lg:px-16 transition-[box-shadow_translate] duration-200 noselect"
        >
          Preview
        </a>
        <a
          target="_blank"
          href={githubLink}
          className="cursor-pointer text-palette-black text-center w-[40%] text-sm lg:text-xl border-2 lg:border-4 h-fit py-1 lg:py-2 px-5 lg:px-6 border-palette-black hover:bg-palette-green font-bold rounded-full transition-[background-color] noselect"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
