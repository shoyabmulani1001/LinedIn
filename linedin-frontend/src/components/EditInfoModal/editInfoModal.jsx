import React from "react";

const EditInfoModal = () => {
  return (
    <div className="mt-8 w-full h-[350px] overflow-auto">
      <div className="w-full mb-4">
        <label>Full Name*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md "
          placeholder="Enter Full Name "
        />
      </div>

      <div className="w-full mb-4">
        <label>Headline*</label>
        <br />
        <textarea
          className="p-2 mt-1 w-full border-1 rounded-md "
          cols={10}
          rows={3}
        ></textarea>
      </div>

      <div className="w-full mb-4">
        <label>Current Company*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md "
          placeholder="Enter Current Company "
        />
      </div>

      <div className="w-full mb-4">
        <label>Current Location*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md "
          placeholder="Enter Current Location "
        />
      </div>

      <div className="bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl">
        Save
      </div>
    </div>
  );
};

export default EditInfoModal;

// import React, { useState } from "react";

// const EditInfoModal = () => {
//   const [formData, setFormData] = useState({
//     name: "Shoyab Mulani",
//     headline:
//       "MCA '26 | Immediate Joiner | Fresher | MERN Stack Developer | Full Stack Java Developer | Frontend Developer | SQL | Python",
//     university: "Savitribai Phule Pune University",
//     location: "Pune, Maharashtra, India",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Updated Info:", formData);
//     // You can add further logic here if needed
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium mb-1">Full Name</label>
//         <input
//           type="text"
//           name="name"
//           className="w-full p-2 border rounded"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Headline</label>
//         <textarea
//           name="headline"
//           className="w-full p-2 border rounded"
//           rows={3}
//           value={formData.headline}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">University</label>
//         <input
//           type="text"
//           name="university"
//           className="w-full p-2 border rounded"
//           value={formData.university}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Location</label>
//         <input
//           type="text"
//           name="location"
//           className="w-full p-2 border rounded"
//           value={formData.location}
//           onChange={handleChange}
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
//       >
//         Save
//       </button>
//     </form>
//   );
// };

// export default EditInfoModal;
