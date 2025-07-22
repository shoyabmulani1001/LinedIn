import React from "react";
import Card from "../Card/card";

const Advertisment = () => {
  return (
    <div className="sticky top-18">
      <Card padding={0}>
        <div className="relative w-full h-25">
          <img
            src="https://i.pinimg.com/originals/c8/67/3a/c8673ad4c46ade00cf3bd0049db62b16.jpg"
            className="rounded-t-md h-full w-full object-cover"
            alt="Banner"
          />
          <div className="absolute top-14 left-[40%] z-10">
            <img
              src="https://media.licdn.com/dms/image/v2/D5635AQEYcKPMT4e8WA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1720857022052?e=1753538400&v=beta&t=Bd3eUdFhusGKInKbYRERpgH-9cA9ydxxY06pV2D_SL0"
              alt="Profile"
              className="h-14 w-14 rounded-full border-2 border-white shadow-md"
            />
          </div>
        </div>

        <div className="px-5 my-5 mx-auto">
          <div className="text-sm font-semibold text-center">Shoyab</div>
          <div className="text-sm my-3 text-center">
            Get The Letest Jobs In Industry News
          </div>
          <div className="text-sm my-1 border-1 text-center p-2 rounded-2xl font-bold border-blue-950 text-white bg-blue-800 cursor-pointer">
            Explore
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Advertisment;
