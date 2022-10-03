import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo = ({ saveTodo }: Props) => {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="Form" onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name"></input>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description"></input>
        </div>
      </div>

      <button
        disabled={formData === undefined ? true : false}
      >
        Add A Todo
      </button>
    </form>
  );
};

export default AddTodo;
