import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';
import toast from 'react-hot-toast';
const MessageInput = () => {
  const [message,setMessage]=useState("")
  const {sendMessage,loading}=useSendMessage()
  const handleSubmit =async (e)=>{
    e.preventDefault()
if(!message){
  toast.error("please write the message")
  return;
}
    await sendMessage(message)
    setMessage("")
  }
  return (
    <form onSubmit={handleSubmit} className="px-4 my-3 ">
        <div className="w-full flex gap-2">
            <input value={message} onChange={(e)=>setMessage(e.target.value)} 
            placeholder='Send a Message' type="text" 
            className='border text-sm rounded-lg block w-full p-2.5
             bg-gray-700 border-gray-600 text-white' ></input>
            <button type="submit" className="btn btn-circle bg-sky-500 text-white">
              {loading?(<span  className="loading loading-spinner" ></span>):<IoSend
      className="w-6 h-6 outline-none " />}</button>
        </div>
        
    </form>
  )
}

export default MessageInput


// import React from 'react'
// import { IoSend } from "react-icons/io5";
// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3 ">
//         <div className="w-full flex gap-2">
//             <input placeholder='Send a Message' type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' ></input>
//             <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//       <IoSend
//       className="w-6 h-6 outline-none " /></button>
//         </div>
        
//     </form>
//   )
// }

// export default MessageInput
