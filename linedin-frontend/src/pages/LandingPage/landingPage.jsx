// import React from "react";
// import { Link } from "react-router-dom";
// import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";
// import Navbar1 from "../../components/NavbarV1/navbar1";

// const LandingPage = () => {
//   <Navbar1 />;
//   return (
//     <div className="flex flex-col md:flex-row my-4 py-[50px] md:pl-[120px] justify-between items-center">
//       {/* Left content */}
//       <div className="md:w-[50%] w-full">
//         <div className="text-4xl mx-auto text-gray-500">
//           Welcome To Your Professional Community
//         </div>

//         {/* <div className="my-6 mx-auto w-[70%] rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-200 cursor-pointer flex items-center justify-center py-3 px-6">
//           <GoogleLoginComp />
//         </div> */}

//         <div className="my-3 mx-auto w-[70%] rounded-full border-2 border-black hover:bg-gray-100 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 py-3 px-6">
//           <GoogleLoginComp />
//           {/* <span className="text-base font-medium">Sign in with Google</span> */}
//         </div>

//         <Link
//           to={"/login"}
//           className="my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black cursor-pointer justify-center py-2 border-2 hover:bg-gray-200"
//         >
//           <img
//             src="https://static.vecteezy.com/system/resources/previews/048/116/360/non_2x/gmail-email-logo-icon-free-png.png"
//             alt="Microsoft"
//             className="w-9 h-9 "
//           />
//           Sign With Email
//         </Link>

//         <div className="mx-auto mb-4 text-sm w-[70%] mt-6 text-center">
//           By clicking Continue to join or sign in, you agree to{" "}
//           <span className="text-blue-800 cursor-pointer hover:underline">
//             LinedIn User Agreement
//           </span>
//           ,{" "}
//           <span className="text-blue-800 cursor-pointer hover:underline">
//             Privacy Policy
//           </span>
//           , and{" "}
//           <span className="text-blue-800 cursor-pointer hover:underline">
//             Cookie Policy
//           </span>
//           .
//         </div>

//         <Link
//           to={"/signUp"}
//           className="mx-auto text-center mb-4 text-lg w-[70%] mt-4"
//         >
//           New to Lined?{" "}
//           <span className="text-blue-800 cursor-pointer hover:underline">
//             Join Now
//           </span>
//         </Link>
//       </div>

//       {/* Right image */}
//       <div className="md:w-[50%] w-full px-4 mt-10 md:mt-0">
//         <img
//           alt="LinkedIn illustration"
//           className="w-full h-auto object-contain"
//           src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
//         />
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

//

import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginComp from "../../components/GoogleLogin/googleLoginComp";
import Navbar1 from "../../components/NavbarV1/navbar1";

const LandingPage = () => {
  <Navbar1 />;
  return (
    <div className=" relative min-h-screen bg-blue-50 overflow-hidden">
      {/* Top Wave SVG */}
      <div className="absolute top-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-[150px]">
          <path
            fill="#3b82f6"
            fillOpacity="1"
            d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,154.7C672,160,768,128,864,106.7C960,85,1056,75,1152,96C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-10 md:pt-20">
        {/* Left Section */}
        <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Welcome to Your <br /> Professional Network
          </h1>
          <p className="text-gray-600 text-lg">
            Connect. Collaborate. Grow your career with LinedIn.
          </p>

          {/* Buttons */}
          <div className="space-y-4">
            <div className="w-[80%] mx-auto md:mx-0 rounded-full border-2 border-blue-700 hover:bg-blue-100 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 py-3 px-6">
              <GoogleLoginComp />
            </div>

            <Link
              to={"/login"}
              className="flex items-center justify-center gap-3 w-[80%] mx-auto md:mx-0 py-3 border-2 rounded-full text-blue-700 border-blue-700 bg-white hover:bg-blue-50 transition-all"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/048/116/360/non_2x/gmail-email-logo-icon-free-png.png"
                alt="Email"
                className="w-7 h-7"
              />
              Sign in with Email
            </Link>
          </div>

          <p className="text-sm text-gray-500 w-[80%] mx-auto md:mx-0">
            By continuing, you agree to our{" "}
            <span className="underline text-blue-700">User Agreement</span>,{" "}
            <span className="underline text-blue-700">Privacy Policy</span>, and{" "}
            <span className="underline text-blue-700">Cookie Policy</span>.
          </p>

          <Link
            to={"/signUp"}
            className="block text-center md:text-left text-blue-700 hover:underline"
          >
            New to Lined? Join Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center z-10">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt="LinkedIn illustration"
            className="w-[80%] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-[120px]">
          <path
            fill="#3b82f6"
            fillOpacity="1"
            d="M0,288L48,261.3C96,235,192,181,288,181.3C384,181,480,235,576,229.3C672,224,768,160,864,128C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;
