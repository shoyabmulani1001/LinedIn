// import React from "react";
// import Card from "../Card/card";

// const ProfileCard = () => {
//   return (
//     <div className="absolute top-14 left-4 z-50 w-[250px] mt-8">
//       <Card padding={0}>
//         <div className="relative h-25">
//           <div className="relative w-full h-22 rounded-md">
//             <img
//               src="https://i.pinimg.com/originals/c8/67/3a/c8673ad4c46ade00cf3bd0049db62b16.jpg"
//               className="rounded-t-md h-full w-full"
//               alt="Profile"
//             />
//           </div>

//           <div className="absolute top-14 left-6 z-10">
//             <img
//               src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
//               alt="Profile"
//               className="h-16 w-16 rounded-full border-2 border-white cursor-pointer"
//             ></img>
//           </div>
//         </div>

//         <div className="p-5">
//           <div className="text-xl">Shoyab Mulani</div>
//           <div className="text-sm my-1">Software Developer</div>
//           <div className="text-sm my-1">Pune,India</div>
//           <div className="text-sm my-1">@Tata Consultant Services</div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default ProfileCard;

import React from "react";
import Card from "../Card/card";

const ProfileCard = () => {
  return (
    <Card padding={0} className="w-full">
      {/* Banner */}
      <div className="relative w-full h-24">
        <img
          src="https://i.pinimg.com/originals/c8/67/3a/c8673ad4c46ade00cf3bd0049db62b16.jpg"
          className="rounded-t-md h-full w-full object-cover"
          alt="Banner"
        />
        <div className="absolute top-12 left-5">
          <img
            src="https://media.licdn.com/dms/image/v2/D5635AQEYcKPMT4e8WA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1720857022052?e=1753538400&v=beta&t=Bd3eUdFhusGKInKbYRERpgH-9cA9ydxxY06pV2D_SL0"
            alt="Profile"
            className="h-16 w-16 rounded-full border-2 border-white shadow-md"
          />
        </div>
      </div>

      {/* Info */}
      <div className="pt-10 px-5 pb-5 text-center">
        <div className="text-lg font-semibold">Shoyab Mulani</div>
        <div className="text-sm text-gray-600 mt-1">Software Developer</div>
        <div className="text-sm text-gray-500 mt-1">Pune, India</div>
        <div className="text-sm text-gray-400 mt-1">
          @Tata Consultancy Services
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
