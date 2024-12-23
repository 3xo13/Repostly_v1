import React from "react";

const InfoInput = ({ type, name, label, placeholder }) => {
  return (
    <div className="mb-4 w-full h-full">
      <label
        htmlFor={name}
        className="block text-xs font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className=" outline-0 p-2 mt-1 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm focus:ring-blue-500"
      />
    </div>
  );
};

export default InfoInput;
