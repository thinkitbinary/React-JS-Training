import React, { useState } from 'react'
import Todos from './Todos'

const initialInputs = { activity: "", date: "" }
const Todo = () => {
    const [inputs, setInputs] = useState(initialInputs)
    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const handleAddTodo = () => {
        if (inputs.activity && inputs.date) {
            const currentTS = new Date().getTime();
            const _todos = [...todos, { ...inputs, id: currentTS, active:true }]
            setTodos(_todos)
            setInputs(initialInputs)
        }
        else {
            alert("Invalid Inputs")
        }
    }

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
            <Todos todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Todo