// import React from "react";
// import { Link } from "react-router-dom";
// import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";

// const Login = () => {
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 md:p-10">
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
//           Sign In
//         </h2>

//         {/* Google Login */}
//         <div className="mb-6">
//           <GoogleLoginComp />
//         </div>

//         {/* Divider */}
//         <div className="flex items-center gap-3 my-6">
//           <hr className="flex-grow border-gray-300" />
//           <span className="text-gray-500 text-sm">or</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Input Fields */}
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm text-gray-600 mb-1"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2.5 rounded-lg text-sm font-medium transition duration-200"
//           >
//             Sign In
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-center text-sm text-gray-600 mt-6">
//           New to LinedIn?
//           <Link
//             to="/signUp"
//             className="text-blue-700 hover:underline ml-1 font-medium"
//           >
//             Join Now
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";

const Login = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Animated SVG Wave Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fill="#3b82f6"
            fillOpacity="1"
            d="M0,160L40,165.3C80,171,160,181,240,186.7C320,192,400,192,480,186.7C560,181,640,171,720,160C800,149,880,139,960,149.3C1040,160,1120,192,1200,213.3C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Login Card */}
      <div className="relative z-10 w-[90%] max-w-md bg-white shadow-2xl rounded-xl p-6 sm:p-10 mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        {/* Google Login */}
        <div className="mb-6">
          <GoogleLoginComp />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form Inputs */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2.5 rounded-lg text-sm font-medium transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          New to LinedIn?
          <Link
            to="/signUp"
            className="text-blue-700 hover:underline ml-1 font-medium"
          >
            Join Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
