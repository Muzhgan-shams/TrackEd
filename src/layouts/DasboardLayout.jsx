import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import {
  MdOutlineDashboard,
  MdOutlineClass,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiStudent } from "react-icons/pi";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import { MdLogout } from "react-icons/md";

export default function DashboardLayout() {
  const menu = [
    { name: "Dashboard", icon: <MdOutlineDashboard /> },
    { name: "Classes", icon: <MdOutlineClass /> },
    { name: "Departments", icon: <HiOutlineOfficeBuilding /> },
    { name: "Subjects", icon: <MdOutlineLibraryBooks /> },
    { name: "Library", icon: <PiStudent /> },
    { name: "Holidays", icon: <MdOutlineLibraryBooks /> },
  ];

  const others = [
    { name: "Settings", icon: <FiSettings /> },
    { name: "Accounts", icon: <AiOutlineUser /> },
    { name: "Help", icon: <FiHelpCircle /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#f7f8fc] text-gray-700">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-sm border-r border-gray-200 flex flex-col items-between">
        {/* Logo */}
        <div className="h-20 flex items-center justify-center border-b border-gray-100">
          <img src="/TrackEdLogo.png" alt="TrackEd" className="w-8 h-8 mr-2" />
          <h1 className="font-semibold text-[#6a7cff] text-lg">TrackEd</h1>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 ">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
            Menu
          </p>
          {menu.map((item, i) => (
            <NavLink
              key={i}
              to="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-[#e9ebff] hover:text-[#6a7cff] transition"
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}

          <p className="text-xs font-semibold text-gray-400 uppercase mt-6 mb-2">
            Others
          </p>
          {others.map((item, i) => (
            <NavLink
              key={i}
              to="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-[#e9ebff] hover:text-[#6a7cff] transition"
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
          {/*  */}
          <div className="p-5 border-t border-gray-200">
            <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
              <MdLogout />
              Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-20 flex items-center justify-between px-8 bg-white border-b border-gray-200">
          {/* Search */}
          <div className="flex items-center bg-[#f4f5ff] px-3 rounded-lg w-72">
            <IoSearchOutline className="text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent px-2 py-2 w-full outline-none text-sm text-gray-600"
            />
          </div>

          {/* Right side */}
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

        {/* Dashboard content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6">Welcome Admin!</h2>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
