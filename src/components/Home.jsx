import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateToPaste,addToPaste } from '../redux/pasteSlice';

const Home = () => {

  const [title,setTitle] = useState("");
  const [value,setValue] = useState('');
  const [searchParams,setSeachParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPaste = useSelector((state)=> state.paste.paste);

  function createPaste() {
    const paste = {
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString(),
    }

    

    if(pasteId){
        // Update
        dispatch(updateToPaste(paste));
    }
    else{
        // create
        dispatch(addToPaste(paste));
    }
    // after creation or updation

    setTitle('');
    setValue('');
    setSeachParams({});
  }

 useEffect(() => {
  if (pasteId) {
    const paste = allPaste.find((p) => p._id === pasteId);
    if (paste) {
      setTitle(paste.title);
      setValue(paste.content); 
    }
  }
}, [pasteId, allPaste]);


    
  return (
    <div>
        <div className='flex gap-2  justify-between'>

            <input  className='text-black p-1 rounded-xl bg-gray-400 mt-2 w-[500px] pl-4 h-10 border-gray-500'
            type="text" 
            placeholder='Enter title here'
            value={title}
            onChange={(e)=>setTitle(e.target.value)} />

            <button onClick={createPaste} className='p-1 rounded-3xl mt-2 bg-blue-400'>
                {
                    pasteId ? "Update My Paste" :"Create My Paste"
                }
            </button>
        </div>
        <div>
            <textarea className='bg-gray-400 w-2xl mt-3 rounded-xl p-4 h-52 text-black'
                value={value}
                placeholder='Enter your content'
                onChange={(e)=>setValue(e.target.value)}
                rows={20}
            
            />
        </div>
    </div>
  )
}

export default Home
