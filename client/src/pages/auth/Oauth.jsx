import { FcGoogle  } from "react-icons/fc" // Google icon
import { FaGithub } from "react-icons/fa";
export default function Oauth() {
  return (
    <div className="space-y-3">
            <button className="flex items-center justify-center w-full gap-3 bg-white/80 hover:bg-white rounded-lg py-2 font-semibold shadow">
              <FcGoogle size={22} /> Login with Google
            </button>
            <button className="flex items-center justify-center w-full gap-3 bg-black hover:bg-gray-900 text-white rounded-lg py-2 font-semibold shadow">
              <FaGithub size={22} /> Login with GitHub
            </button>
          </div>
  )
}
