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
  };

  return (
    <section
      ref={reference}
      className="h-screen flex flex-col snap-center justify-center bg-bottom bg-no-repeat bg-contain bg-section-gradient-second relative"
    >
      {/* ⚠️ POPUP */}
      {copied ? (
        <div
          onClick={() => setCopied(false)}
          className="fixed left-0 top-0 cursor-pointer hover:bg-[#68a691] active:bg-[#264653] select-none bg-palette-green text-palette-white p-4 rounded-br-3xl transition-colors z-50"
        >
          Copied to clipboard 🤩
        </div>
      ) : null}

      {/* TITLE */}
      <div className="flex-none flex justify-center mt-8 z-30">
        <h1 className="text-palette-green drop-shadow-md font-bold md:text-2xl lg:text-5xl">
          Get in touch! ☎️
        </h1>
      </div>

      {/* MIDDLE CARDS */}
      <div className="flex-auto flex gap-12 items-center justify-center z-30">
        {/* 🃏 EMAIL CARD*/}
        <div className="flex flex-col gap-2 px-8 pt-4 bg-palette-white rounded-[40px] shadow-[0_5px_20px_#14213d80] relative">
          {/* ICON */}
          <span className="absolute bg-palette-yellow p-1 rounded-full -left-4 -top-4">
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
        <div className="flex flex-col gap-2 px-8 pt-4 bg-palette-white rounded-[40px] shadow-[0_5px_20px_#14213d80] relative">
          {/* ICON */}
          <span className="absolute bg-palette-yellow p-1 rounded-full -left-4 -top-4">
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
      <div className="flex flex-col gap-8 items-center bg-doodle-pattern bg-cover bg-palette-white shadow-[0_0_40px_#14213d] mx-auto p-8 rounded-t-[40px] h-[150px] w-[600px] z-30">
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

        <h4 className="text-palette-black font-extralight">
          ©️ 2023 Luciano Simoni
        </h4>
      </div>

      {/* BACKGROUND */}
      <div className="bottom-0 left-0 absolute w-[100vw] h-[100vh] bg-no-repeat bg-bottom z-10 bg-rainforest-nobg" />
    </section>
  );
}
