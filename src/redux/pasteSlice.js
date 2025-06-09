import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'
import toast from 'react-hot-toast';


const initialState = {
    paste:localStorage.getItem("paste")

    ? JSON.parse(localStorage.getItem("paste"))
    : []

}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
      const paste = action.payload;
      state.paste.push(paste);
      localStorage.setItem("paste",
      JSON.stringify(state.paste));
      toast.success("Paste created successfully")
    
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.paste.findIndex((item)=>
      item._id === paste._id);

      if(index >= 0){
        state.paste[index] = paste

        localStorage.setItem("paste",JSON.stringify(state.paste))

        toast.success("Paste updated")
      }


    },
    resetAllPaste: (state, action) => {
       state.paste = [];

       localStorage.removeItem("paste");

    },
    removeFromPaste: (state, action) => {
        const PasteId = action.payload;

        console.log(PasteId);
        const index = state.paste.findIndex((item)=>
        item._id === PasteId);

        if(index >= 0) {
          state.paste.splice(index,1);

          localStorage.setItem("paste",JSON.stringify(state.paste))

          toast.success("Paste deleted")
        }
        
    },
  },
})


export const { addToPaste, updateToPaste, resetAllPaste,removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer