import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateUser.js"

export const login = async(req,res)=>{
  try {
    const {username,password} = req.body

    const user = await User.findOne({username})

    const isPasswordCorrect = await bcryptjs.compare(password,user?.password || "")

    if(!user || !isPasswordCorrect){
        return res.status(400).json({error:"Invalid username or password credentials"})
    }
    generateTokenAndSetCookie(user._id,res)

    return res.status(200).json({_id:user.id,
        fullName:user.fullName,
        username:user.username,
        profilePic:user.profilePic
    })
  } catch (error) {
    console.log("Error in login controller",error.message)
    res.status(500).json({error:"Internal server error"})
  }
}

export const logout =(req,res)=>{

  try {
      res.cookie("jwt",{maxAge:0})
      res.status(200).json({message:"LOGOUT successfully"})
  } catch (error) {
    console.log("Error in logout controller",error.message)
    res.status(500).json({error:"Internal server error"})
  }
}

export const signup = async(req,res)=>{
try {
    const {fullName,username,password,confirmPassword,gender} = req.body

    if(password !== confirmPassword){
        return res.status(400).json({error:"Password do not match"})
    }

    const user = await User.findOne({username})


    if(user){
        return res.status(400).json({error:"Username already exists"})
    }

    //hash pasword
     const salt =await bcryptjs.genSalt(10)
     const hashedPassword= await bcryptjs.hash(password,salt)
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic:gender=="male"?boyProfilePic:girlProfilePic
    })
  
   if(newUser){
    generateTokenAndSetCookie(newUser._id,res)
   await  newUser.save()

    res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        password:newUser.password,
        gender:newUser.gender,
        profilePic:newUser.profilePic
    })
   }else{
    res.satus(400).json({error:"Invalid user data"})
   }

} catch (error) {
    console.log("error in signup controller:",error.message)
    res.status(500).json({error:"Internal Server Error"})
}
}