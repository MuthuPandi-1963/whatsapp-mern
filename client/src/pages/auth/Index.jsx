import { useState } from "react"
import { Mail, Lock, User, EyeOff, EyeIcon, Brush } from "lucide-react"
import { FcGoogle  } from "react-icons/fc" // Google icon
import { FaGithub } from "react-icons/fa";
import {Button} from '@/components/ui/button'
export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="h-full w-full bg-gradient-to-r from-sky-300 to-gray-100 flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl
      ">
        
        {/* Left Section */}
        <div className="text-center md:text-left flex-1">
          <img src="./chat.png" alt="chat" className="mx-auto md:mx-0 w-20 md:w-64 justify-self-center" />
          <h1 className="text-xl md:text-5xl font-bold text-black sm:mt-4">
            Welcome to Friends Chat
          </h1>
          <p className="mt-1 text-gray-700 text-[10px] md:text-xl">
            Connect with your friends securely and instantly 🚀
          </p>
        </div>

        {/* Right Section (Auth Box) */}
        <div className="flex-1 w-full max-w-md sm:bg-white/10 sm:backdrop-blur-xl rounded-2xl sm:border border-white/20 sm:shadow-[0_8px_32px_rgba(0,0,0,0.37)] px-4 sm:p-6">
          
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
            <form className="space-y-2 sm:space-y-4">
              <div className="flex items-center gap-2 bg-white/20 border border-white/30 rounded-lg px-3 py-2">
                <Mail className="text-gray-700" size={20} />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                />
              </div>
              <div className="flex items-center gap-2 bg-white/20 border border-white/30 rounded-lg px-3 py-2">
                <Lock className="text-gray-700" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                />
                {showPassword ? <Button onClick={()=>setShowPassword(prev=>!prev)} type="button"><EyeOff /></Button > :<Button onClick={()=>setShowPassword(prev=>!prev)} type="button"><EyeIcon/></Button>  }
              </div>
              <button className="w-full bg-blue-500/80 hover:bg-blue-500 text-black rounded-lg py-2 font-semibold shadow-md">
                Login
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div className="flex items-center gap-2 bg-white/20 border border-white/30 rounded-lg px-3 py-2">
                <User className="text-gray-700" size={20} />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                />
              </div>
              <div className="flex items-center gap-2 bg-white/20 border border-white/30 rounded-lg px-3 py-2">
                <Mail className="text-gray-700" size={20} />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                />
              </div>
              <div className="flex items-center gap-2 bg-white/20 border border-white/30 rounded-lg px-3 py-2">
                <Lock className="text-gray-700" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-transparent outline-none text-black placeholder-gray-500"
                />
                {showPassword ? <Button onClick={()=>setShowPassword(prev=>!prev)} type="button"><EyeOff /></Button > :<Button onClick={()=>setShowPassword(prev=>!prev)} type="button"><EyeIcon/></Button>  }
                
                
              </div>
              <button className="w-full bg-indigo-500/80 hover:bg-indigo-500 text-black rounded-lg py-2 font-semibold shadow-md">
                Sign Up
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center my-2 sm:my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-2 text-gray-600 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Logins */}
          <div className="space-y-3">
            <button className="flex items-center justify-center w-full gap-3 bg-white/80 hover:bg-white rounded-lg py-2 font-semibold shadow">
              <FcGoogle size={22} /> Login with Google
            </button>
            <button className="flex items-center justify-center w-full gap-3 bg-black hover:bg-gray-900 text-white rounded-lg py-2 font-semibold shadow">
              <FaGithub size={22} /> Login with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
