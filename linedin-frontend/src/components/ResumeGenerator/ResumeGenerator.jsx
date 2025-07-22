// import React, { useState } from "react";
// import axios from "axios";

// const ResumeGenerator = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     role: "",
//     skills: "",
//     experience: "",
//   });

//   const [generatedResume, setGeneratedResume] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/resume",
//         formData
//       );
//       setGeneratedResume(res.data.resume);
//     } catch (err) {
//       console.error("Error generating resume", err);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="w-full sm:w-[74%] py-5">
//       <h1 className="text-2xl font-bold mb-6">AI Resume Generator</h1>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 shadow rounded-lg space-y-4"
//       >
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             className="w-full border p-2 rounded"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Role</label>
//           <input
//             type="text"
//             name="role"
//             className="w-full border p-2 rounded"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Skills (comma separated)</label>
//           <input
//             type="text"
//             name="skills"
//             className="w-full border p-2 rounded"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Experience</label>
//           <textarea
//             name="experience"
//             className="w-full border p-2 rounded"
//             rows={4}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           {loading ? "Generating..." : "Generate Resume"}
//         </button>
//       </form>

//       {/* Resume Output */}
//       {generatedResume && (
//         <div className="mt-6 p-5 bg-white rounded shadow whitespace-pre-wrap">
//           <h2 className="text-xl font-semibold mb-4">Generated Resume</h2>
//           <p>{generatedResume}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResumeGenerator;

import React, { useState } from "react";
import axios from "axios";

const ResumeGenerator = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",
    role: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
    certifications: "",
    languages: "",
    achievements: "",
    hobbies: "",
  });

  const [generatedResume, setGeneratedResume] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/resume",
        formData
      );
      setGeneratedResume(res.data.resume);
    } catch (err) {
      console.error("Error generating resume", err);
    }
    setLoading(false);
  };

  return (
    <div className="w-full sm:w-[74%] py-5">
      <h1 className="text-2xl font-bold mb-6">AI Resume Generator</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow rounded-lg space-y-4"
      >
        {/* Personal Info */}
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>GitHub</label>
          <input
            type="url"
            name="github"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Portfolio</label>
          <input
            type="url"
            name="portfolio"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />
        </div>

        {/* Resume Fields */}
        <div>
          <label>Role (e.g., Frontend Developer)</label>
          <input
            type="text"
            name="role"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Skills (comma separated)</label>
          <input
            type="text"
            name="skills"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Education</label>
          <textarea
            name="education"
            className="w-full border p-2 rounded"
            rows={3}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Experience</label>
          <textarea
            name="experience"
            className="w-full border p-2 rounded"
            rows={3}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Projects</label>
          <textarea
            name="projects"
            className="w-full border p-2 rounded"
            rows={3}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Certifications</label>
          <textarea
            name="certifications"
            className="w-full border p-2 rounded"
            rows={2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Languages</label>
          <input
            type="text"
            name="languages"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Achievements</label>
          <textarea
            name="achievements"
            className="w-full border p-2 rounded"
            rows={2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Hobbies</label>
          <textarea
            name="hobbies"
            className="w-full border p-2 rounded"
            rows={2}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate Resume"}
        </button>
      </form>

      {/* Resume Output */}
      {generatedResume && (
        <div className="mt-6 p-5 bg-white rounded shadow whitespace-pre-wrap">
          <h2 className="text-xl font-semibold mb-4">Generated Resume</h2>
          <p>{generatedResume}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeGenerator;
