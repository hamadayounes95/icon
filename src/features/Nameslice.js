import { createSlice } from "@reduxjs/toolkit";


const NameSlice = createSlice({
    name: 'nom',
    initialState: {
        nom :'mouad'
    },
    reducers:{
        update: (s)=>{
            s.nom='younes hamada'
        }
    }
})
export const { update } = NameSlice.actions
export default NameSlice.reducer