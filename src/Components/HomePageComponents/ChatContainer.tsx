import { useState,  } from "react"
import type { IMessage } from '../../types/message'
import AiChatBubble from './AiChatBubble'
import { SendHorizontal } from 'lucide-react'


export default function ChatContainer() {
    const [messages, setMessages] = useState<IMessage[]>([
    { id: 1, isMine: true, text: "How do I reduce stress?" },
    { id: 2, isMine: false, text: "Try deep breathing or short breaks."},
     ])
   
   const [input, setInput] = useState("")
   
   const handleSend = () => {
    if (!input.trim()) return;
    const newMessage : IMessage = {
      id: messages.length + 1,
      isMine: true,
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }
    setMessages([...messages, newMessage])
    setInput("")

     // Simulate AI response (replace with real-time API later)
    setTimeout(() => {
      const aiMessage: IMessage = {
        id: messages.length + 2,
        isMine: false,
        text: "Got it! Let me suggest some exercises for stress relief.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 1500)
  }
  return (
     <div className="flex flex-col h-124.5 bg-white border border-[#D1D5D5] rounded-4xl shadow-md p-12">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg) => (
          <AiChatBubble key={msg.id} {...msg} />
        ))}
      </div>


      <div className="relative w-full" >
        <input type="text" placeholder="Type anything..." value={input} onChange={(e) => setInput(e.target.value)} className="bg-[#DCF2EE99] border w-full border-[#C2C6D4] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#28574E] text-[#6B7280]" />
        <button type='button' onClick={handleSend} className='absolute right-4 top-2'>
          <SendHorizontal />
        </button>
      </div>
      </div>
  )
}