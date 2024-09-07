"use client";
import React from "react";

const DeleteButton = () => {
  const handleClick = () => {
    console.log("Delete button clicked");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
