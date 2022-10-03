import React, { useEffect, useState } from "react";

import TodoItem from "./components/TodoItem";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./API";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = async (): Promise<any> => {
    try {
      const data = await getTodos();
      const todoList: ITodo[] = data.data.allTodos;
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
    try {
      e.preventDefault();
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

  const handleDeleteTodo = async (_id: string): Promise<any> => {
    try {
      const data = await deleteTodo(_id);
      if (data.status !== 200) {
        throw new Error("Error! Todo not deleted");
      }
      setTodos(data.todos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   await fetchTodos();
    // };
    // fetchData();
    fetchTodos();
  }, []);

  return (
    <main className="App">
      <>
        <h1>My List of Todos</h1>
        <AddTodo saveTodo={handleSaveTodo} />
        {todos?.map((todo: ITodo) => {
          return (
            <TodoItem
              key={todo._id}
              updateTodo={handleUpdateTodo}
              deleteTodo={handleDeleteTodo}
              todo={todo}
            />
          );
        })}
      </>
    </main>
  );
}

export default App;
