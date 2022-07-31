import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: "ravi",
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateName } = todoSlice.actions

export default todoSlice.reducer