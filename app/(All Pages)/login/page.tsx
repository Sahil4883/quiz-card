import React from "react";
import Link from "next/link";
import Nav from "@/Components/Nav";

const Login = () => {
  return (
    <>
      <Nav />
      <div>Login Page</div>
      <Link href="/">GO TO HOME</Link>
    </>
  );
};

export default Login;
