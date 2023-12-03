"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [items, setItems] = useState<
    { id: any; title: string; completed: boolean }[]
  >([]);
  const [item, setItem] = useState("");
  const [id, setId] = useState(uuidv4());
  const [editItem, setEditItem] = useState(false);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newItem = {
      id,
      title: item,
      completed: false,
    };

    if (item.length > 0) {
      setItems([...items, newItem]);
      setId(uuidv4());
      setItem("");
      setEditItem(false);
    }
  };

  const handleDoneTask = (id: any, completed: any) => {
    const filteredItems = items.map((item) => {
      if (item.id === id) {
        item.completed = !completed;
      }
      return item;
    });

    setItems(filteredItems);
  };

  return (
    <div className='card card-body my-3'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          placeholder='New Todo'
          value={item}
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
