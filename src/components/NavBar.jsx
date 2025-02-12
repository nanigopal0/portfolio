import { CiMenuBurger } from "react-icons/ci";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(""); // Track active item

  const navItems = [
    { id: "me", label: "Me" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    // { id: "experience", label: "Experience" },
    // { id: "achievements", label: "Achievements" },
  ];

  // Function to handle active item change
  const handleItemClick = (id) => {
    setActiveItem(id);
    setShowMenu(false); // Close menu after clicking (for mobile)
  };

  return (
    <>
      <nav>
        <Link to="/" className="title">Portfolio</Link>
        <IconContext.Provider value={{ className: "menu-btn" }}>
          <CiMenuBurger onClick={() => setShowMenu(!showMenu)} />
        </IconContext.Provider>

        <div className="nav-btn-container">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-items ${activeItem === item.id ? "active" : ""}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {showMenu && (
        <div className="menu-items-container">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`menu-items ${activeItem === item.id ? "active" : ""}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default NavBar;
