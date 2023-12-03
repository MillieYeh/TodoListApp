"use client";
import React from "react";
import TodoItems from "./todoItems";

const TodoList = () => {
  return (
    <>
      <div className='row'>
        <div
          className='btn-group'
          role='group'
          aria-label='Basic outlined example'
        >
          <button type='button' className='btn btn-outline-secondary mt-1'>
            All
          </button>
          <button type='button' className='btn btn-outline-secondary mt-1'>
            Done
          </button>
          <button type='button' className='btn btn-outline-secondary mt-1'>
            Todo
          </button>
        </div>
      </div>
      <ul>
        <TodoItems />
        <div className='row mt-4 flex'>
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <button
              type='button'
              className='btn btn-outline-danger mt-1 me-md-2 '
            >
              Delete done tasks
            </button>
            <button type='button' className='btn btn-outline-danger mt-1'>
              Delete all tasks
            </button>
          </div>
        </div>
      </ul>
    </>
  );
};
export default TodoList;
