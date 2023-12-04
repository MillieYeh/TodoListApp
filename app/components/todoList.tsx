"use client";
import React, { useState } from "react";
import TodoItem from "./todoItems";
import { ListProps } from "./listProps";

const TodoList = (props: ListProps) => {
  const {
    updateTodosToShow,
    handleDeleteDoneTasks,
    clearList,
    handleDelete,
    handleEdit,
  } = props;
  const [items, setItems] = useState<
    { id: any; title: string; completed: boolean }[]
  >([]);
  const handleDoneTask = (id: any, title: string, completed: any) => {
    const filteredItems = items.map(
      (item: { id: any; title: string; completed: boolean }) => {
        if (item.id === id) {
          item.completed = !completed;
        }
        return item;
      }
    );

    const clearList = () => {
      setItems([]);
    };

    setItems(filteredItems);
  };
  return (
    <>
      <div className='row'>
        <div
          className='btn-group'
          role='group'
          aria-label='Basic outlined example'
        >
          <button
            type='button'
            className='btn btn-outline-secondary mt-1'
            onClick={() => updateTodosToShow("all")}
          >
            All
          </button>
          <button
            type='button'
            className='btn btn-outline-secondary mt-1'
            onClick={() => updateTodosToShow("done")}
          >
            Done
          </button>
          <button
            type='button'
            className='btn btn-outline-secondary mt-1'
            onClick={() => updateTodosToShow("todo")}
          >
            Todo
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        ""
      ) : (
        <ul className='list-group my-5'>
          {items.map(
            (item: {
              id: React.Key | null | undefined;
              title: string;
              completed: any;
            }) => (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                completed={item.completed}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                handleDoneTask={handleDoneTask}
              />
            )
          )}

          <div className='row mt-4 flex'>
            <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
              <button
                type='button'
                className='btn btn-outline-danger mt-1 me-md-2 '
                onClick={handleDeleteDoneTasks}
              >
                Delete done tasks
              </button>
              <button
                type='button'
                className='btn btn-outline-danger mt-1'
                onClick={clearList}
              >
                Delete all tasks
              </button>
            </div>
          </div>
        </ul>
      )}
    </>
  );
};

export default TodoList;
