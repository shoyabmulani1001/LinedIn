import React from "react";
import { motion } from "framer-motion";
import Card from "../../components/Card/card";
import Advertisment from "../../components/Advertisment/advertisment";
import ProfileCard from "../../components/ProfileCard/profileCard";
import Conversation from "../../components/Conversation/conversation";
import ImageIcon from "@mui/icons-material/Image";

const Messages = () => {
  return (
    <div className="relative min-h-screen mt-10">
      {/* Animated SVG Background */}
      <motion.div
        animate={{ x: ["0%", "10%", "0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
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

      {/* Main Content */}
      <div className="relative z-10 px-5 xl:px-52 py-9 flex gap-5 w-full mt-5">
        <div className="flex w-full gap-5">
          {/* Left Panel - Profile */}
          <div className="hidden md:block md:w-[26%] py-5">
            <div className="h-fit bg-white bg-opacity-90 rounded-xl p-4 shadow-md">
              <ProfileCard />
            </div>
          </div>

          {/* Center Panel - Chat */}
          <div className="w-full sm:w-[60%] my-5 flex flex-col gap-5">
            <Card padding={0}>
              {/* Chat Header */}
              <div className="px-5 py-3 font-bold text-xl border-b border-gray-200">
                Messaging
              </div>

              <div className="flex w-full">
                {/* Conversations List */}
                <div className="w-[40%] h-[480px] overflow-y-auto border-r border-gray-200 p-4">
                  <Conversation />
                </div>

                {/* Chat Box */}
                <div className="w-[60%] flex flex-col justify-between p-4">
                  {/* Chat Messages */}
                  <div className="flex gap-3 mb-4">
                    <img
                      className="w-10 h-10 rounded-full object-cover border border-blue-500"
                      src="https://media.licdn.com/dms/image/v2/D4D03AQG_SoXkVaXztA/profile-displayphoto-crop_800_800/B4DZe8sPAwGgAI-/0/1751217405541?e=1755734400&v=beta&t=AJdqyHaqmX_BqYjKE6P5Tgv-HQmxImn5dRFOaWdlLMY"
                      alt="Sender"
                    />
                    <div>
                      <p className="text-sm font-semibold">Sachin Sargar</p>
                      <div className="mt-1 text-sm bg-gray-100 px-3 py-2 rounded-lg">
                        This is a text message
                      </div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSabrBZxuW139T0wCclOEZlj8-uf_pZX2gjw&s"
                        className="w-[220px] h-[160px] rounded-md mt-3"
                        alt="Message Media"
                      />
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="mt-auto pt-3 border-t border-gray-200">
                    <textarea
                      rows={3}
                      className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none"
                      placeholder="Write a message..."
                    />
                    <div className="flex items-center justify-between pt-2">
                      <label
                        htmlFor="chatImg"
                        className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-100"
                      >
                        <ImageIcon className="text-gray-600" />
                        <input type="file" id="chatImg" className="hidden" />
                      </label>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Panel - Ads */}
          <div className="hidden md:block md:w-[26%] py-5">
            <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-md">
              <Advertisment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

// import React from "react";
// import Card from "../../components/Card/card";

// const Messages = () => {
//   return (
//     <div className="px-4 md:px-10 lg:px-24 xl:px-40 py-10 w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Left Section - Messaging */}
//         <div className="w-full md:w-3/4">
//           <Card padding={0}>
//             <div className="border-b border-gray-300 px-6 py-4 bg-white rounded-t-2xl shadow-sm">
//               <h1 className="text-2xl font-semibold text-gray-800">
//                 Messaging
//               </h1>
//             </div>

//             {/* Conversations Section */}
//             <div className="px-6 py-4 bg-white h-[60vh] overflow-y-auto rounded-b-2xl shadow-inner">
//               <p className="text-gray-500 italic text-center mt-20">
//                 Your conversations will appear here.
//               </p>
//             </div>
//           </Card>
//         </div>

//         {/* Right Section - Optional Extras (ex: contacts, filters) */}
//         <div className="hidden md:block md:w-1/4">
//           <Card padding={0}>
//             <div className="bg-white p-4 rounded-2xl shadow-sm h-full">
//               <h2 className="text-lg font-semibold text-gray-700 mb-4">
//                 Contacts
//               </h2>
//               <p className="text-sm text-gray-500">No contacts available.</p>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;
