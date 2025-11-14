import { useState, useEffect } from "react";
import { useLocation, NavLink, Outlet } from "react-router-dom";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import {
  MdOutlineDashboard,
  MdOutlineClass,
  MdOutlineLibraryBooks,
  MdLogout,
} from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiStudent } from "react-icons/pi";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
import { FaUsersLine } from "react-icons/fa6";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile toggle
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // desktop mini mode
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleCollapse = () => setIsSidebarCollapsed((prev) => !prev);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const menu = [
    { name: "Dashboard", icon: <MdOutlineDashboard />, path: "/dashboard" },
    { name: "Classes", icon: <MdOutlineClass />, path: "/classes" },
    { name: "Students", icon: <FaUsersLine />, path: "/students" },
    // {
    //   name: "Departments",
    //   icon: <HiOutlineOfficeBuilding />,
    //   path: "/departments",
    // },
    { name: "Subjects", icon: <MdOutlineLibraryBooks />, path: "/subjects" },
    { name: "Library", icon: <PiStudent />, path: "/library" },
    { name: "Holidays", icon: <MdOutlineLibraryBooks />, path: "/holidays" },
  ];

  const others = [
    { name: "Settings", icon: <FiSettings />, path: "/setting" },
    { name: "Accounts", icon: <AiOutlineUser />, path: "/account" },
    { name: "Help", icon: <FiHelpCircle />, path: "/help" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f7f8fc] text-gray-700 relative">
      {/* Sidebar */}
      <aside
        className={`fixed  top-0 left-0 h-screen z-40 bg-white shadow-sm border-r border-gray-200 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${isSidebarCollapsed ? "lg:w-20" : "lg:w-60"} w-60`}
      >
        {/* Logo and collapse toggle */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <img src="/TrackEdLogo.png" alt="TrackEd" className="w-8 h-8" />
            {!isSidebarCollapsed && (
              <h1 className="font-semibold text-[#6a7cff] text-lg">TrackEd</h1>
            )}
          </div>
          <button
            onClick={toggleCollapse}
            className="hidden lg:block text-gray-400 hover:text-gray-600"
            aria-label="Collapse sidebar"
          >
            {isSidebarCollapsed ? (
              <TbLayoutSidebarLeftExpand />
            ) : (
              <TbLayoutSidebarLeftCollapse />
            )}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 overflow-y-auto ">
          <p
            className={`text-xs font-semibold text-gray-400 uppercase mb-2 ${
              isSidebarCollapsed ? "hidden" : ""
            }`}
          >
            Menu
          </p>
          {menu.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-[#e9ebff] hover:text-[#6a7cff] transition"
            >
              <span className="text-lg">{item.icon}</span>
              {!isSidebarCollapsed && item.name}
            </NavLink>
          ))}

          <p
            className={`text-xs font-semibold text-gray-400 uppercase mt-6 mb-2 ${
              isSidebarCollapsed ? "hidden" : ""
            }`}
          >
            Others
          </p>
          {others.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-[#e9ebff] hover:text-[#6a7cff] transition"
            >
              <span className="text-lg">{item.icon}</span>
              {!isSidebarCollapsed && item.name}
            </NavLink>
          ))}
          <div className="p-5 border-t border-gray-200">
            <NavLink
              to="logout"
              className="flex items-center gap-2 text-red-500 hover:text-red-600"
            >
              <MdLogout />
              {!isSidebarCollapsed && "Logout"}
            </NavLink>
          </div>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col ${
          isSidebarCollapsed ? "lg:ml-20" : "lg:ml-60"
        } `}
      >
        {/* Topbar */}
        <header className="h-20 flex items-center justify-between px-6 bg-white border-b border-gray-200">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-2xl text-gray-500"
            aria-label="Toggle sidebar"
            aria-expanded={isSidebarOpen}
          >
            <RxHamburgerMenu />
          </button>

          <div className="flex items-center bg-[#f4f5ff] px-3 rounded-lg w-72">
            <IoSearchOutline className="text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent px-2 py-2 w-full outline-none text-sm text-gray-600"
            />
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <img
                src="/languages.png"
                alt="Language avatar"
                className="w-7 h-7 rounded-full"
              />
              <span className="text-sm text-gray-600">English</span>
            </div>
            <IoNotificationsOutline className="text-2xl text-gray-500" />
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6">Welcome Admin!</h2>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
