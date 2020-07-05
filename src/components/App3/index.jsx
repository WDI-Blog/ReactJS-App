import React, { useState } from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center mt-2">
        <span style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
          {todo.text}
        </span>
        <div>
          <button
            className="btn btn-sm btn-success text-white mr-3"
            onClick={() => completeTodo(index)}
          >
            Complete
          </button>
          <button
            className="btn btn-sm btn-danger text-white"
            onClick={() => removeTodo(index)}
          >
            Remove
          </button>
        </div>
      </li>
    </ul>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  //Truyền giá trị nhận được từ Form cho cha thông qua addTodo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mt-5">
        <input
          className="form-control border-primary"
          type="text"
          value={value}
          placeholder="Add Todo"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}

export default function TodoList() {
  // Tạo danh sách mẫu ban đầu
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isComplete: false,
    },
    {
      text: "Meet friend for lunch",
      isComplete: false,
    },
    {
      text: "Build really cool todo app",
      isComplete: false,
    },
  ]);
  const addNewTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="container mt-5">
      <div className="todo-list">
        <h2>{process.env.REACT_APP_API_URL}</h2>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        {/* Nhận giá trị từ con qua addTodo và sử dụng nó trong hàm addNewTodo */}
        <TodoForm addTodo={addNewTodo} />
      </div>
    </div>
  );
}
