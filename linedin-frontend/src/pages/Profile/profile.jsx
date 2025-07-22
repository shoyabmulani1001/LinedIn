import React, { useState } from "react";
import Advertisment from "../../components/Advertisment/advertisment";
import Card from "../../components/Card/card";
import EditIcon from "@mui/icons-material/Edit";
import Post from "../../components/Post/post";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/Modal/modal";
import ImageModal from "../../components/ImageModal/imagemodal.jsx";
// import ImageModal from "../../components/ImageModal/imageModal.jsx";
import EditInfoModal from "../../components/EditInfoModal/editInfoModal.jsx";
import AboutModal from "../../components/AboutModal/aboutModal.jsx";
import ExpModal from "../../components/ExpModal/expModal.jsx";
import MessageModal from "../../components/MessageModal/messageModal.jsx";
import EastIcon from "@mui/icons-material/East";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  const [imageSetModal, setImageModal] = useState(false);
  const [circularImage, setCircularImage] = useState(true);

  const [infoModal, setInfoModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [expModal, setExpModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  const handleMessageModal = () => {
    setMessageModal((prev) => !prev);
  };

  const handleExpModal = () => {
    setExpModal((prev) => !prev);
  };

  const handleInfoModal = () => {
    setInfoModal((prev) => !prev);
  };

  const handleAboutModal = () => {
    setAboutModal((prev) => !prev);
  };

  const handleImageModalOpenClose = () => {
    setImageModal((prev) => !prev);
  };

  const handleOnEditCover = () => {
    setImageModal(true);
    setCircularImage(false);
  };

  const handleImageModalOpen = () => {
    setImageModal(true);
    setCircularImage(true);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 pt-20 px-4 md:px-12 flex flex-col gap-6 mt-10">
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
      <div className="flex justify-between  mt-10">
        {/* Left Side Main Section */}
        <div className="w-full md:w-[70%]">
          <div>
            <Card padding={0}>
              <div className="w-full h-fit">
                <div className="relative w-full h-[200px]">
                  <div
                    className="absolute cursor-pointer top-3 right-3 z-20 w-[35px] flex justify-center items-center h-[35px] rounded-full p-3 bg-white"
                    onClick={handleOnEditCover}
                  >
                    <EditIcon />
                  </div>
                  <img
                    className="w-full h-[200px] rounded-t-lg rounded-tl-lg"
                    src="https://img.freepik.com/free-photo/laptop-with-glowing-screen-table-dark-top-view-copy-space_169016-51607.jpg?semt=ais_hybrid&w=740"
                    alt="Background"
                  />

                  <div
                    onClick={handleImageModalOpen}
                    className="absolute object-cover top-24 left-6 z-10"
                  >
                    <img
                      className="w-35 h-35 rounded-full object-cover border-2 border-blue-500 shadow-md cursor-pointer"
                      src="https://media.licdn.com/dms/image/v2/D5635AQEYcKPMT4e8WA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1720857022052?e=1753538400&v=beta&t=Bd3eUdFhusGKInKbYRERpgH-9cA9ydxxY06pV2D_SL0"
                      alt="Profile"
                    />
                  </div>
                </div>

                <div className="mt-10 relative px-8 py-2">
                  <div
                    className="absolute cursor-pointer top-3 right-3 z-20 w-[35px] h-[35px] flex justify-center items-center rounded-full p-3 bg-white shadow-md"
                    onClick={handleInfoModal}
                  >
                    <EditIcon />
                  </div>

                  <div className="w-full space-y-1">
                    <div className="text-2xl font-semibold">Shoyab Mulani</div>

                    <div className="text-gray-700">
                      MCA '26 | Immediate Joiner | Fresher | MERN Stack
                      Developer | Full Stack Java Developer | Frontend Developer
                      | SQL | Python
                    </div>

                    <div className="text-sm text-gray-500">
                      Savitribai Phule Pune University
                    </div>
                    <div className="text-sm text-gray-500">
                      Pune, Maharashtra, India
                    </div>

                    <div className="text-sm text-blue-800 font-medium w-fit cursor-pointer hover:underline">
                      500+ connections
                    </div>
                  </div>

                  <div className="md:flex w-full justify-between">
                    <div className="my-5 flex gap-5">
                      <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">
                        Open to
                      </div>
                      <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">
                        Shere
                      </div>
                      <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">
                        Logout
                      </div>
                    </div>

                    <div className="my-5 flex gap-5">
                      <div
                        onClick={handleMessageModal}
                        className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold"
                      >
                        Message
                      </div>
                      <div className="cursor-pointer p-2 border-1 rounded-lg bg-blue-800 text-white font-semibold">
                        connect
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">About</div>
                <div onClick={handleAboutModal} className="cursor-pointer">
                  <EditIcon />
                </div>
              </div>
              <div className="text-gray-700 text-md w-[80%]">
                “Turning code into clean, functional web experiences — Full
                Stack Developer | Java + MERN | Problem Solver”
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">Skills</div>
              </div>
              <div
                className="text-gray-700 text-md my-2 w-full
                flex gap-4 flex-wrap"
              >
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  Java Programming
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  MERN Stack
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  MySQL
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  Python
                </div>
                <div className="py-2 px-3 cursor-pointer bg-blue-800 text-white rounded-lg">
                  Problem Solving
                </div>
              </div>
            </Card>
          </div>

          <div className="mtt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">Activitiy</div>
              </div>
              <div className="cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-green-800 text-white font-semibold">
                Posts
              </div>
              {/* Parrent Div for Scrollable */}
              <div className="overflow-x-auto my-2 flex gap-2 overflow-y-hidden w-full">
                <Link
                  to={`/profile/${id}/activities/111`}
                  className="cursor-pointer shrink-0 w-[350px] h-[560px]"
                >
                  <Post Profile={1} />
                </Link>
                <Link
                  to={`/profile/${id}/activities/112`}
                  className="cursor-pointer shrink-0 w-[350px] h-[560px]"
                >
                  <Post Profile={1} />
                </Link>
                <Link
                  to={`/profile/${id}/activities/113`}
                  className="cursor-pointer shrink-0 w-[350px] h-[560px]"
                >
                  <Post Profile={1} />
                </Link>
                <Link
                  to={`/profile/${id}/activities/114`}
                  className="cursor-pointer shrink-0 w-[350px] h-[560px]"
                >
                  <Post Profile={1} />
                </Link>
              </div>

              <div className="w-full flex justify-center hover:bg-gray-300">
                <Link
                  to={`/profile/${id}/activities`}
                  className="p-2 rounded-xl cursor-pointer hover:bg-gray-300"
                >
                  Show All Posts <EastIcon />
                </Link>
              </div>
            </Card>
          </div>

          <div className="mt-5">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">Experience</div>
                <div onClick={handleExpModal} className="cursor-pointer">
                  <AddIcon />
                </div>
              </div>
              <div className="mt-5">
                <div className="p-2 border-2 border-gray-300 flex justify-between">
                  <div>
                    <div className="text-lg">
                      Software Development Engineer (SDE)
                    </div>
                    <div className="text-sm">Bluestock Fintech</div>
                    <div className="text-sm text-gray-500">
                      Feb 2025 - April 2025
                    </div>
                    <div className="text-sm text-gray-500">
                      Pune, Maharashtra, India
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <EditIcon />
                  </div>
                </div>

                <div className="p-2 border-2 border-gray-300 flex justify-between">
                  <div>
                    <div className="text-lg">Web Developer</div>
                    <div className="text-sm">MotionCut</div>
                    <div className="text-sm text-gray-500">
                      Feb 2024 - April 2024
                    </div>
                    <div className="text-sm text-gray-500">Hybrid</div>
                  </div>
                  <div className="cursor-pointer">
                    <EditIcon />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="hidden md:flex md:w-[28%]">
          <div className="sticky top-19">
            <Advertisment />
          </div>
        </div>
      </div>

      {imageSetModal && (
        <Modal title="Upload Image" closeModal={handleImageModalOpenClose}>
          <ImageModal isCircular={circularImage} />
        </Modal>
      )}

      {infoModal && (
        <Modal title="Edit Info" closeModal={handleInfoModal}>
          <EditInfoModal />
        </Modal>
      )}

      {aboutModal && (
        <Modal title="Edit About" closeModal={handleAboutModal}>
          <AboutModal />
        </Modal>
      )}

      {/* {expModal && (
        <Modal title="Edit Experience" closeModal={handleExpModal}>
          <ExpModal
            onSave={(data) => {
              console.log("Saved Experience: ", data);
              handleExpModal();
            }}
          />
        </Modal>
      )} */}

      {expModal && (
        <Modal title="Edit Experience" closeModal={handleExpModal}>
          <ExpModal />
        </Modal>
      )}

      {messageModal && (
        <Modal title="Send Message" closeModal={handleMessageModal}>
          <MessageModal />
        </Modal>
      )}
      {/* Closing tag for motion.div added below */}
    </div>
  );
};

export default Profile;
