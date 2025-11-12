import { IoPersonOutline, IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9ff]">
      <div className="flex bg-white shadow-lg rounded-3xl overflow-hidden max-w-5xl w-full">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">LOGIN</h2>

          {/* Username */}
          <div className="relative mb-4">
            <IoPersonOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 bg-[#e7e9f8] rounded-xl outline-none focus:ring-2 focus:ring-[#6a7cff]"
            />
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 bg-[#e7e9f8] rounded-xl outline-none focus:ring-2 focus:ring-[#6a7cff]"
            />
          </div>

          {/* Login Button */}
          <button className="bg-[#6a7cff] hover:bg-[#5b6de6] text-white font-medium py-3 rounded-xl shadow-md transition">
            Login Now
          </button>

          {/* Divider */}
          <div className="my-6 text-center text-gray-400 text-sm">
            Login with Others
          </div>

          {/* Social buttons */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition">
              <FcGoogle className="text-xl" />
              <span className="text-gray-700 text-sm font-medium">
                Login with Google
              </span>
            </button>
            <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition">
              <FaFacebook className="text-[#1877F2] text-xl" />
              <span className="text-gray-700 text-sm font-medium">
                Login with Facebook
              </span>
            </button>
          </div>

          {/* Register link */}
          <p className="text-gray-500 text-sm mt-8 text-center">
            Don’t have an account?{" "}
            <a href="#" className="text-[#6a7cff] hover:underline">
              Register here
            </a>
          </p>
        </div>

        {/* Right side - Logo */}
        <div className="hidden md:flex w-1/2 bg-[#e7e9f8] items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/TrackEdLogo.png"
              alt="TrackEd logo"
              className="w-32 h-32 mb-4"
            />
            <h1 className="text-2xl font-semibold text-[#6a7cff]">TrackEd</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
