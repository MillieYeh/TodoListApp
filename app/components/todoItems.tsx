"use client";
import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import ListProps from "./listProps";

const TodoItem = (props: ListProps) => {
  const { id, title, handleDelete, handleEdit, handleDoneTask, completed } =
    props;
  return (
    <li className='list-group-item d-flex justify-content-between my-2'>
      <h6 className='mt-1 mb-0 align-middle'>{title}</h6>
      <div className='flex gap-1'>
        <span className='mx-2'>
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

export default TodoItem;
