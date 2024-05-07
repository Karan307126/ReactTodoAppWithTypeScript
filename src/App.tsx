import { useState } from "react";
import "./App.css";
import InputField from "./components/inputField";
import { Todo } from "./model";
import TodoList from "./components/todoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Todo App</span>
      <InputField todo={todo} setTodo={setTodo} handelAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
