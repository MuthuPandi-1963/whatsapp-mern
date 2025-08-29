
export default function Main({children}) {
    const theme = "bg-gradient-to-r from-sky-300 to-gray-100"
  return (
    <div className={` ${theme}  min-h-screen  `}>
        <div className="h-[94dvh] bg-[url('/chat.png')] bg-[length:250px_250px] bg-no-repeat bg-center pt-8">
    {children}
    
    </div>
    <footer className="text-foreground absolute bottom-1.5 left-0 right-0">
        <p className="text-center">All rights reserved : @Mr.Prank - 2025   </p>
      </footer>
    </div>
  )
}
