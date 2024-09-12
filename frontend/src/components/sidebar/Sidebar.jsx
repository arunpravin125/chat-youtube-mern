import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from "./LogoutButton"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput/>
      
  
     
      <Conversations/>
      <div className="divider px-3">
   <LogoutButton/>
      </div>
    </div>
  )
}

export default Sidebar
