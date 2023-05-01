import { useEffect } from "react";
import NavigationItem from "./NavigationItem";

export default function Navigation({
  homeVisible,
  scrollTo,
  references,
  selectedSection,
}) {
  return (
    <nav
      className={
        homeVisible
          ? "invisible sm:visible absolute h-full flex items-center right-4 z-[51] group/nav animate-opacity-fade-in-0s-delay"
          : "invisible absolute right-0 z-[51]"
      }
    >
      <ul className="bg-[#f7ede260] rounded-2xl flex flex-col gap-4">
        <NavigationItem
          onClick={() => scrollTo(references.homeSection)}
          name={"Home"}
          selected={selectedSection === references.homeSection}
        />
        <NavigationItem
          onClick={() => scrollTo(references.projectsSection)}
          name={"Projects"}
          selected={selectedSection === references.projectsSection}
        />
        <NavigationItem
          onClick={() => scrollTo(references.aboutSection)}
          name={"About me"}
          selected={selectedSection === references.aboutSection}
        />
        <NavigationItem
          onClick={() => scrollTo(references.aiSection)}
          name={"Ask my AI"}
          selected={selectedSection === references.aiSection}
        />
        <NavigationItem
          onClick={() => scrollTo(references.educationSection)}
          name={"Education"}
          selected={selectedSection === references.educationSection}
        />
        <NavigationItem
          onClick={() => scrollTo(references.contactSection)}
          name={"Contacts"}
          selected={selectedSection === references.contactSection}
        />
      </ul>
    </nav>
  );
}
