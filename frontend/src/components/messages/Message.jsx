import React from 'react'
import {useAuthContext} from "../../context/AuthContext"
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'
const Message = ({message,messageSenderId,messageTime,currentMessage}) => {
  // console.log("from Messages.jsx",message)


  const {authUser}=useAuthContext()

  const {selectedConversation}=useConversation()
  const fromMe = messageSenderId === authUser._id
  const formattedTime = extractTime(messageTime)
  const chatClassName = fromMe?'chat-end':"chat-start"
  const profilePic = fromMe?authUser.profilePic:selectedConversation?.profilePic
  const bubbleBgColor = fromMe?"bg-blue-500":"bg-gray-700"
   const shakeClass=currentMessage.shouldShake?"shake":""
  return (
    <div className={`chat ${chatClassName}`} >
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                alt='Tailwind CSS chat bubble componenet'
                src={profilePic}
                >
                
                </img>

            </div>

        </div>
        <div className={`chat-bubble text-white bg-blur-500 ${shakeClass}  ${bubbleBgColor} pb-2`}>
             {message}

        </div>
        <div className="chat-footer opacity-50 text-xs text-white flex gap-1 items-center" >{formattedTime}</div>
    </div>
  )
}

export default Message
