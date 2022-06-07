import React, { useState } from "react";
import { iconData } from "./resurs";
import "./MainMenu.css";

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className="mainMenuContainer"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div className="iconsContainer">
        {iconData.map((item) => (
          <div className="menue" key={item.id}>
            <img className="image" src={item.uri} alt={item.alt} />
            {isMenuOpen && <h3>{item.name}</h3>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
