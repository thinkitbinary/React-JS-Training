import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    status: null,
    error: null
}

export const getTodoAsync = createAsyncThunk(
    "todo/getTodoAsync",
    async (obj, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
        const response = await fetch('http://localhost:3001/todos');
        const data = await response.json();
        return data
    }
)

export const addTodoAsync = createAsyncThunk(
    "todo/addTodoAsync",
    async (todo, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
        return await fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        }).then(
            res => res.json()
        )
    }
)

export const deleteTodoAsync = createAsyncThunk(
    "todo/deleteTodoAsync",
    async (todoId, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
        await fetch("http://localhost:3001/todos/"+todoId, {
            method: "DELETE",
        }).then(
            res => res.json()
        )
        return todoId
    }
)

export const updateTodoAsync = createAsyncThunk(
    "todo/updateTodoAsync",
    async (obj, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
        const { id, activeStatus } = {...obj}
        return await fetch("http://localhost:3001/todos/"+id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({active:!activeStatus})
        }).then(
            res => res.json()
        )
    }
)

// export const getTodo = createAsyncThunk(
//     "todo/getTodo",
//     async (obj, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
//         try {
//             const response = await fetch('http://localhost:3001/tod');
//             if (!response.ok) {
//                 return rejectWithValue(response.status +" "+ response.statusText)
//             }
//             const data = await response.json();
//             return fulfillWithValue(data)
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// )


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
        },
    },
    extraReducers: {
        [getTodoAsync.pending]: (state, action) => {  // todo/getTodoAsync/pending
            state.status = "loading"
        },
        [getTodoAsync.fulfilled]: (state, action) => {  // todo/getTodoAsync/fulfilled
            state.status = "success"
            state.data = action.payload
        },
        [getTodoAsync.rejected]: (state, action) => {  // todo/getTodoAsync/rejected
            state.status = "failed"
            state.error = "error"
        },
        [addTodoAsync.pending]: (state, action) => {  // todo/addTodoAsync/pending
            state.status = "loading"
        },
        [addTodoAsync.fulfilled]: (state, action) => {  // todo/addTodoAsync/fulfilled
            console.log(action.payload)
            state.status = "success"
            state.data = [...state.data, { ...action.payload }]
        },
        [addTodoAsync.rejected]: (state, action) => {  // todo/addTodoAsync/rejected
            state.status = "failed"
            state.error = "error"
        },
        [deleteTodoAsync.pending]: (state, action) => {  // todo/addTodoAsync/pending
            state.status = "loading"
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {  // todo/addTodoAsync/fulfilled
            state.status = "success"
            const _todos = state.data.filter(todo => todo.id !== action.payload)
            state.data = [..._todos]
        },
        [deleteTodoAsync.rejected]: (state, action) => {  // todo/addTodoAsync/rejected
            state.status = "failed"
            state.error = "error"
        },
        [updateTodoAsync.pending]: (state, action) => {  // todo/addTodoAsync/pending
            state.status = "loading"
        },
        [updateTodoAsync.fulfilled]: (state, action) => {  // todo/addTodoAsync/fulfilled
            state.status = "success"
            console.log(action.payload)
            const _todos = state.data.map(todo => todo.id === action.payload.id ? action.payload : todo)
            state.data = [..._todos]
        },
        [updateTodoAsync.rejected]: (state, action) => {  // todo/addTodoAsync/rejected
            state.status = "failed"
            state.error = "error"
        },
    }
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer