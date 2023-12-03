"use client";
import React, { useState } from "react";

const addTask = () => {
  const [item, setItem] = useState("");
  const handleChange = (e: any) => {
    setItem(e.target.value);
  };
  return (
    <div className='card card-body my-3'>
      <form>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='New Todo'
            value={item}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-light mt-3'>
          Add new task
        </button>
      </form>
    </div>
  );
};

export default addTask;
