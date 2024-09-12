import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
 const [loading,setLoading]=useState(false)
const {setAuthUser} =useAuthContext()
 const login = async (username,password)=>{
    setLoading(true)
    const success = handleInputError(username,password)
    if(!success){
        return;
    }
    try {
        const res = await fetch("/api/auth/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username,password})
        })
        const data = await res.json()
        console.log("user login : ",data)
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.setItem("chat-user",JSON.stringify(data))
        setAuthUser(data)
    } catch (error) {
        toast.error(error.message)
    }finally{

        setLoading(false)
    }
 }
 return {login,loading}
}

export default useLogin


function handleInputError(username,password){
    if(!username || !password){
        toast.error("please fill username and password")
        return false
    }
    return true
}