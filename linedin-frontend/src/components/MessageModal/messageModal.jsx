import React from "react";

const MessageModal = () => {
  return (
    <div className="my-5">
      <div className="w-full mb-4">
        <textarea
          className="p-2 mt-1 w-full border-1 rounded-md "
          cols={10}
          rows={10}
          placeholder="Enter Message"
        ></textarea>
      </div>

      <div className="bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">
        Send
      </div>
    </div>
  );
};

export default MessageModal;
