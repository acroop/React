import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

//Maximum applications has only one store also known as single source of tool 

export const store = configureStore({
    reducer: todoReducer
});