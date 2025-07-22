// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar1 = () => {
//   return (
//     <nav className="w-full bg-gray-100 md:px-24 px-5 flex justify-between py-4">
//       <Link
//         to="/"
//         aria-label="Go to homepage"
//         className="flex items-center gap-2"
//       >
//         <h3 className="text-blue-800 font-bold text-3xl">Lined</h3>
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
//           alt="LinkedIn Logo representing brand Lined"
//           className="w-7 h-7"
//         />
//       </Link>

//       <div className="flex items-center md:gap-4 gap-2">
//         <Link
//           to="/signUp"
//           className="md:px-4 text-black rounded-3xl text-xl hover:bg-gray-200"
//         >
//           Join Now
//         </Link>
//         <Link
//           to="/login"
//           className="px-4 py-2 border border-blue-800 text-blue-800 rounded-3xl text-xl hover:bg-blue-100"
//         >
//           Sign In
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar1;

import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <nav className="w-full bg-white px-5 md:px-24 py-4 shadow-md sticky top-0 z-50">
      {/* Logo and Brand */}
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Go to homepage"
        >
          <h3 className="text-blue-700 font-bold text-2xl md:text-3xl group-hover:text-blue-900 transition">
            Lined
          </h3>
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
            alt="Lined Logo"
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6"
          /> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
            className="w-8 h-8 animate-bounce transition-transform duration-300"
          />
        </Link>

        {/* Right-side links */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link
            to="/signUp"
            className="px-5 py-1.5 text-sm md:text-base font-medium text-gray-700 rounded-full hover:bg-gray-100 transition duration-200"
          >
            Join Now
          </Link>
          <Link
            to="/login"
            className="px-5 py-2 text-sm md:text-base font-semibold text-blue-700 border border-blue-700 rounded-full hover:bg-blue-50 transition duration-200 shadow-sm"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
