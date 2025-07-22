// import React, { useState } from "react";
// import "./navbar2.css";
// import HomeIcon from "@mui/icons-material/Home";
// import GroupIcon from "@mui/icons-material/Group";
// import WorkIcon from "@mui/icons-material/Work";
// import MessageIcon from "@mui/icons-material/Message";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import { Link, useLocation } from "react-router-dom";
// import Navbar1 from "../NavbarV1/navbar1";
// const Navbar2 = () => {
//   const [dropdown, setDropdown] = useState(true);
//   const location = useLocation();

//   console.log(location);

//   return (
//     <div className="bg-white flex justify-between items-center py-2 px-5 fixed top-0 w-full z-[1000] shadow-md">
//       <div className="flex gap-3 items-center">
//         {/* LinkedIn Logo */}

//         <Link to={"/feeds"}>
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
//             alt="LinkedIn Logo"
//             className="w-8 h-8"
//           />
//         </Link>
//         {/* Search Input with Dropdown */}
//         <div
//           className="relative"
//           onFocus={() => setDropdown(true)}
//           onBlur={() => setDropdown(false)}
//           tabIndex={-1} // Enables blur detection on entire div
//         >
//           <input
//             type="text"
//             className="searchInput w-72 bg-gray-100 rounded-sm h-10 px-4 outline-none"
//             placeholder="Search"
//           />

//           {dropdown && (
//             <div className="absolute mt-1 w-80 bg-gray-200 rounded shadow-md z-10">
//               <div className="flex gap-2 items-center p-2 hover:bg-gray-300 cursor-pointer">
//                 <img
//                   src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
//                   alt="Profile"
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <div className="font-medium">Shoyab</div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="hidden gap-10 md:flex">
//         <Link
//           to={"/feeds"}
//           className="flex flex-col items-center cursor-pointer"
//         >
//           <HomeIcon
//             sx={{ color: location.pathname === "/feeds" ? "black" : "gray" }}
//           />
//           <div
//             className={`text-sm text-gray-500  ${
//               location.pathname === "/feeds" ? "border-b-3" : ""
//             }`}
//           >
//             Home
//           </div>
//         </Link>
//         <Link
//           to={"/myNetwork"}
//           className="flex flex-col items-center cursor-pointer"
//         >
//           <GroupIcon
//             sx={{
//               color: location.pathname === "/myNetwork" ? "black" : "gray",
//             }}
//           />
//           <div
//             className={`text-sm text-gray-500  ${
//               location.pathname === "/mynetwork" ? "border-b-3" : ""
//             }`}
//           >
//             My Network
//           </div>
//         </Link>
//         <Link
//           to={"/resume"}
//           className="flex flex-col items-center cursor-pointer"
//         >
//           <WorkIcon
//             sx={{ color: location.pathname === "/resume" ? "black" : "gray" }}
//           />
//           <div
//             className={`text-sm text-gray-500  ${
//               location.pathname === "/resume" ? "border-b-3" : ""
//             }`}
//           >
//             Resume
//           </div>
//         </Link>

//         <Link
//           to={"/messages"}
//           className="flex flex-col items-center cursor-pointer"
//         >
//           <MessageIcon
//             sx={{ color: location.pathname === "/messages" ? "black" : "gray" }}
//           />
//           <div
//             className={`text-sm text-gray-500  ${
//               location.pathname === "/messages" ? "border-b-3" : ""
//             }`}
//           >
//             messages
//           </div>
//         </Link>
//         <div className="flex flex-col items-center cursor-pointer">
//           <div>
//             <NotificationsIcon
//               sx={{
//                 color:
//                   location.pathname === "/notifications" ? "black" : "gray",
//               }}
//             />{" "}
//             <span className="p-1 rounded-full text-sm bg-red-700 text-white">
//               1
//             </span>
//           </div>

//           <div
//             className={`text-sm text-gray-500  ${
//               location.pathname === "/notifications" ? "border-b-3" : ""
//             }`}
//           >
//             Notification
//           </div>
//         </div>
//         <Link
//           to={"/profile/123"}
//           className="flex flex-col items-center cursor-pointer group"
//         >
//           <img
//             src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
//             alt="User Avatar"
//             className="w-6 h-6 rounded-full group-hover:scale-105 transition-transform duration-200"
//           />
//           <div className="text-sm text-gray-500 group-hover:text-black">Me</div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar2;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: <HomeIcon />, label: "Home", to: "/feeds" },
    { icon: <GroupIcon />, label: "My Network", to: "/myNetwork" },
    { icon: <WorkIcon />, label: "Resume", to: "/resume" },
    { icon: <MessageIcon />, label: "Messages", to: "/messages" },
    {
      icon: <NotificationsIcon />,
      label: "Notifications",
      to: "/notifications",
      badge: 1,
    },
  ];

  const renderNavLink = ({ icon, label, to, badge }) => (
    <Link
      key={label}
      to={to}
      className="flex flex-col items-center text-sm text-gray-600 hover:text-black relative"
      onClick={() => setMobileMenuOpen(false)}
    >
      <div className="relative">
        {icon}
        {badge && (
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
            {badge}
          </span>
        )}
      </div>
      <span className={location.pathname === to ? "font-bold border-b-2" : ""}>
        {label}
      </span>
    </Link>
  );

  return (
    <nav className="bg-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Logo + Search */}
        <div className="flex items-center gap-6">
          <Link to="/feeds">
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
              alt="Lined Logo"
              className="w-8 h-8 transition-transform duration-300 hover:scale-110 animate-pulse"
            /> */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
              alt="LinkedIn Logo"
              className="w-8 h-8 animate-bounce transition-transform duration-300"
            />
          </Link>

          <div
            className="relative hidden sm:block"
            onFocus={() => setDropdown(true)}
            onBlur={() => setDropdown(false)}
            tabIndex={0}
          >
            <input
              type="text"
              placeholder="Search"
              className="h-10 w-72 bg-gray-100 rounded-md px-4 text-sm"
            />
            {dropdown && (
              <div className="absolute mt-1 w-80 bg-white border rounded shadow-md z-10">
                <div className="flex gap-2 items-center p-2 hover:bg-gray-100 cursor-pointer">
                  <img
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="font-medium">Shoyab</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(renderNavLink)}

          <Link to="/profile/123" className="flex flex-col items-center group">
            <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
              alt="User"
              className="w-6 h-6 rounded-full group-hover:scale-105 transition-transform"
            />
            <span className="text-sm group-hover:text-black">Me</span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pt-2 pb-6 flex flex-col gap-6 transition-all">
          {navItems.map(renderNavLink)}
          <Link
            to="/profile/123"
            className="flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
              alt="User"
              className="w-6 h-6 rounded-full"
            />
            <span>Me</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
