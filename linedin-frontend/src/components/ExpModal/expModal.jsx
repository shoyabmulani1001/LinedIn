import React from "react";

const ExpModal = () => {
  return (
    <div className="mt-8 w-full h-[350px] overflow-auto">
      <div className="w-full mb-4">
        <label>Role*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md "
          placeholder="eg: Software Developer,Frontend,Backend,Database "
        />
      </div>

      <div className="w-full mb-4">
        <label>Company*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md "
          placeholder="eg: TCS,Google,Infosys,Microsoft "
        />
      </div>

      <div className="w-full mb-4">
        <label>Duration*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md "
          placeholder="eg: Start Date - End Date (or Present) "
        />
      </div>

      <div className="w-full mb-4">
        <label>Place*</label>
        <br />
        <input
          type="text"
          className="p-2 mt-1 w-full border-1 rounded-md "
          placeholder="eg: Pune,Banglore,Hydrabad,Chennai "
        />
      </div>
    </div>
  );
};

export default ExpModal;

// import React, { useState } from "react";

// const ExpModal = ({ onSave }) => {
//   const [experience, setExperience] = useState({
//     company: "",
//     role: "",
//     from: "",
//     to: "",
//     isPresent: false,
//     city: "",
//     state: "",
//     country: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setExperience((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//       to: name === "isPresent" && checked ? "Present" : prev.to,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSave) onSave(experience);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-2">
//       <div>
//         <label className="block text-sm font-medium">Company Name</label>
//         <input
//           type="text"
//           name="company"
//           value={experience.company}
//           onChange={handleChange}
//           className="w-full border p-2 rounded-md"
//           placeholder="e.g. Google"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium">Role / Title</label>
//         <input
//           type="text"
//           name="role"
//           value={experience.role}
//           onChange={handleChange}
//           className="w-full border p-2 rounded-md"
//           placeholder="e.g. Software Engineer"
//           required
//         />
//       </div>

//       <div className="flex gap-4">
//         <div className="flex-1">
//           <label className="block text-sm font-medium">From</label>
//           <input
//             type="date"
//             name="from"
//             value={experience.from}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             required
//           />
//         </div>

//         <div className="flex-1">
//           <label className="block text-sm font-medium">To</label>
//           <input
//             type="date"
//             name="to"
//             value={experience.isPresent ? "" : experience.to}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             disabled={experience.isPresent}
//             required={!experience.isPresent}
//           />
//         </div>
//       </div>

//       <div className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           name="isPresent"
//           checked={experience.isPresent}
//           onChange={handleChange}
//         />
//         <label className="text-sm">I currently work here</label>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div>
//           <label className="block text-sm font-medium">City</label>
//           <input
//             type="text"
//             name="city"
//             value={experience.city}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             placeholder="e.g. Mumbai"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">State</label>
//           <input
//             type="text"
//             name="state"
//             value={experience.state}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             placeholder="e.g. Maharashtra"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Country</label>
//           <input
//             type="text"
//             name="country"
//             value={experience.country}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             placeholder="e.g. India"
//             required
//           />
//         </div>
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//       >
//         Save Experience
//       </button>
//     </form>
//   );
// };

// export default ExpModal;

// import React, { useState } from "react";

// const countryStateCityData = {
//   India: {
//     Maharashtra: ["Mumbai", "Pune", "Nagpur"],
//     Karnataka: ["Bangalore", "Mysore"],
//     Delhi: ["New Delhi"],
//   },
//   USA: {
//     California: ["San Francisco", "Los Angeles"],
//     Texas: ["Austin", "Dallas"],
//     NewYork: ["New York City"],
//   },
// };

// const ExpModal = ({ onSave }) => {
//   const [experience, setExperience] = useState({
//     company: "",
//     role: "",
//     from: "",
//     to: "",
//     isPresent: false,
//     country: "",
//     state: "",
//     city: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setExperience((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//       to: name === "isPresent" && checked ? "Present" : prev.to,
//       ...(name === "country" ? { state: "", city: "" } : {}),
//       ...(name === "state" ? { city: "" } : {}),
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSave) onSave(experience);
//   };

//   const countries = Object.keys(countryStateCityData);
//   const states = experience.country
//     ? Object.keys(countryStateCityData[experience.country])
//     : [];
//   const cities =
//     experience.country && experience.state
//       ? countryStateCityData[experience.country][experience.state]
//       : [];

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-2">
//       <div>
//         <label className="block text-sm font-medium">Company Name</label>
//         <input
//           type="text"
//           name="company"
//           value={experience.company}
//           onChange={handleChange}
//           className="w-full border p-2 rounded-md"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium">Role / Title</label>
//         <input
//           type="text"
//           name="role"
//           value={experience.role}
//           onChange={handleChange}
//           className="w-full border p-2 rounded-md"
//           required
//         />
//       </div>

//       <div className="flex gap-4">
//         <div className="flex-1">
//           <label className="block text-sm font-medium">From</label>
//           <input
//             type="date"
//             name="from"
//             value={experience.from}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             required
//           />
//         </div>

//         <div className="flex-1">
//           <label className="block text-sm font-medium">To</label>
//           <input
//             type="date"
//             name="to"
//             value={experience.isPresent ? "" : experience.to}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             disabled={experience.isPresent}
//             required={!experience.isPresent}
//           />
//         </div>
//       </div>

//       <div className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           name="isPresent"
//           checked={experience.isPresent}
//           onChange={handleChange}
//         />
//         <label className="text-sm">I currently work here</label>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div>
//           <label className="block text-sm font-medium">Country</label>
//           <select
//             name="country"
//             value={experience.country}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             required
//           >
//             <option value="">Select Country</option>
//             {countries.map((country) => (
//               <option key={country} value={country}>
//                 {country}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">State</label>
//           <select
//             name="state"
//             value={experience.state}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             required
//             disabled={!experience.country}
//           >
//             <option value="">Select State</option>
//             {states.map((state) => (
//               <option key={state} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">City</label>
//           <select
//             name="city"
//             value={experience.city}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//             required
//             disabled={!experience.state}
//           >
//             <option value="">Select City</option>
//             {cities.map((city) => (
//               <option key={city} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//       >
//         Save Experience
//       </button>
//     </form>
//   );
// };

// export default ExpModal;
