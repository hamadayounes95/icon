import { createSlice } from "@reduxjs/toolkit";


const Co = createSlice ({
    name :'coco',
    initialState :{
        number: 0
    },
    reducers:{
        increments : (state,actions) =>{
           state.number += 1
        },
        decrements : (state,actions) =>{
            state.number -= 1
         },

        init : (state,actions)=>{
           state.number = 0
            
         }

    }
})
export const {increments,decrements,init} = Co.actions
export default  Co.reducer