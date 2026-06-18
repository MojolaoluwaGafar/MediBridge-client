import Icon from "../../assets/Icon.svg"
import type { IMessage } from '../../types/message'

export default function AiChatBubble({ isMine = false, text}: IMessage) {
  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"} mb-4`}>
      {!isMine && (
        <div className="flex items-start gap-4">
          <div className='w-8 h-8 rounded-full bg-[#28574E] flex items-center justify-center'><img src={Icon} alt="" className="" />
          </div>          
          <div className="bg-[#DCF2EE99] text-black px-4 py-2 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-[90%] shadow-sm">
            <p>{text}</p>
          </div>
        </div>
      )}

      {isMine && (
        <div className="bg-[#28574E] text-white px-4 py-2 rounded-tl-lg rounded-br-lg rounded-bl-lg max-w-[70%] shadow-sm">
          <p>{text}</p>
        </div>
      )}
    </div>
  )
}
