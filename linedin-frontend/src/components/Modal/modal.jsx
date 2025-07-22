// import React from "react";
// import CloseIcon from "@mui/icons-material/Close";

// const Modal = (props) => {
//   return (
//     <div className="bg-black/50 fixed top-10 left-0 inset-0 z-20 flex justify-center items-center">
//       <div className="w-[95%] md:w-[50%] h-[500px] bg-white rounded-xl p-10">
//         <div className="flex justify-between">
//           <div className="flex gap-4 items-center">
//             <div className="text-2xl">{props.title}</div>
//           </div>
//           <div className="cursor-pointer">
//             <CloseIcon />
//           </div>
//         </div>
//       </div>

//       {props.children}
//     </div>
//   );
// };

// export default Modal;

import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Modal = (props) => {
  return (
    <div className="bg-black/50 fixed top-10 left-0 inset-0 z-20 flex justify-center items-center">
      <div className="w-[95%] md:w-[50%] h-[500px] bg-white rounded-xl p-10">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <div className="text-2xl font-semibold">{props.title}</div>
          <div onClick={() => props.closeModal()} className="cursor-pointer">
            <CloseIcon />
          </div>
        </div>

        {/* Children inside modal box */}
        <div className="overflow-y-auto h-[400px]">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
