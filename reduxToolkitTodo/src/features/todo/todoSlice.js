import {createSlice, nanoid} from '@reduxjs/toolkit'
//nanoid generates unique id

const initialState = {
    todos: [{id:1, text:"Hello world"}]
}
//1. just an object, it is a must under slice


export const todoSlice = createSlice({
    name: 'todo', //redux syntax. will be used like todo/addTodo
    initialState,
    reducers: { //reduces define how a state will change, it ONLY does the work action just describes what to be done
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state,action) =>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state,action) =>{

            const {id, text} = action.payload; //the id and text will come from this, otherwise js will throw reference error
            const todo = state.todos.find((todo) => todo.id === id)
            if(todo){
                todo.text = text;
            }
        }
    }
})

//I will export every single reducer, for every single functionality
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

//for the store.js we need this line that is awareness about reducers, main export
export default todoSlice.reducer

//what is a slice ? 
//its something that allows data modification through reducers, also MUST contain initial state and name 