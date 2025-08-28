import {
  CircleUserRound,
  MessageCirclePlus,
  PanelRightClose,
  PanelRightOpen,
  Settings,
} from "lucide-react"

export default function Interface({ children }) {
  return (
    <div
      className="w-[85%] mx-auto h-[90dvh] flex flex-col
      rounded-2xl border border-white/20 
      bg-white/10 backdrop-blur-xl 
      shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
    >
      {/* Header */}
      <header className="text-lg font-semibold border-b border-white/20 text-white flex items-center sm:justify-between px-4 py-2">
        {/* Logo + Title */}
        <div className="flex-1 sm:flex-0 flex items-center gap-x-3 bg-black/80 px-3 py-2 rounded-lg">
          <img src="./chat.png" className="w-8 h-8" alt="chat logo" />
          <p className="bg-gradient-to-r from-cyan-400 to-green-400 font-bold bg-clip-text text-nowrap text-transparent">
            FRIENDS CHAT
          </p>
          <div className="flex items-center gap-x-2 ml-6">
            <PanelRightClose className="w-5 h-5 text-cyan-200 cursor-pointer hover:text-green-400  hidden sm:block" />
            <PanelRightOpen className="w-5 h-5 text-cyan-200 cursor-pointer hover:text-green-400 hidden sm:block " />
          </div>
        </div>

        {/* Actions */}
        {/* <div className="hidden sm:flex items-center gap-x-5">
          <MessageCirclePlus className="w-6 h-6 hidden sm:block text-black hover:text-green-400 cursor-pointer" />
          <Settings className="w-6 h-6 hidden sm:block text-black hover:text-green-400 cursor-pointer" />
          <CircleUserRound className="w-7 h-7 text-black hover:text-green-400 cursor-pointer" />
        </div> */}
      </header>

      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-hidden">{children}</div>

      
    </div>
  )
}
