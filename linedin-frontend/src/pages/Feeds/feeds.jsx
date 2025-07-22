import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../../components/Card/card";
import ProfileCard from "../../components/ProfileCard/profileCard";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ArticleIcon from "@mui/icons-material/Article";
import Advertisment from "../../components/Advertisment/advertisment";
import Post from "../../components/Post/post";
import Modal from "../../components/Modal/modal";
import AddModal from "../../components/AddModal/addModal";
import Loader from "../../components/Loader/loader";

const Feeds = () => {
  const [addPostModel, setAddPostModel] = useState(false);

  const handleOpenPostMoal = () => {
    setAddPostModel((prev) => !prev);
  };
  return (
    <div className="px-5 xl:px-52 py-9 flex gap-5 w-full mt-5 bg-gray-100 min-h-screen">
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
      {/* Left Section */}
      <div className="hidden md:block md:w-[25%] py-5">
        <div className="h-fit">
          <ProfileCard />
        </div>

        <div className="w-full my-5">
          <Card padding={1}>
            <div className="border-t border-gray-200 px-4 py-3 text-left text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Profile Viewers</span>
                <span className="text-blue-800 font-semibold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Post Impressions</span>
                <span className="text-blue-800 font-semibold">90</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full sm:w-[60%] my-5 flex flex-col gap-5">
        {/* Post Section */}
        <div>
          <Card padding={1} className="w-full shadow-sm rounded-xl bg-white">
            <div className="flex gap-2 items-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D5635AQEYcKPMT4e8WA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1720857022052?e=1753538400&v=beta&t=Bd3eUdFhusGKInKbYRERpgH-9cA9ydxxY06pV2D_SL0"
                alt="Profile"
                className="w-10 h-10 rounded-full border-white border-2 cursor-pointer"
              ></img>
              <div
                onClick={() => setAddPostModel(true)}
                className="w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100"
              >
                Start a Post
              </div>
            </div>

            <div className="w-full flex mt-3">
              <div
                onClick={() => setAddPostModel(true)}
                className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"
              >
                <VideoCameraBackIcon sx={{ color: "green" }} /> Video
              </div>
              <div
                onClick={() => setAddPostModel(true)}
                className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"
              >
                <InsertPhotoIcon sx={{ color: "blue" }} /> Photo
              </div>
              <div
                onClick={() => setAddPostModel(true)}
                className="flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100"
              >
                <ArticleIcon sx={{ color: "orange" }} /> Article
              </div>
            </div>
          </Card>
        </div>

        <div className="border-b-1 border-gray-400 w-[100%] my-5" />

        <div className="w-full flex flex-col gap-5">
          <Post />
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:block lg:w-[25%]">
        <div className="w-full m-5">
          <Card padding={1}>
            <div className="text-xl">Lined News</div>
            <div className="text-gray-600">Top Stories</div>
            <div className="my-1">
              <div className="text-md">TCS to Hire 40,000 Freshers in FY25</div>
              <div className="text-xs text-gray-400">2h ago</div>
            </div>

            <div className="my-1">
              <div className="text-md">
                Google Unveils New AI-Powered Search Experience
              </div>
              <div className="text-xs text-gray-400">3h ago</div>
            </div>
          </Card>
        </div>

        <div className="my-5 sticky top-19">
          <Advertisment />
        </div>
        {/* Suggestions, ads, etc. */}
      </div>

      {addPostModel && (
        <Modal closeModal={handleOpenPostMoal} title={""}>
          <AddModal />
        </Modal>
      )}

      {/* <Loader /> */}
    </div>
  );
};

export default Feeds;
