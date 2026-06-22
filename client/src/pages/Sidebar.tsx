import { FaCalendar, FaChartBar, FaCircleArrowLeft, FaCircleArrowRight, FaCircleCheck, FaCube, FaGraduationCap, FaMessage, FaNoteSticky, FaStar } from "react-icons/fa6";
import { useApp } from "../context/AppContext";
import { FaHome } from "react-icons/fa";
import { Menu, Notebook } from "lucide-react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const { isOpen, setIsOpen } = useApp();

  const NavLinks = [
    { name: "Home", to: "/", icon: <FaHome /> },
    { name: "My Classes", to: "/classes", icon: <Menu /> },
    { name: "Lessons", to: "/lessons", icon: <Notebook /> },
    { name: "Resources", to: "/resources", icon: <FaCube /> },
    { name: "Programs", to: "/programs", icon: <FaStar /> },
    { name: "Events & Calendar", to: "/events", icon: <FaCalendar /> },
    { name: "Documents & Records", to: "/documents", icon: <FaNoteSticky /> },
    { name: "Training & Resources", to: "/training", icon: <FaGraduationCap /> },
    { name: "Contribution & Welfare", to: "/contribution", icon: <FaCircleCheck /> },
    { name: "Communication", to: "/communication", icon: <FaMessage /> },
    { name: "Reports", to: "/reports", icon: <FaChartBar /> },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 h-screen
        bg-white/10 backdrop-blur-xl shadow-lg
        flex flex-col
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-20"}
      `}
    >

      {/* Logo */}
      <div className="flex items-center bg-blue-500/60 backdrop-blur-md">
        <img
          src={assets.logo}
          alt="logo"
          className={`${isOpen ? "w-24 h-24" : "w-16 h-16"}`}
        />

        {isOpen && (
          <div className="leading-tight">
            <h1 className="text-3xl font-bold text-white">KGM</h1>
            <p className="text-xs text-white/80">SUNDAY SCHOOL</p>
            <p className="text-xs text-white/80">MANAGEMENT SYSTEM</p>
          </div>
        )}
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer transition duration-300 hover:scale-110 "
        >
          {isOpen ? (
            <FaCircleArrowLeft color="blue" size={24}  />
          ) : (
            <FaCircleArrowRight color="blue" size={18} className={`${isOpen ? "" : "relative right-1"}`} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 mt-4">
        <ul className="space-y-2">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3
                  px-3 py-2 rounded-lg
                  transition-all duration-200
                  group

                  ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-100"
                  }
                `
                }
              >
                <span className="text-lg shrink-0">
                  {link.icon}
                </span>

                {/* label */}
                <span
                  className={`
                    whitespace-nowrap transition-all duration-200
                    ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}
                  `}
                >
                  {link.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;