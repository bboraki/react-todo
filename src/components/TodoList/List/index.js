function List({ todos, deleteTodo, setTodo }) {

    const onChangeTodo = (id) => {
        const cloneTodos = [...todos];
        const itemIndex = cloneTodos.findIndex(todo => todo.id === id);
        const item = cloneTodos[itemIndex];
        item.isCompleted = !item.isCompleted;
        console.log(cloneTodos);
        setTodo(cloneTodos);
    }

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
                    <div className="view">
                        <input className="toggle" type="checkbox" checked={todo.isCompleted} onChange={() => onChangeTodo(todo.id)} />

                        <label>{todo.todo_desc}</label>

                        <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default List;