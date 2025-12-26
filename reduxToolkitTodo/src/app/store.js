import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice' //it is what gives a way that how the state will change
export const store = configureStore({
    reducer: todoReducer
})

//store = a central place where state of entire application lives 


/*
Data flow 

Component
  ↓ dispatch(addTodo)
Store
  ↓ calls todoReducer
Reducer
  ↓ returns new state
Store updates
  ↓
Component re-renders


*/