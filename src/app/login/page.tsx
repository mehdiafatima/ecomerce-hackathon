import React from "react";
import Image from "next/image"; // Importing the Image component from Next.js

const LoginPage = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center lg:mt-20 lg:mb-10 ">
      {/* Login Card */}
      <div className="w-full max-w-md bg-gray-50 shadow-lg rounded-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Login
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Welcome back! Please enter your details.
        </p>

        {/* Login Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-gray-600 text-sm"
              >
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center bg-gray-100 text-gray-600 py-2 rounded-lg hover:bg-gray-200 transition">
            <Image
              src="/Google.png" // Replace with actual Google logo path
              alt="Google"
              width={20} // Set the width of the icon
              height={20} // Set the height of the icon
              className="mr-2"
            />
            Login with Google
          </button>
          <button className="flex items-center justify-center bg-gray-100 text-gray-600 py-2 rounded-lg hover:bg-gray-200 transition">
            <Image
              src="/facebook.png" // Replace with actual Facebook logo path
              alt="Facebook"
              width={20} // Set the width of the icon
              height={20} // Set the height of the icon
              className="mr-2"
            />
            Login with Facebook
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
