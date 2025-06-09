import { useParams,useSearchParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { addToPaste,updateToPaste } from '../redux/pasteSlice';

import React, { useEffect,useState } from 'react';

const ViewPaste = () => {

  const {id} = useParams();
  const allPaste = useSelector((state) => state.paste.paste);

  const paste = allPaste.filter((p) => p._id === id)[0];
  console.log("Final Paste :",paste);

  return (
   <div>
      <div className='flex gap-2  justify-between'>

            <input  className='text-black p-1 rounded-xl bg-gray-400 mt-2 w-[500px] pl-4 h-10 border-gray-500'
            type="text" 
            placeholder='Enter title here'
            value={paste.title}
            disabled
            onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
            <textarea className='bg-gray-400 w-2xl mt-3 rounded-xl p-4 h-52 text-black'
                value={paste.content}
                placeholder='Enter your content'
                onChange={(e)=>setValue(e.target.value)}
                rows={20}
                disabled
            />
        </div>
    </div>
  )
}

export default ViewPaste
