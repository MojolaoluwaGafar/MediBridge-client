import { useState,  } from "react"
import type { IMessage } from '../../types/message'
import AiChatBubble from '../HomePageComponents/AiChatBubble'
import { SendHorizontal } from 'lucide-react'
import { CircleAlert } from 'lucide-react'

export default function MessageContainer() {
    const [messages, setMessages] = useState<IMessage[]>([
    { id: 1, isMine: false, text: "Hi 👋 I'm MediBridge AI. I can help with medication questions, appointment prep, and general health information. What's on your mind today?"},
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
     <div className="flex flex-col h-144.75 w-full bg-white border border-[#D1D5D5] rounded-xl shadow-md ">
      <div className="flex-1 overflow-y-auto p-12">
        {messages.map((msg) => (
          <AiChatBubble key={msg.id} {...msg} />
        ))}
      </div>

      <div className="w-full border-t border-t-[#C2C6D4] p-6">
         <div className="flex pb-5 gap-4">
          {["I don't feel well", "Medication information", "Appointment help", "Understand my lab results"].map((text) => (
            <button
            type='button'
            key={text}
            onClick={() => setInput(text)}
            className="border border-[#DDDDDD] w-full h-8 rounded-md text-[#0A1916] text-[12px] hover:bg-gray-100 fontDMSans font-semibold">
              {text}
            </button>
          ))}
        </div>
        <div className='relative'>
        <input type="text" placeholder="Type anything..." value={input} onChange={(e) => setInput(e.target.value)} className="bg-[#DCF2EE99] border w-full border-[#C2C6D4] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#28574E] text-[#6B7280]" />
        <button type='button' onClick={handleSend} className='absolute right-4 bottom-3'>
          <SendHorizontal />
        </button>
        </div>
        <p className='flex gap-2 pt-5 text-[#757575] text-[14px]'><span><CircleAlert color="#727783" /></span>This AI provides informational guidance and does not replace professional medical diagnosis.</p>
      </div>
      </div>
  )
}