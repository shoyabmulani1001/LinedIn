// import React from "react";

// const EditInfoModal = () => {
//   return (
//     <div className="my-8">
//       {/* About Section */}
//       <div className="w-full mb-4">
//         <label>About*</label>
//         <br />
//         <textarea
//           className="p-2 mt-1 w-full border-1 rounded-md"
//           rows={4}
//           placeholder="Write something about yourself..."
//         ></textarea>
//       </div>

//       {/* Skills Section */}
//       <div className="w-full mb-4">
//         <label>Skills*(Add Skills Seperating By Commas)</label>
//         <br />
//         <input
//           type="text"
//           className="p-2 mt-1 w-full border-1 rounded-md"
//           placeholder="e.g., Java, React, Node.js, MySQL"
//         />
//       </div>

//       {/* Upload Resume */}
//       <div className="w-full mb-4">
//         <label
//           htmlFor="resumeUpload"
//           className=" mt-4 p-2 bg-blue-800 text-white rounded-lg cursor-pointer mb-4"
//         >
//           Upload Resume (PDF)
//         </label>
//         <br />
//         <input type="file" accept=".pdf" className="hidden" id="resumeUpload" />
//         <div className="my-2">shoyab's.pdf</div>
//       </div>

//       {/* Save Button */}
//       <div className="bg-blue-950 text-white w-fit py-1 px-4 cursor-pointer rounded-2xl">
//         Save
//       </div>
//     </div>
//   );
// };

// export default EditInfoModal;

import React, { useState } from "react";

const EditInfoModal = () => {
  const [resumeName, setResumeName] = useState("shoyab's.pdf");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setResumeName(file.name);
  };

  return (
    <div className="space-y-6 text-sm text-gray-800">
      {/* About Section */}
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700">About *</label>
        <textarea
          className="p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Write something about yourself..."
        ></textarea>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700">
          Skills*{" "}
          <span className="text-xs font-normal text-gray-500">
            (Separate skills with commas)
          </span>
        </label>
        <input
          type="text"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Java, React, Node.js, MySQL"
        />
      </div>

      {/* Resume Upload */}
      <div className="flex flex-col gap-1">
        <label className="font-medium text-gray-700 mb-1">
          Upload Resume (PDF)
        </label>
        <label
          htmlFor="resumeUpload"
          className="inline-block w-fit bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Choose File
        </label>
        <input
          type="file"
          id="resumeUpload"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="text-sm text-gray-600 mt-1">{resumeName}</div>
      </div>

      {/* Save Button */}
      <div>
        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-2xl"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditInfoModal;
