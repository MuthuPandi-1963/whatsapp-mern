import { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";
import LeftAuth from "./LeftAuth";
import Oauth from "./Oauth";

export default function AuthLayout() {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-full w-full  flex items-center justify-center px-4 m-auto">
      <div
        className=" my-4 sm:my-0  flex flex-col md:flex-row  gap-8 w-full max-w-6xl min-h-full "
      >
        {/* Left Section */}
        <LeftAuth />

        {/* Right Section (Auth Box) */}
        <div className="self-center flex-1 w-full  max-w-md sm:bg-white/10 sm:backdrop-blur-xl rounded-2xl sm:border border-white/20 sm:shadow-[0_8px_32px_rgba(0,0,0,0.37)] px-4 sm:p-6">
          {/* Tabs */}
          <div className="flex justify-around mb-6 border-b border-white/20">
            <button
              onClick={() => setActiveTab("login")}
              className={`w-1/2 sm:py-2 text-lg font-semibold transition ${
                activeTab === "login"
                  ? "text-black border-b-2 border-blue-400"
                  : "text-gray-600"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`w-1/2 sm:py-2 text-lg font-semibold transition ${
                activeTab === "signup"
                  ? "text-black border-b-2 border-blue-400"
                  : "text-gray-600"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Forms */}
          {activeTab === "login" ? (
            <Login
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          ) : (
            <Signup
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}

          {/* Divider */}
          <div className="flex items-center my-2 sm:my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-2 text-gray-600 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Logins */}
          <Oauth />
        </div>
      </div>
    </div>
  );
}
