import React, { useEffect, useState } from "react";

import TodoItem from "./components/TodoItem";
import { addTodo, getTodos, updateTodo } from "./API";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = async (): Promise<any> => {
    try {
      const data = await getTodos();
      const todoList: ITodo[] = data.todos;
      setTodos(todoList);
    } catch (error) {
      console.error(error);
    }
  };

  // this functions takes user input and sets the state
  // with the data returned from the addTodo api call
  const handleSaveTodo = async (
    e: React.FormEvent,
    formData: ITodo
  ): Promise<any> => {
    e.preventDefault();

    try {
      const data = await addTodo(formData);
      if (data.status !== 201) {
        throw new Error("Error! No Todo Saved");
      }
      setTodos(data.todos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTodo = async (todo: ITodo): Promise<any> => {
    try {
      const data = await updateTodo(todo);
      if (data.status !== 201) {
        throw new Error("Error! Todo not updated");
      }
      setTodos(data.todos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = (_id: string): void => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main className="App">
      <h1>My List of Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => {
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />;
      })}
    </main>
  );
}

export default App;
