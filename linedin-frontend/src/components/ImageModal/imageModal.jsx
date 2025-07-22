import React from "react";

const ImageModal = ({ isCircular }) => {
  return (
    <div className="p-5 relative flex items-center flex-col h-full">
      {isCircular ? (
        <img
          className="rounded-full w-[150px] h-[150px]"
          src="https://media.licdn.com/dms/image/v2/D5635AQEYcKPMT4e8WA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1720857022052?e=1753538400&v=beta&t=Bd3eUdFhusGKInKbYRERpgH-9cA9ydxxY06pV2D_SL0"
          alt=""
        />
      ) : (
        <img
          className="rounded-xl w-full h-[120px] object-cover"
          src="https://img.freepik.com/free-photo/laptop-with-glowing-screen-table-dark-top-view-copy-space_169016-51607.jpg?semt=ais_hybrid&w=740"
          alt=""
        />
      )}

      <label
        htmlFor="btn-submit"
        className="absolute bottom-10 left-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer "
      >
        Upload
      </label>
      <input type="file" className="hidden" id="btn-submit" />
      <div className="absolute bottom-10 right-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer ">
        Submit
      </div>
    </div>
  );
};

export default ImageModal;
