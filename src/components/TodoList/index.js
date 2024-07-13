import { useState } from 'react';
import Input from './Input';
import List from './List';
import Footer from './Footer';

function TodoList()
{
    const [todo, setTodo] = useState([]);

    const deleteTodo = (id) => {
        setTodo(todo.filter((todo) => todo.id !== id));
      };

    return (
        <div>
        <Input addTodo={setTodo} todos={todo} />
        <List todos={todo} deleteTodo={deleteTodo} setTodo={setTodo}/>
        <Footer todos={todo} setTodo={setTodo} />
        </div>
    )
}

export default TodoList;