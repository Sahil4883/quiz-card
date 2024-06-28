"use client";
import React from "react";

const GetStartedButton = () => {
  return (
    <a /* <a> tag should be used in order to be safe from the dependencies clashes */
      href="/sign-up"
      className="text-white bg-blue-700 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
    >
      Get Started
    </a>
  );
};

export default GetStartedButton;
