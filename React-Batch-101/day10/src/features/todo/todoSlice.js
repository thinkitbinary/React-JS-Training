import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.data.push(action.payload) 
        },
        deleteTodo: (state, action) => {
            const id = action.payload
            const _todos = state.data.filter(ele => ele.id !== id)  // filtering array
            state.data = [..._todos]
        },
        updateTodo: (state, action) => {
            const id = action.payload
            const _todos = state.data.map(todo => todo.id === id ? { ...todo, active: !todo.active } : todo) // modifying array 
            state.data = [..._todos]
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer