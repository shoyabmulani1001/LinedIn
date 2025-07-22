import React from "react";

const Conversation = () => {
  return (
    <>
      {/* Each Chat */}
      <div className="flex items-center w-full cursor-pointer border-b-1 border-gray-300 gap-3 p-4 hover:bg-gray-200">
        <div className="shrink-0">
          <img
            className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-md"
            src="https://media.licdn.com/dms/image/v2/D4D03AQG_SoXkVaXztA/profile-displayphoto-crop_800_800/B4DZe8sPAwGgAI-/0/1751217405541?e=1755734400&v=beta&t=AJdqyHaqmX_BqYjKE6P5Tgv-HQmxImn5dRFOaWdlLMY"
            alt="Message"
          />
        </div>

        <div>
          <div className="text-md">Sachin Sargar</div>
          <div className="text-sm text-gray-500">Java Developer</div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
