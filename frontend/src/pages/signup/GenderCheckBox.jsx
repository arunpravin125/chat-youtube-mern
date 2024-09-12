import React from 'react'

const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className="flex mt-2" >
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender=="male"?"selected":""} `} >
            <span className="label-text text-blue-200">Male</span>
            <input type="checkbox" className="checkbox border-slate-300" 
            checked={selectedGender=="male"} onChange={()=>onCheckboxChange("male")} ></input>
        </label>
      </div>
      <div className="form-control">
      <label className={`label gap-2 cursor-pointer ${selectedGender=="female"?"selected":""}`} >
            <span className="label-text  text-blue-200">Female</span>
            <input  checked={selectedGender=="female"} onChange={()=>onCheckboxChange("female")} type="checkbox" className="checkbox border-slate-300" ></input>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox

// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className="flex mt-2" >
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`} >
//             <span className="label-text text-blue-200">Male</span>
//             <input type="checkbox" className="checkbox border-slate-300" ></input>
//         </label>
//       </div>
//       <div className="form-control">
//       <label className={`label gap-2 cursor-pointer`} >
//             <span className="label-text  text-blue-200">Female</span>
//             <input type="checkbox" className="checkbox border-slate-300" ></input>
//         </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheckBox

