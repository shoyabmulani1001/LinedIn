import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../../components/ProfileCard/profileCard";
import Advertisment from "../../components/Advertisment/advertisment";
import Card from "../../components/Card/card";

const Notification = () => {
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

      {/* Main Content Over Background */}
      <div className="relative z-10 px-5 xl:px-52 py-9 flex gap-5 w-full mt-5 bg-transparent">
        <div className="flex w-full gap-5">
          {/* Left Section */}
          <div className="hidden md:block md:w-[26%] py-5">
            <div className="h-fit bg-white bg-opacity-90 rounded-xl p-4 shadow-md">
              <ProfileCard />
            </div>
          </div>

          {/* Middle Section */}
          <div className="w-full sm:w-[60%] my-5 flex flex-col gap-5">
            <Card padding={0}>
              <div className="w-full">
                {/* Notification 1 */}
                <div className="border cursor-pointer flex gap-4 items-center border-gray-300 p-3 rounded-lg hover:bg-blue-50 transition">
                  <img
                    className="rounded-full w-14 h-14 object-cover"
                    src="https://media.licdn.com/dms/image/v2/D4D35AQFjk6uyKkUk0Q/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1737137623633?e=1753718400&v=beta&t=Ux86pDrBweY5ErLgnw9ytg6eh2oK7qsHn0Zy3rvxKgU"
                    alt="Notification"
                  />
                  <p className="font-medium">
                    Avisshkar Shinde has sent you a friend request
                  </p>
                </div>

                {/* Notification 2 */}
                <div className="border cursor-pointer flex gap-4 items-center border-gray-300 p-3 rounded-lg hover:bg-blue-50 transition">
                  <img
                    className="rounded-full w-14 h-14 object-cover"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQG_SoXkVaXztA/profile-displayphoto-crop_800_800/B4DZe8sPAwGgAI-/0/1751217405541?e=1755734400&v=beta&t=AJdqyHaqmX_BqYjKE6P5Tgv-HQmxImn5dRFOaWdlLMY"
                    alt="Notification"
                  />
                  <p className="font-medium">Sachin Sargar liked your post</p>
                </div>

                {/* Notification 3 */}
                <div className="border cursor-pointer flex gap-4 items-center border-gray-300 p-3 rounded-lg hover:bg-blue-50 transition">
                  <img
                    className="rounded-full w-14 h-14 object-cover"
                    src="https://media.licdn.com/dms/image/v2/D4D35AQFjk6uyKkUk0Q/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1737137623633?e=1753718400&v=beta&t=Ux86pDrBweY5ErLgnw9ytg6eh2oK7qsHn0Zy3rvxKgU"
                    alt="Notification"
                  />
                  <p className="font-medium">
                    Alif Shaikh has sent you a friend request
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Section */}
          <div className=" sticky top-19 hidden md:block md:w-[26%] py-5">
            <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-md">
              <Advertisment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
