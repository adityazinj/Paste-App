import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeFromPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import './paste.css'
import { NavLink } from "react-router";


const Paste = () => {

  const paste = useSelector((state) =>state.paste.paste);

  const [searchTerm ,setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const filterdData = (paste || []).filter((paste) => 
  paste?.title?.toLowerCase().includes(searchTerm.toLowerCase())
);

  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }
   

  return (
    <div>

      <input  className='text-black p-1 rounded-xl bg-gray-400 mt-2 w-2xl pl-4 h-10 border-gray-500 border-2 border-solid'
      type="search"
      placeholder='search pastes'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}/>

      <div className='flex flex-col text-black font-bold border-2 border-solid border-gray-500 mt-2 rounded-xl bg-gray-400 h-10 justify-center mb-2'>
        Your Pastes
      </div>

      <div className='flex flex-col gap-5'>
        {
          filterdData.length > 0 &&
          filterdData.map(
            (paste) =>{
              return (
                <div>
                
                <div className='flex flex-col border-2 border-solid border-gray-500 mt-2 rounded-xl h-48 bg-gray-400' key={paste?._id}>
                  
                  <div>
                    <div className='text-black'>
                      {paste.title}
                    </div>
                  <div className='text-black'>
                    {paste.content}
                  </div>

                  </div>
                  
                  
                  <div className='flex flex-row gap-4 p-7 place-content-evenly '>
                    <button>
                      <NavLink to={`/?pasteId=${paste?._id}`} className='editButton'>
                      Edit
                      </NavLink>
                    </button>

                     <button>
                      <NavLink to = {`/paste/${paste?._id}`} className='viewButton'>
                      View
                      </NavLink>
                      
                    </button>

                     <button onClick={()=> handleDelete(paste._id)} className='deleteButton'>
                      Delete
                    </button>

                     <button onClick={()=>{
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("copied to clipboard")
                     }} className='copyButton'>
                      Copy
                    </button>

                    <button 
                      onClick={() => {
                        const shareUrl = `${window.location.origin}/paste/${paste._id}`;

                        if (navigator.share) {
                          navigator.share({
                            title: paste.title || 'Untitled Paste',
                            text: 'Check out this paste:',
                            url: shareUrl,
                          })
                        } else {
                          navigator.clipboard.writeText(shareUrl);
                        }
                      }} 
                      className='shareButton'
                    >
                      Share
                    </button>
 
                  </div>
                  <div className='text-black'>
                    {paste.createdAt}
                  </div>
                </div>
              </div>

              )
            }          
          )
        }

      </div>

    </div>
  )
}

export default Paste
