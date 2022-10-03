import React from "react";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

const TodoItem = ({ todo, updateTodo, deleteTodo }: Props) => {
  const checkTodo: string = todo.status ? `line-through` : "";

  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>

      <div className="Card--button">
        <button
          onClick={() => {
            updateTodo(todo);
          }}
          className={todo.status ? `hide-button` : "Card--button__done"}
        >
          COMPLETE
        </button>

        <button
          onClick={() => {
            deleteTodo(todo._id);
          }}
          className="Card--button__delete"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
