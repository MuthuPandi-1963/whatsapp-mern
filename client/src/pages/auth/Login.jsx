import { Mail, Lock, EyeOff, EyeIcon } from "lucide-react"
import {Button} from '@/components/ui/button'

export default function Login({showPassword,setShowPassword}) {
  return (
    <form onSubmit={()=>{}} className="space-y-2 sm:space-y-4">
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
              <button type='submit' className="w-full bg-blue-500/80 hover:bg-blue-500 text-black rounded-lg py-2 font-semibold shadow-md">
                Login
              </button>
            </form>
  )
}
