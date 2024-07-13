import { useEffect, useState } from 'react';

function Input({ addTodo, todos }) {
    const [form, setForm] = useState({ id: "", todo_desc: "", isCompleted: "" });
    const [idCounter, setIdCounter] = useState(1);

    useEffect(() => {
        setForm({ todo_desc: "" });
    }, [todos])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const submitFunc = (e) => {
        e.preventDefault();

        if (!form.todo_desc.trim()) {
            return false;
        }

        addTodo([...todos, {
            id: idCounter,
            todo_desc: form.todo_desc,
            isCompleted: false
        }]);

        setIdCounter((i) => i + 1)
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={submitFunc}>
                <div>
                    <input className="new-todo"
                        name="todo_desc"
                        value={form.todo_desc}
                        placeholder="What needs to be done?"
                        onChange={onChangeInput}
                    />
                </div>
            </form>
        </header>

    )
}

export default Input;