import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, deleteTodoAsync, updateTodo, updateTodoAsync } from '../../../features/todo/todoSlice'

const Todos = ({ todos }) => {

    const dispatch = useDispatch()

    // update activity
    const handleToggleAcive = (id, activeStatus) => { 
        // const _todos = todos.map(todo => todo.id === id ? { ...todo, active: !todo.active } : todo) // modifying array 
        // setTodos([..._todos])
        // dispatch(updateTodo(id))
        dispatch(updateTodoAsync({id, activeStatus}))
    }

    // Delete Activity
    const handleDelete = (id) =>{
        // const _todos = todos.filter( ele => ele.id !== id )  // filtering array
        // setTodos([..._todos])
        // dispatch(deleteTodo(id))
        dispatch(deleteTodoAsync(id))
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
                            <div onClick={() => handleToggleAcive(todo.id, todo.active)} style={{ cursor: "pointer" }}>{todo.active ? "Complete It" : "Completed"}</div>
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