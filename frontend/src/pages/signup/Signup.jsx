import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
  const [inputs,setInputs]=useState({
    fullName:"",username:"",password:"",confirmPassword:"",gender:""
  })

  const {loading,signup} =useSignup()
  const handleCheckBoxChange = (gender) =>{

    setInputs({...inputs,gender:gender})
  }

  const handleSubmit = async(e)=>{
e.preventDefault()
  await signup(inputs)


          
  }
  return (
    <div className="flex flex-col items-center min-w-96 justify-center mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0" >
        <h1 className="text-3xl font-semibold text-center text-gray-300" >Signup

            <span  className='text-blue-500' >ChatApp</span>
         </h1>

         <form onSubmit={handleSubmit}>
          
            <div>
                <label className="label p-2" >
                  <span className="text-base label-text" >FullName</span>
                </label>
                <input value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} type="text" placeholder="Enter FullName" className="w-full input input-bordered h-10" ></input>
            </div>

            <div>
                <label className="label p-2" >
                  <span className="text-base label-text" >Username</span>
                </label>
                <input value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})} type="text" placeholder="Enter UserName" className="w-full input input-bordered h-10" ></input>
            </div>

            <div>
                <label className="label p-2" >
                  <span className="text-base label-text" >Password</span>
                </label>
                <input value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" ></input>
            </div>
            <div>
                <label className="label p-2" >
                  <span className="text-base label-text" >Confirm Password</span>
                </label>
                <input value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" ></input>
            </div>
            
            {/* gender check */}
            <GenderCheckBox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>
            <Link to="/login" className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block"  >
            Already have an account</Link>
            <div>
                    <button disabled={loading} className="btn btn-block btn-sm mt-2" >


                      {loading?<span  className="loading loading-spinner" ></span>:"Signup"}
                    </button>
                </div>
         </form>
        </div>
      
    </div>
  )
}

export default Signup


// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center min-w-96 justify-center mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0" >
//         <h1 className="text-3xl font-semibold text-center text-gray-300" >Signup

//             <span  className='text-blue-500' >ChatApp</span>
//          </h1>

//          <form>
          
//             <div>
//                 <label className="label p-2" >
//                   <span className="text-base label-text" >Full Name</span>
//                 </label>
//                 <input type="text" placeholder="Enter FullName" className="w-full input input-bordered h-10" ></input>
//             </div>

//             <div>
//                 <label className="label p-2" >
//                   <span className="text-base label-text" >Username</span>
//                 </label>
//                 <input type="text" placeholder="Enter UserName" className="w-full input input-bordered h-10" ></input>
//             </div>

//             <div>
//                 <label className="label p-2" >
//                   <span className="text-base label-text" >Password</span>
//                 </label>
//                 <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" ></input>
//             </div>
//             <div>
//                 <label className="label p-2" >
//                   <span className="text-base label-text" >Confirm Password</span>
//                 </label>
//                 <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" ></input>
//             </div>
            
//             {/* gender */}
//             <GenderCheckBox/>
//             <a href="a" className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block"  >
//             Already have an account</a>
//             <div>
//                     <button className="btn btn-block btn-sm mt-2" >SignUp</button>
//                 </div>
//          </form>
//         </div>
      
//     </div>
//   )
// }

// export default Signup
