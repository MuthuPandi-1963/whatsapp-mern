import { Mail, Lock, User, EyeOff, EyeIcon } from "lucide-react"
import {Button} from '@/components/ui/button'


export default function Signup({showPassword,setShowPassword}) {
  return (
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
  )
}
