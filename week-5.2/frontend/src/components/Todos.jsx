/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function Todos({ todos }){
    return (
        <div>
            {todos.map(todo=>(
                 <div key={todo.id}> 
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button>{todo.completed === true ? "completed" : "mark as completed"}</button>
                        </div>
    ))}
        </div>
    );
}
