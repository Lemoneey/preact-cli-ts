import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import s from "./Home.css";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const Home: FunctionalComponent = () => {
    const [todos, setTodos] = useState<Todo[]>()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(datas => setTodos(datas))
    }, [])

    if (todos) {
        return (
            <ul>{
                todos.map(todo => <li class={todo.completed ? s.todo__item_completed : s.todo__item} key={todo.id}>{todo.title}</li>)
            }</ul>
        )
    }

    return (
        <div />
    )
}

export default Home;