"use client";
import React from "react";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
const NewNav = () => {
  const pathname = usePathname(); //for getting the active link
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/*TODO: Add the same font style coz it looks elegent*/}
              <li>
                <Link
                  href="/"
                  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    pathname === "/" ? "text-black font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              {isSignedIn ? (
                <li>
                  <Link
                    href="/dashboard"
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                      pathname === "/dashboard"
                        ? "text-black font-semibold"
                        : ""
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
              ) : null}
              <li>
                <Link
                  href="/features"
                  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    pathname === "/features" ? "text-black font-semibold" : ""
                  }`}
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="contact"
                  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    pathname === "/contact" ? "text-black font-semibold" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Quiz App</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                href="/"
                className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathname === "/" ? "text-black font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            {isSignedIn ? (
              <li>
                <Link
                  href="/dashboard"
                  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                    pathname === "/dashboard" ? "text-black font-semibold" : ""
                  }`}
                >
                  Dashboard
                </Link>
              </li>
            ) : null}
            <li>
              <Link
                href="/features"
                className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathname === "/features" ? "text-black font-semibold" : ""
                }`}
              >
                Features
              </Link>
            </li>

            <li>
              <Link
                href="contact"
                className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${
                  pathname === "/contact" ? "text-black font-semibold" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <a /* <a> tag should be used in order to be safe from the dependencies clashes */
              className="text-white bg-blue-700 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                Get Started
              </SignInButton>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewNav;
