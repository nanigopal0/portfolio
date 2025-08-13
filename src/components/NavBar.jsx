import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: "me", label: "Me" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    // { id: "experience", label: "Experience" },
    // { id: "achievements", label: "Achievements" },
  ];

  const handleNavClick = () => {
    if (showMenu) {
      setShowMenu(false); // Close menu if clicking outside
    }
  };

  return (
    <>
      <nav
        onClick={handleNavClick}
        className="flex justify-between items-center py-4 px-8"
      >
        <p to="/" className="text-3xl font-medium ">
          Portfolio
        </p>

        {showMenu ? (
          <IoCloseOutline
            className="md:hidden cursor-pointer"
            size={25}
            fontWeight="bold"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <CiMenuBurger
            className="md:hidden cursor-pointer"
            size={25}
            fontWeight="bold"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}

        <div className="hidden md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              to={`#${item.id}`}
              className={`ml-6 p-2 text-lg font-medium hover:bg-blue-700 rounded-lg ${
                location.hash === "#" + item.id ? "bg-blue-700" : ""
              }`}
              onClick={() => setShowMenu(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {showMenu && (
        <div
          className="md:hidden flex top-14 right-8 z-50 fixed w-2/5  p-4
        flex-col border border-white/20 bg-indigo-800/60 rounded-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mb-4 hover:bg-blue-700 p-4 rounded-lg menu-items ${
                location.hash === "#" + item.id ? "bg-blue-700" : ""
              }`}
              onClick={() => setShowMenu(false)}
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
