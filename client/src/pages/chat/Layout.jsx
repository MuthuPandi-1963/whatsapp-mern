import { useEffect, useRef, useState } from "react";
import { Paperclip, Smile, Send } from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function ChatLayout() {
  const chatList = [
    {
      id: 1,
      name: "Alice",
      lastMessage: "Hey, how are you?",
      avatar: "https://i.pravatar.cc/40?u=a",
      unread: 2,
    },
    {
      id: 2,
      name: "Bob",
      lastMessage: "Let's catch up tomorrow",
      avatar: "https://i.pravatar.cc/40?u=b",
      unread: 0,
    },
    {
      id: 3,
      name: "Charlie",
      lastMessage: "Typing...",
      avatar: "https://i.pravatar.cc/40?u=c",
      unread: 5,
    },
  ];

  const messagesData = [
    { id: 1, sender: "Alice", text: "Hey! 👋", me: false },
    { id: 2, sender: "Me", text: "Hi Alice, how’s it going?", me: true },
    {
      id: 3,
      sender: "Alice",
      text: "All good! Working on React stuff.",
      me: false,
    },
    { id: 4, sender: "Me", text: "Nice 🔥", me: true },
  ];

  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const fileInputRef = useRef(null);
  const bottomRef = useRef(null);
  const [_, setPreview] = useState(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), sender: "Me", text: input, me: true },
    ]);
    setInput("");
    setShowEmoji(false);
  };

  const handleEmojiSelect = (emoji) => {
    setInput((prev) => prev + emoji.native);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const url = URL.createObjectURL(file);

    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "Me",
        text: isImage ? null : `📎 ${file.name}`,
        fileUrl: url,
        fileType: file.type,
        me: true,
      },
    ]);
  };


  return (
    <div className="flex  h-full w-full">
      {/* Sidebar */}
      <div className="hidden w-72 sm:flex flex-col m-1 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)] p-2">
        <ul className="flex-1 min-h-0 p-2 space-y-2 overflow-y-auto scrollable">
          {chatList.map((chat) => (
            <li
              key={chat.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">{chat.name}</p>
                <p className="text-sm text-gray-500 truncate">
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unread > 0 && (
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {chat.unread}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col rounded-2xl ">
        {/* Header */}
        <div className="sm:p-4 border-b bg-white shadow-sm mx-4  flex items-center gap-3 m-1 rounded-2xl">
          <img
            src="https://i.pravatar.cc/40?u=a"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Alice</p>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto scrollable p-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.me ? "justify-end" : "justify-start"}`}
            >
              
                {msg.fileUrl && msg.fileType.startsWith("image/") ? (
              <img
                src={msg.fileUrl}
                alt="uploaded"
                className="w-40 h-40 object-cover rounded cursor-pointer"
                onClick={() => setPreview(msg.fileUrl)} // 👈 open preview modal
              />
            ) : (
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs ${
                  msg.me
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
              {msg.text}
              </div>
            )}
            </div>
          ))}
          <div className="" ref={bottomRef}></div>
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white flex items-center gap-2 relative m-1 rounded-2xl">
          {/* Emoji Button */}
          <button
            onClick={() => setShowEmoji(!showEmoji)}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <Smile size={22} />
          </button>

          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileUpload}
          />

          {/* File Button */}
          <button
            onClick={() => fileInputRef.current.click()}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <Paperclip size={22} />
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // prevent new line
                handleSend();
              }
            }}
            onFocus={() => setShowEmoji(false)}
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          >
            <Send size={20} />
          </button>

          {/* Emoji Picker */}
          {showEmoji && (
            <div className="absolute bottom-16 left-4 z-50">
              <Picker data={data} onEmojiSelect={handleEmojiSelect} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
