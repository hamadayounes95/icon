import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counterslice'
import NameReducer from './Nameslice'
import TodoReducer from './TodosSlice'
import powerReducer from './TodSlice'
import CocoReducer from './ContSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    nom : NameReducer,
    todo : TodoReducer,
    power : powerReducer,
    coco : CocoReducer
  },
})