import { createSlice, nanoid } from '@reduxjs/toolkit'
import { comma } from 'postcss/lib/list'


const initialState = {
    todos: [
    ]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
        ,
        updateTodo: (state, action) => {
            const { id, text, completed } = action.payload;
            state.todos = state.todos.map(todo =>
                todo.id === id ? {
                    ...todo, text: text, completed: completed
                } :
                    todo
            );
            console.log(state.todos);
        },
        updateStatus: (state, action) => {
            const { id, completed } = action.payload
            console.log(completed);
            state.todos = state.todos.map(todo =>
                todo.id === id ? {
                    ...todo, completed: !completed
                } :
                    todo
            )

            console.log(state.todos);
            // console.log(id , "@@@@@@@@",completed);
        }
    }

})

export const { addTodo, deleteTodo, updateTodo, updateStatus } = todoSlice.actions
export default todoSlice.reducer