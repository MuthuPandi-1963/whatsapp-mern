
export default function Main({children}) {
    const theme = "bg-gradient-to-r from-sky-300 to-gray-100"
  return (
    <div className={` ${theme}  min-h-screen  `}>
        <div className="min-h-screen bg-[url('/chat.png')] bg-[length:250px_250px] bg-no-repeat bg-center pt-8">
    {children}
    <footer className="p-3 border-t border-white/20 bg-accent-foreground text-accent">
        <p className="text-center">All rights reserved @2025 - Mr.Prank  </p>
      </footer>
    </div>
    </div>
  )
}
