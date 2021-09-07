import HeaderBottom from "./HeaderBottom";
import HeaderContent from "./HeaderContent";
import NavBar from "./NavBar";

function HeroHeader() {
  return (
    <header className="hero_header display_column">
      <div className="header_top display_column">
        <NavBar />
        <HeaderContent />
      </div>
      <div className="header_bottom display_column">
        <HeaderBottom />
      </div>
    </header>
  )
}

export default HeroHeader;
