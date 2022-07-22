import React from 'react'

const Todos = ({ todos, setTodos }) => {

    const handleToggleAcive = (id) => {
        const _todos = todos.map(todo => todo.id === id ? { ...todo, active: !todo.active } : todo)
        console.log(_todos)
        setTodos(_todos)
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