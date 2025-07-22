import React from "react";
import ImageIcon from "@mui/icons-material/Image";

const AddModal = () => {
  return (
    <div className="">
      <div className="flex gap-4 items-center">
        <div className="relative">
          <img
            className="w-15 h-15 rounded-full"
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
            alt="Profile"
          />
        </div>
        <div className="text-2xl">Shoyab Mulani</div>
      </div>

      <div>
        <textarea
          cols={50}
          rows={5}
          placeholder="What do you want to talk about?"
          className="my-3 outline-0 text-xl p-2"
        ></textarea>
      </div>

      <div>
        <img
          className="w-20 h-20 rounded-xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmFoT2DOVi9fr2uYrlPoqARd45dE_8cVAQ4DXzBODXaN_syArsKM69CxXAlCUi7XsmB8&usqp=CAU"
        ></img>
      </div>
      <div className="flex justify-between items-center">
        <div className="my-6">
          <label className="cursor-pointer" htmlFor="inputFile">
            <ImageIcon />
          </label>
          <input type="file" className="hidden" id="inputFile" />
        </div>

        <div className="bg-blue-950 text-white py-1 px-3 cursor-pointer rounded-2xl h-fit">
          Post
        </div>
      </div>
    </div>
  );
};

export default AddModal;
