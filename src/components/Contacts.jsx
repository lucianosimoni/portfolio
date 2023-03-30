import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import EmailSvg from "./svg/contact/EmailSvg";
import GitHubSvg from "./svg/contact/GitHubSvg";
import LinkedInSvg from "./svg/contact/LinkedInSvg";
import PhoneSvg from "./svg/contact/PhoneSvg";

export default function Contacts({ reference }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (event) => {
    setCopied(true);
    console.log("handleCopy event is:", event);
  };

  return (
    <section
      ref={reference}
      className="h-screen flex flex-col snap-center justify-center bg-cover bg-repeat-x bg-mountain-dark-nobg bg-palette-white "
    >
      {/* ⚠️ POPUP */}
      {copied ? (
        <div
          onClick={() => setCopied(false)}
          className="fixed left-0 top-0 cursor-pointer hover:bg-[#68a691] active:bg-[#264653] select-none bg-palette-green text-palette-white p-4 rounded-br-3xl transition-colors"
        >
          Copied to clipboard 🤩
        </div>
      ) : null}

      {/* TITLE */}
      <div className="flex-none flex justify-center mt-8">
        <h1 className="text-palette-green drop-shadow-md font-bold md:text-2xl lg:text-5xl">
          Get in touch! ☎️
        </h1>
      </div>

      {/* MIDDLE CARDS */}
      <div className="flex-auto flex gap-12 items-center justify-center">
        {/* 🃏 EMAIL CARD*/}
        <div className="flex flex-col gap-2 px-8 pt-4 bg-[#f7ede250] rounded-[40px] shadow-[0_5px_20px_#14213d80] relative">
          {/* ICON */}
          <span className="absolute -left-4 -top-4">
            <EmailSvg size={34} />
          </span>
          {/* CARD'S BODY */}
          <h2 className="text-center font-semibold text-xl">EMAIL</h2>
          <span className="font-semibold">lucianoSimoniPersonal@gmail.com</span>

          {/* BUTTONS */}
          <div className="flex flex-row gap-8">
            <a
              href="mailto:lucianosimonipersonal@gmail.com"
              target="_blank"
              className="flex-auto font-semibold text-center bg-palette-yellow hover:bg-[#f4a261] active:bg-[#e76f51] rounded-t-full shadow-[0_0_10px_#14213d50] py-2 transition-[background-color]"
            >
              Open
            </a>
            <CopyToClipboard
              onCopy={handleCopy}
              text={"lucianosimonipersonal@gmail.com"}
            >
              <button className="flex-auto font-semibold text-center hover:bg-palette-yellow active:bg-[#f4a261] rounded-t-full shadow-[0_0_10px_#14213d50] py-2 transition-[background-color]">
                Copy
              </button>
            </CopyToClipboard>
          </div>
        </div>

        {/* 🃏 MOBILE CARD */}
        <div className="flex flex-col gap-2 px-8 pt-4 bg-[#f7ede250] rounded-[40px] shadow-[0_5px_20px_#14213d80] relative">
          {/* ICON */}
          <span className="absolute -left-4 -top-4">
            <PhoneSvg size={34} />
          </span>
          {/* CARD'S BODY */}
          <h2 className="text-center font-semibold text-xl">MOBILE</h2>
          <span className="font-semibold">+44 (0) 7417438484</span>
          <CopyToClipboard onCopy={handleCopy} text={"07417438484"}>
            <button className="flex-auto font-semibold text-center hover:bg-palette-yellow active:bg-[#f4a261] rounded-t-full shadow-[0_0_10px_#14213d50] py-2 transition-[background-color]">
              Copy
            </button>
          </CopyToClipboard>
        </div>
      </div>

      {/* BOTTOM BUTTONS */}
      <div className="flex flex-col gap-8 items-center bg-doodle-pattern bg-cover bg-palette-white mx-auto p-8 rounded-t-[40px] h-[150px] w-[600px]">
        <div className="flex flex-row gap-8">
          <a
            href="mailto:lucianosimonipersonal@gmail.com"
            target="_blank"
            className="cursor-pointer flex items-center justify-center drop-shadow-lg bg-palette-green w-[60px] h-[60px] rounded-full hover:scale-110 hover:drop-shadow-xl transition-all duration-500"
          >
            <EmailSvg size={34} />
          </a>
          <a
            href="https://github.com/lucianosimoni"
            target="_blank"
            className="cursor-pointer flex items-center justify-center drop-shadow-lg bg-palette-yellow w-[60px] h-[60px] rounded-full hover:scale-110 hover:drop-shadow-xl transition-all duration-500"
          >
            <GitHubSvg size={34} />
          </a>
          <a
            href="https://www.linkedin.com/in/luciano-simoni/"
            target="_blank"
            className="cursor-pointer flex items-center justify-center drop-shadow-lg bg-palette-pink w-[60px] h-[60px] rounded-full hover:scale-110 hover:drop-shadow-xl transition-all duration-500"
          >
            <LinkedInSvg size={34} />
          </a>
        </div>

        <h4>©️ 2023 Luciano Simoni</h4>
      </div>
    </section>
  );
}