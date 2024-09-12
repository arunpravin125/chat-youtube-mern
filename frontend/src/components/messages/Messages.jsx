import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const {messages,loading}=useGetMessages()
  const lastMessageRef = useRef()
  console.log("messages:",messages)
  useListenMessages()

  useEffect(()=>{
  setTimeout(()=>{
    lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
  },800)
  },[messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
    
      {loading && [Array(6)].map((_,idx)=><MessageSkeleton key={idx}/>)}
      {!loading && messages.length>0 && 
      
      messages.map((message)=>{
        return(
        <div key={message._id}
        ref={lastMessageRef}>
        <Message currentMessage={message} messageSenderId={message.senderId} message={message.message} messageTime={message.createdAt} />
        </div>
        ) 
        
        // <Message key={message._id} messageSenderId={message.senderId} message={message.message} messageTime={message.createdAt} />
      })
      
      }
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">Send a message to start the conversation</p>
      ) }
    
    </div>
  )
}

export default Messages
