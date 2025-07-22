// import React from "react";
// import { Link } from "react-router-dom";
// import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";

// const SignUp = () => {
//   return (
//     <div className="w-full flex flex-col items-center justify-center mt-15">
//       <div className="text-4xl mb-5">
//         Make the most of your professional life
//       </div>

//       <div className="w-[85%] md:w-[28%] shadow-xl rounded-b-sm p-10">
//         <div className="flex flex-col gap-4">
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="text"
//               className="w-full text-xl border-2 rounded-lg px-5 py-1"
//               placeholder="Email"
//             />
//           </div>

//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               type="password"
//               className="w-full text-xl border-2 rounded-lg px-5 py-1"
//               placeholder="Password"
//             />
//           </div>

//           <div>
//             <label htmlFor="f_name">Full Name</label>
//             <input
//               id="f_name"
//               type="text"
//               className="w-full text-xl border-2 rounded-lg px-5 py-1"
//               placeholder="Full Name"
//             />
//           </div>

//           <button className="w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center cursor-pointer my-2">
//             Register
//           </button>
//         </div>

//         <div className="flex items-center gap-2 my-6">
//           <div className="border-b border-gray-400 w-[45%]" />
//           <div>or</div>
//           <div className="border-b border-gray-400 w-[45%]" />
//         </div>

//         <button className="w-full flex justify-center items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
//           <img
//             src="https://static.designboom.com/wp-content/uploads/2025/05/google-changes-G-logo-gradient-color-effect-designboom-04.jpg"
//             alt="Google"
//             className="w-7 h-7"
//           />
//           <GoogleLoginComp />
//         </button>
//       </div>

//       <div className="mt-4 mb-10">
//         Already on LinedIn?
//         <Link to={"/login"} className="text-blue-800 cursor-pointer ml-1">
//           Sign in
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";

const SignUp = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 px-4 overflow-hidden">
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

      {/* Sign Up Box */}
      <div className="relative z-10 w-full max-w-md bg-white shadow-2xl rounded-xl p-8 md:p-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
          Make the most of your professional life
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm text-gray-600 mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2.5 rounded-lg text-sm font-medium transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <div className="mb-4">
          <GoogleLoginComp />
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already on LinedIn?
          <Link
            to="/login"
            className="text-blue-700 hover:underline ml-1 font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
