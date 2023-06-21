import { useUser } from "./userContext"
import { useFetchCached } from "../custom-hooks/useFetchCached"

export function Todos() {
    const user = useUser()
    const [todos, setTodos] = useFetchCached(`/todos?userId=${user.id}`)

    const handleChange = (id) => {
        const updatedTodos = todos.map(todo=>
            todo.id === id ? {...todo, completed : !todo.completed} : todo)
        setTodos(updatedTodos)
    }

    const shuffleTodos = () => {
        const newArray = Array.from(todos);
        for (let i = newArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray
    };

    const sortTodos = (method) => {
        let sortedTodos = [];
        switch (method){
            case "id":
                sortedTodos = Array.from(todos).sort((a, b) => a.id - b.id)
                break;
            case "random":
                sortedTodos = shuffleTodos()
                break;
            case "alphabetical":
                sortedTodos = Array.from(todos).sort((a, b) => a.title.localeCompare(b.title))
                break;
            case "done":
                sortedTodos = Array.from(todos).sort((a, b) => (a.completed === b.completed) ? 0 : a.completed ? -1 : 1)
                break;
        }
        setTodos(sortedTodos)
    }

    const todosElement = todos.map((todo) => (
        <div key={todo.id} className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChange(todo.id)}
                className="todo-checkbox"
            />
            <span className={`todo-title ${todo.completed ? 'todo-completed' : ''}`}>
      {todo.title}
    </span>
        </div>
    ));

    return (
        <>
            <div>
                <h1>Todos of {user.username}</h1>
                <div className="todos-header">
                    <span>Select todos order:</span>
                    <select
                        id="fontSelector"
                        onChange={(event) => sortTodos(event.target.value)}
                    >
                        <option value="id">Sequential</option>
                        <option value="random">Random</option>
                        <option value="alphabetical">Alphabetical</option>
                        <option value="done">Done or not</option>
                    </select>
                </div>
                <br />
                <div className="todos-element">{todosElement}</div>
            </div>

        </>
        
    )
}