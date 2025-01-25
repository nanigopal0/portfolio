import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav>
        <Link to={"/"} className="title ">Portfolio</Link>
        <IconContext.Provider value={{ className:'menu-btn' }} >
          <CiMenuBurger onClick={()=>setShowMenu(!showMenu)}/>
        </IconContext.Provider>
        <div className="nav-btn-container">
          <Link to={'me'} className="nav-items nav-content-items" >Me</Link>
          <Link to={"education"} className="nav-items nav-content-items">Education</Link>
          <Link to={"skills"} className="nav-items nav-content-items">Skills</Link>
          <Link to={"projects"} className="nav-items nav-content-items">Projects</Link>
          <Link to={"experience"} className="nav-items nav-content-items">Experience</Link>
          <Link to={"achievments"} className="nav-items nav-content-items">Achievments</Link>
        </div>
      </nav>
      {showMenu && (
        <div className="menu-items-container">
          <Link to={'me'} className="menu-items nav-items" >Me</Link>
          <Link to={"education"} className="menu-items nav-items">Education</Link>
          <Link to={"skills"} className="menu-items nav-items">Skills</Link>
          <Link to={"projects"} className="menu-items nav-items">Projects</Link>
          <Link to={"experience"} className="menu-items nav-items">Experience</Link>
          <Link to={"achievments"} className="menu-items nav-items">Achievments</Link>
        </div>
      )}
    </>
  );
}


export default NavBar;