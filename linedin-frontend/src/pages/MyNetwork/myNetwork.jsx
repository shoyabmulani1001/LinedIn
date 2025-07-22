// import React, { useState } from "react";
// import ProfileCard from "../../components/ProfileCard/profileCard";

// const MyNetwork = () => {
//   const [text, setText] = useState("catch Up with Friends");

//   const handleFriends = async () => {
//     setText("Catch Up with Friends");
//   };

//   const handlePending = async () => {
//     setText("Pending Request");
//   };

//   return (
//     <div className="px-5 xl:px-52 py-9 flex flex-col gap-5 w-full mt-5 bg-gray-100 ">
//       <div className="py-4 px-10 border-1 border-gray-400 w-full flex justify-between my-5 text-xl bg-white rounded-xl ">
//         <div>{text}</div>
//         <div className="flex gap-3 ">
//           <button
//             onClick={handleFriends}
//             className={`p-1 border-1 rounded-lg border-gray-300 cursor-pointer ${
//               text === "Catch Up with Friends" ? "bg-blue-800 text-white" : ""
//             }`}
//           >
//             Friends
//           </button>
//           <button
//             onClick={handlePending}
//             className={`p-1 border-1 rounded-lg border-gray-300 cursor-pointer`}
//           >
//             Pending Request
//           </button>
//         </div>
//       </div>

//       <div className="flex h-[80vh] w-full gap-7 flex-wrap items-start justify-center">
//         <div className="md:w-[23%] h-[270px] sm:w-full">
//           <ProfileCard />
//         </div>
//         <div className="md:w-[23%] h-[270px] sm:w-full">
//           <ProfileCard />
//         </div>
//         <div className="md:w-[23%] h-[270px] sm:w-full">
//           <ProfileCard />
//         </div>
//         <div className="md:w-[23%] h-[270px] sm:w-full">
//           <ProfileCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyNetwork;

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProfileCard from "../../components/ProfileCard/profileCard";

const MyNetwork = () => {
  const [text, setText] = useState("Catch Up with Friends");

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-8 xl:px-52 bg-blue-50 overflow-hidden">
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
            d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,229.3C560,224,640,192,720,186.7C800,181,880,203,960,197.3C1040,192,1120,160,1200,133.3C1280,107,1360,85,1400,74.7L1440,64V0H0Z"
          />
        </svg>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Header Card */}
        <div className="bg-white border border-gray-300 shadow-lg rounded-xl px-6 py-4 sm:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 sm:mb-0">
            {text}
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => setText("Catch Up with Friends")}
              className={`px-4 py-1 rounded-md border transition ${
                text === "Catch Up with Friends"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-700 border-gray-400"
              }`}
            >
              Friends
            </button>
            <button
              onClick={() => setText("Pending Request")}
              className={`px-4 py-1 rounded-md border transition ${
                text === "Pending Request"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-700 border-gray-400"
              }`}
            >
              Pending Request
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="h-[270px]">
              <ProfileCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyNetwork;
