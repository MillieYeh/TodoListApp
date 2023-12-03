"use client";
import React, { useState } from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import ListProps from "./ListProps";

const TodoItems = (props: ListProps) => {
  const { id, title, handleDelete, handleEdit, handleDoneTask, completed } =
    props;

  

  return (
    <li className='list-group-item d-flex justify-content-between my-2'>
      <h6 key={id} className={`mt-1 mb-0 align-middle ${
          completed ? "completed-task" : ""
        }`}>{title}</h6>
      <div className='flex gap-1'>
        <span           className={`mx-2 ${completed ? "text-success" : "text-secondary"}`}
          onClick={() => handleDoneTask(id)}>
          <FaRegSquare />
        </span>
        <span className='mx-2 text-warning'>
          <FiEdit2 />
        </span>
        <span className='mx-2 text-danger'>
          <FiTrash />
        </span>
      </div>
    </li>
  );
};

export default TodoItems;
