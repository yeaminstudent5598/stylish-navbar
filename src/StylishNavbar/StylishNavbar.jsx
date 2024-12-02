import React, { useState } from "react";

const StylishNavbar = () => {
  const list = ["Home", "About", "Product", "Service"];
  const [indexSelect, setIndexSelect] = useState(null); // Initialize with null

  return (
    <div className="w-full h-screen flex justify-center items-center caret-transparent bg-gray-900">
      <div className="flex text-white bg-black rounded-xl relative">
        {list.map((item, index) => (
          <div
            key={index}
            className="w-32 text-center py-5 relative z-10 cursor-pointer"
            onClick={() => setIndexSelect(index)} // Set selected index on click
          >
            {item}
          </div>
        ))}

        <div
          className={`absolute z-0 top-0 ${
            indexSelect === 1
              ? "left-32"
              : indexSelect === 2
              ? "left-64"
              : indexSelect === 3
              ? "left-96"
              : "left-0"
          } w-32 text-center py-5 rounded-xl bg-gradient-to-tr from-black to-lime-500 duration-500 ease-linear text-transparent`}
        >
          {indexSelect !== null ? list[indexSelect] : ""}
        </div>
      </div>
    </div>
  );
};

export default StylishNavbar;
