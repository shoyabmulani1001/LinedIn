import React, { useState } from "react";
import Card from "../Card/card";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// import { motion } from "framer-motion";

const Post = ({ profile }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [comment, setComment] = useState(false);

  const handleSendComment = (e) => {
    e.preventDefault();
    // handle comment submission
  };

  const desc = `I’m happy to share that I’ve completed my 7-day internship as a Trainee Web Developer at iBase Electrosoft LLP.

It was a great learning experience and helped me improve my web development skills.

Thank you to the iBase team for the support! 🙌

#Internship #WebDevelopment #Learning #SkillIndia #CareerStart #iBaseElectrosoft #InternshipCompletion #CareerGrowth #TechJourney #LearningByDoing #FresherOpportunity #FullStackLearner #HTML #CSS #JavaScript #LinkedInLearning #MSME #SkillUp #FutureReady`;

  return (
    <Card padding={1}>
      {/* Header */}
      <div className="flex items-start gap-3">
        <img
          className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-md rounded-full border "
          src="https://media.licdn.com/dms/image/v2/D4D03AQG_SoXkVaXztA/profile-displayphoto-crop_800_800/B4DZe8sPAwGgAI-/0/1751217405541?e=1755734400&v=beta&t=AJdqyHaqmX_BqYjKE6P5Tgv-HQmxImn5dRFOaWdlLMY"
          alt="Profile"
        />
        <div>
          <h2 className="text-base font-semibold leading-tight">
            Sachin Sargar
          </h2>
          <p className="text-sm text-gray-500">Java Developer @ Infosys</p>
        </div>
      </div>

      {/* Description */}
      <div className="text-sm text-gray-800 mt-4 whitespace-pre-line">
        {seeMore ? desc : `${desc.slice(0, 180)}... `}
        <span
          onClick={() => setSeeMore((prev) => !prev)}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          {seeMore ? "See Less" : "See More"}
        </span>
      </div>

      {/* Image */}
      <div className="mt-4 rounded-md overflow-hidden">
        <img
          className="w-full object-cover"
          src="https://media.licdn.com/dms/image/v2/D4D22AQGuYG7ThF6dEA/feedshare-shrink_1280/B4DZdUsNiCG8As-/0/1749472567102?e=1755734400&v=beta&t=OJtxUPHWHjRU7m4wqx8Pw11F3PxlbwDDafM_JRfKQeo"
          alt="Post content"
        />
      </div>

      {/* Stats */}
      <div className="flex justify-between items-center mt-3 text-sm text-gray-500 px-1">
        <div className="flex items-center gap-1">
          <ThumbUpIcon sx={{ color: "#0A66C2", fontSize: 16 }} />
          <span>10 Likes</span>
        </div>
        <span>3 Comments</span>
      </div>

      <hr className="my-2 border-gray-200" />

      {/* Actions */}
      {!profile && (
        <div className="flex justify-between text-sm text-gray-600">
          <button className="flex items-center gap-2 justify-center w-1/3 p-2 hover:bg-gray-100 rounded-md">
            <ThumbUpOutlinedIcon sx={{ fontSize: 20 }} />
            Like
          </button>
          <button
            onClick={() => setComment(true)}
            className="flex items-center gap-2 justify-center w-1/3 p-2 hover:bg-gray-100 rounded-md"
          >
            <CommentIcon sx={{ fontSize: 20 }} />
            Comment
          </button>
          <button className="flex items-center gap-2 justify-center w-1/3 p-2 hover:bg-gray-100 rounded-md">
            <SendOutlinedIcon sx={{ fontSize: 20 }} />
            Share
          </button>
        </div>
      )}

      {/* Comment Input */}
      {comment && (
        <div className="mt-4">
          <div className="flex gap-3 items-start">
            <img
              className="w-10 h-10 rounded-full border border-white shadow-sm"
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
              alt="Comment Profile"
            />
            <form
              className="flex flex-col flex-grow gap-2"
              onSubmit={handleSendComment}
            >
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full px-4 py-2 border rounded-full bg-gray-100 text-sm outline-none focus:ring-1 focus:ring-blue-600"
              />
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-700 text-white text-sm px-4 py-1 rounded-full hover:bg-blue-800"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Existing Comment */}
          <div className="mt-4 px-1">
            <div className="flex gap-3">
              <img
                className="w-9 h-9 rounded-full border border-white shadow-sm"
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
                alt="User 1"
              />
              <div className="bg-gray-100 p-3 rounded-xl">
                <div className="font-medium text-sm">Alif Shaikh</div>
                <div className="text-xs text-gray-500 mb-1">MCA</div>
                <div className="text-sm">Impressive Sachin!!!</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Post;
