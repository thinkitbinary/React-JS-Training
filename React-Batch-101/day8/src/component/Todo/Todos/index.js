import React from 'react'

const Todos = ({ todos, setTodos }) => {

    // update
    const handleToggleAcive = (id) => { 
        const _todos = todos.map(todo => todo.id === id ? { ...todo, active: !todo.active } : todo) // modifying array 
        setTodos([..._todos])
    }

    // Delete
    const handleDelete = (id) =>{
        const _todos = todos.filter( ele => ele.id !== id )  // filtering array
        setTodos([..._todos])
    }

    return (
        <div>
            {todos.length > 0
                ?
                <div>
                    {todos.map(todo =>
                        <div
                            key={todo.id}
                            style={{ width: "500px", display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-around", height: "2rem", padding: ".25rem", borderBottom: "1px solid gray", color: todo.active ? "gray" : "green", backgroundColor: todo.active ? "white" :"lightgreen" }}>
                            <div style={{ fontWeight: 600, fontSize: "1.5rem" }}>{todo.activity}</div>
                            <div>{todo.date} </div>
                            <div onClick={() => handleToggleAcive(todo.id)} style={{ cursor: "pointer" }}>{todo.active ? "Complete It" : "Completed"}</div>
                            <div onClick={() => handleDelete(todo.id)} style={{ cursor: "pointer", color:"red" }}> X </div>
                        </div>
                    )}
                </div>
                :
                <div style={{ color: "gray", fontSize: "1.5rem" }}>No Activities Planned</div>
            }
        </div >
    )
}

export default Todos