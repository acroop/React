import {createSlice, nanoid} from  '@reduxjs/toolkit';

//Features is also known as SLice according to the documentations
//3 things required to make a slice
//1. initial state 2.name 3.reducers

//One More syntax:
//Declare function first 
//Example:
//function sayHello(name) => {
//     console.log("Hello World")
// }
//Then just call reference of the function in reducer prop of createSlice({reducer: {sayHello}})

//Properties in reducers always contain  a 'state' and an optional 'action'.
//Syntax: 
// property: (state, action) => newValue;
//state: current state value or updated state value in the store & action: what happend with that state(or simply passes data) or action.payload
//action itself is an object it has properties like payload which we can access by '.' it can give text etc..

const initialState = [{
    todos: [{id: 1, text: "Hello World"}]
}]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo) 
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer