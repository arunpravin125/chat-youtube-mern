import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext'

const Conversation = ({conversation,emoji,lastIdx}) => {
  const {selectedConversation,setSelectedConversation}=useConversation()
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
  var isSelected;
  if(selectedConversation){
    const id = selectedConversation._id
     isSelected = id === conversation._id;
  }
  return (
    <>
    <div onClick={()=>setSelectedConversation(conversation)} className={`flex gap-2 items-center hover:bg-sky-500 rounded
      ${isSelected?('bg-sky-500'):""}
      p-2 py-1 cursor-pointer`}>
        <div className={`avatar ${isOnline? "online":""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar"></img>
            </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className='flex gap-3 justify-between'>
                <p className="font-bold text-gray-200" >{conversation.fullName}</p>
                <span className="text-xl" >{emoji}</span>
            </div>

        </div>


    </div>
     {!lastIdx &&  <div className="divider my-0 py-0 h-1" ></div>}
    </>
  )
}

export default Conversation


// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//     <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src="" alt="user avatar"></img>
//             </div>
//         </div>

//         <div className="flex flex-col flex-1">
//             <div className='flex gap-3 justify-between'>
//                 <p className="font-bold text-gray-200" >Arunpravin</p>
//                 <span className="text-xl" ></span>
//             </div>

//         </div>


//     </div>
//       <div className="divider my-0 py-0 h-1" ></div>
//     </>
//   )
// }

// export default Conversation