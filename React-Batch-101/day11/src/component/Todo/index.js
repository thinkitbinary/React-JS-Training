import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todos from './Todos'
import {addTodo, addTodoAsync, getTodoAsync} from '../../features/todo/todoSlice'

const initialInputs = { activity: "", date: "" }
const Todo = () => {
    const todos = useSelector( state => state.todo.data )
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    // add Todo event
    const handleAddTodo = () => {   
        if (inputs.activity && inputs.date) {
            const currentTS = new Date().getTime();
            // dispatch(addTodo({ ...inputs, id: currentTS, active:true }))
            dispatch(addTodoAsync({ ...inputs, id: currentTS, active:true }))
            setInputs(initialInputs)
        }
        else {
            alert("Invalid Inputs")
        }
    }

    useEffect(()=>{
        dispatch(getTodoAsync())
    },[])

    return (
        <div style={{ minHeight: "700px", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", padding: "1rem" }}>
            <div style={{ display: "flex", gap: '1rem' }}>
                <input
                    name="activity"
                    value={inputs.activity}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    placeholder='Enter Activity'
                    style={{ height: "2rem", width: "400px", padding: ".5rem", color: "blue", fontSize: "1.25rem" }}
                />
                <input
                    name="date"
                    value={inputs.date}
                    onChange={(e) => handleChange(e)}
                    type="date"
                    style={{ height: "2rem", width: "200px", padding: ".5rem", color: "blue", fontSize: "1.25rem" }}
                />
                <button
                    onClick={handleAddTodo}
                    style={{ width: "200px", padding: ".5rem", fontSize: "1.25rem", fontWeight: 600, cursor: "pointer" }}
                >
                    + Todo
                </button>
            </div>
            <Todos todos={todos}/>
        </div>
    )
}

export default Todo