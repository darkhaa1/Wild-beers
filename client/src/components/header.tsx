import { Link } from "react-router-dom";
import "./header.css";
import { type SetStateAction, useState } from "react";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const [hoveredLink, setHoveredLink] = useState(""); // État pour suivre le lien survolé

  const handleMouseEnter = (link: SetStateAction<string>) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink("");
  };
  return (
    <header>
      <img
        className="banner"
        src="/src/assets/images/barrels_banner.jpg"
        alt="barrels_banner"
      />

      <div className="bannerWrap">
        <div className="h1-logo-container">
          <h1 className="titre">Wild beers </h1>
          <img
            className="logoImg"
            src="/src/assets/images/logo.png"
            alt="logo"
          />
        </div>

        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className="burger-menu" onClick={handleShowMenu}>
          <span className={`line  ${showMenu ? "line1-activated" : "line1"}`} />
          <span className={`line  ${showMenu ? "line2-activated" : "line2"}`} />
          <span className={`line  ${showMenu ? "line3-activated" : "line3"}`} />
        </div>
      </div>
      <nav className={`barreNav ${showMenu ? "show-nav" : "hide-nav"}`}>
        <Link
          to="/"
          className={`homeLink ${hoveredLink === "home" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
          onClick={handleShowMenu}
        >
          Home
        </Link>
        <Link
          to="/mes-favoris"
          className={`homeLink ${hoveredLink === "favorites" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("favorites")}
          onMouseLeave={handleMouseLeave}
          onClick={handleShowMenu}
        >
          Mes favoris
        </Link>
        <Link
          to="/notre-histoire"
          className={`homeLink ${hoveredLink === "history" ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter("history")}
          onMouseLeave={handleMouseLeave}
          onClick={handleShowMenu}
        >
          Notre histoire
        </Link>
      </nav>
    </header>
  );
}
export default Header;
