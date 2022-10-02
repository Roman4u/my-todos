import React, { useEffect, useState } from "react";
import { addTodo, getTodos } from "./API";
import AddTodo from "./components/AddTodo";

function App() {

  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = async (): Promise<any> => {
    try{
      const data = await getTodos();
      const todoList: ITodo[] = data.todos; 
      setTodos(todoList);
    }catch(error){
      console.error(error);
    }
  } 

  const handleSaveTodo = async (
    e: React.FormEvent,
    formData: ITodo
  ): Promise<any> => {
    e.preventDefault();

    try{
      const data = await addTodo(formData);
      console.log("data:", data);
      console.log("data.data:", data.data);
    }catch(error){
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
    </main>
  );
}

export default App;
