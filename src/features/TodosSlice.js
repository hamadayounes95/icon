import { createSlice } from "@reduxjs/toolkit";
const TodosSlice = createSlice({
    name :'todo',
    initialState : {
        dat :[]
    },
    reducers : {
        addTodo:(state,action)=>{
            state.dat=[...state.dat,{
                title:action.payload,
                done:true
            }]
        },
        DeletTodo:(state,action)=>{
            state.dat=state.dat.filter(t=>t.title !== action.payload)
        },
        AddTo : (state,action)=>{
           state.dat = state.dat.map(t=>t.title == action.payload? {...t,done:false}:t)
        }

    }
})
export const {addTodo,DeletTodo,AddTo} =TodosSlice.actions
export default TodosSlice.reducer