// import React from "react";
// import Advertisment from "../../components/Advertisment/advertisment";
// import { motion } from "framer-motion";
// import ResumeGenerator from "../../components/ResumeGenerator/ResumeGenerator";

// const Resume = () => {
//   return (
//     <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 min-h-screen">
//       {/* Animated Background */}
//       <motion.div
//         animate={{ x: ["0%", "10%", "0%"] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-0 left-0 w-full z-0"
//       >
//         <svg
//           viewBox="0 0 1440 320"
//           className="w-full h-[400px]"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#4299e1"
//             fillOpacity="0.3"
//             d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,229.3C560,224,640,192,720,186.7C800,181,880,203,960,197.3C1040,192,1120,160,1200,133.3C1280,107,1360,85,1400,74.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
//           ></path>
//         </svg>
//       </motion.div>

//       {/* Resume PDF section */}
//       <div className="relative px-5 xl:px-52 py-9 flex gap-5 w-full mt-5 z-10">
//         <div className="w-full sm:w-[74%] py-5">
//           <h1 className="text-2xl font-bold mb-4">My Resume</h1>

//           <div className="flex flex-wrap gap-4 mb-6">
//             <a
//               href="/Shoyab_Mulani_Resume1.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             >
//               View in New Tab
//             </a>
//             <a
//               href="/Shoyab_Mulani_Resume1.pdf"
//               download="My_Resume.pdf"
//               className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//             >
//               Download Resume
//             </a>
//           </div>

//           <div className="w-full h-[90vh] border shadow rounded-md overflow-hidden bg-white">
//             <iframe
//               src="/Shoyab_Mulani_Resume1.pdf"
//               className="w-full h-full"
//               title="Resume PDF"
//             ></iframe>
//           </div>
//         </div>

//         {/* Advertisement section */}
//         <div className="hidden md:block w-[26%] py-5">
//           <div className="sticky top-20">
//             <Advertisment />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;

import React, { useState } from "react";
import Advertisment from "../../components/Advertisment/advertisment";
import { motion } from "framer-motion";
import ResumeGenerator from "../../components/ResumeGenerator/ResumeGenerator";

const Resume = () => {
  const [showGenerator, setShowGenerator] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 min-h-screen mt-10">
      {/* Animated Background */}
      <motion.div
        animate={{ x: ["0%", "10%", "0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full z-0"
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[400px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#4299e1"
            fillOpacity="0.3"
            d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,229.3C560,224,640,192,720,186.7C800,181,880,203,960,197.3C1040,192,1120,160,1200,133.3C1280,107,1360,85,1400,74.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </motion.div>

      {/* Main Section */}
      <div className="relative px-5 xl:px-52 py-9 flex gap-5 w-full mt-5 z-10">
        {/* Left Section */}
        <div className="w-full sm:w-[74%] py-5">
          <h1 className="text-2xl font-bold mb-4">My Resume</h1>

          {!showGenerator ? (
            <>
              <div className="w-full h-[80vh] mb-6 border shadow rounded-md overflow-hidden bg-white">
                <iframe
                  src="/Shoyab_Mulani_Resume1.pdf"
                  className="w-full h-full"
                  title="Resume PDF"
                ></iframe>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4 bg-white border-l-4 border-blue-500 shadow px-4 py-3 rounded-md">
                <p className="text-gray-800 text-sm">
                  ✨ Use our AI Resume Generator to instantly create a
                  professional resume tailored to your skills and experience.
                  Just fill in your details — we’ll handle the formatting!
                </p>
              </div>
              <ResumeGenerator />
            </>
          )}

          {/* Bottom Button Section */}
          <div className="flex flex-wrap gap-4 mt-8">
            {/* Toggle View Buttons */}

            {/* Download/View Options */}
            <a
              href="/Shoyab_Mulani_Resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View in New Tab
            </a>
            <a
              href="/Shoyab_Mulani_Resume1.pdf"
              download="My_Resume.pdf"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Download Resume
            </a>
            <button
              onClick={() => setShowGenerator(true)}
              className={`px-4 py-2 rounded cursor-pointer transition-all duration-300 ${
                showGenerator
                  ? "bg-purple-600 text-white"
                  : "bg-white border border-purple-600 text-purple-600"
              }`}
            >
              Open AI Resume Generator
            </button>
          </div>
        </div>

        {/* Right Section - Ads */}
        <div className="hidden md:block w-[26%] py-5">
          <div className="sticky top-20">
            <Advertisment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
