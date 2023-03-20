import NavigationItem from "./NavigationItem";

export default function Navigation({ homeVisible, scrollTo, references }) {
  return (
    <nav
      className={
        homeVisible
          ? "animate-opacity-fade-in-0s-delay absolute h-full flex right-0 z-[51] bg-palette-yellow overflow-hidden"
          : "invisible absolute right-0 z-[51]"
      }
    >
      <ul>
        <NavigationItem
          onClick={() => scrollTo(references.homeSection)}
          name={"Home"}
        />
        <NavigationItem
          onClick={() => scrollTo(references.projectsSection)}
          name={"Projects"}
        />
        <NavigationItem
          onClick={() => scrollTo(references.aboutSection)}
          name={"About me"}
        />
        <NavigationItem
          onClick={() => scrollTo(references.aiSection)}
          name={"Ask my AI"}
        />
        <NavigationItem
          onClick={() => scrollTo(references.educationSection)}
          name={"Education"}
        />
        <NavigationItem
          onClick={() => scrollTo(references.contactSection)}
          name={"Contacts"}
        />
      </ul>
    </nav>
  );
}
