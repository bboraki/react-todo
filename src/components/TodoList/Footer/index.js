import { useState, useMemo } from "react";

function Footer({ todos, setTodo, }) {
    const [filter, setFilter] = useState("all");
    const clearCompleted = () => {
        const filteredTodos = todos.filter((todo) => !todo.isCompleted);
        setTodo(filteredTodos);
    };

    const itemsLeft = useMemo(() => {
        return todos.filter(todo => !todo.isCompleted).length;
    }, [todos]);

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{itemsLeft} </strong>
                item{itemsLeft !== 1 && "s"} left
            </span>

            <ul className="filters">
                <li>
                    <a 
                        href="#/" 
                        onClick={() => setFilter("all")} 
                        className={filter === "all" ? "selected" : ""}>
                        All
                    </a>
                </li>
                <li>
                    <a 
                        href="#/" 
                        onClick={() => setFilter("active")} 
                        className={filter === "active" ? "selected" : ""}>
                        Active
                    </a>
                </li>
                <li>
                    <a 
                        href="#/" 
                        onClick={() => setFilter("completed")} 
                        className={filter === "completed" ? "selected" : ""}
                    >
                        Completed
                    </a>
                </li>
            </ul>

            <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
            </button>
        </footer>
    );
}

export default Footer;
