import { createSlice } from "@reduxjs/toolkit";

const TodSlice = createSlice ({
    name :'power',
    initialState :{
        Tab :[]
    },
    reducers :{
        Duties : (state,actions)=>{
            state.Tab=[...state.Tab,{
                title : actions.payload,
                done : true
            }]
        },
        addTod : (state,actions)=> {
            state.Tab= state.Tab.map(t=> t.title == actions.payload?{...t,done:false}:t)
        },
        removeTod : (state,actions)=>{
            state.Tab = state.Tab.filter( t=>t.title !==actions.payload)
        }

    }
})
export const {Duties,addTod,removeTod}=TodSlice.actions
export default TodSlice.reducer