"use client";
import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [items, setItems] = useState<
    { id: any; title: string; completed: boolean }[]
  >([]);
  const [task, setTask] = useState<string>("");
  const [id, setId] = useState(uuidv4());
  const [editItem, setEditItem] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newItem = {
      id,
      title: task,
      completed: false,
    };

    if (task.length > 0) {
      setItems([...items, newItem]);
      setId(uuidv4());
      setTask("");
      setEditItem(false);
    }
  };

  return (
    <div className='card card-body my-3'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          placeholder='New Todo'
          value={task}
          onChange={handleChange}
        />
        <button
          type='submit'
          className={`btn btn-light mt-3 ${
            editItem ? "btn-success" : "btn-info"
          }`}
        >
          {editItem ? "Edit task" : "Add New Task"}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
