import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/login/login.jpg";

export default function Login() {
  return (
    <div>
      {/* component */}
      <div className="bg-gray-100 flex justify-center items-center h-screen pt-10">
        {/* Left: Image */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src={loginImage}
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right: Login Form */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form action="#" method="POST">
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="emal" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* Remember Me Checkbox */}

            {/* Forgot Password Link */}
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          {/* Sign up  Link */}
          <div className="mt-6 text-blue-500 text-center">
            <Link to={"/signup"} className="hover:underline">
              Sign up Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
