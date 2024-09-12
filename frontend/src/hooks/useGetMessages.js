import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useGetMessages = () => {
 const [loading,setLoading]=useState(false)

 const {messages,setMessages,selectedConversation}=useConversation()
 const {authUser} = useAuthContext()
 
 useEffect(()=>{
    const getMessages = async()=>{
        setLoading(true)
        try {
            const res = await fetch(`/api/messages/${selectedConversation._id}`)
           const data = await  res.json()
            if(data.error){
                throw new Error(data.error)
            }
           
            setMessages(data)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    
     }

   if(selectedConversation?selectedConversation._id:null)getMessages()
 },[selectedConversation?._id,setMessages]
)
console.log("getMessage:","selectedConversation",
    selectedConversation.fullName ,"its me :" 
    ,authUser.fullName)
return {messages,loading}
}

export default useGetMessages
