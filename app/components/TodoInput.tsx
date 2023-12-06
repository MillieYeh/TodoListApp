import React, { FormEventHandler, useState } from "react";
import { ITask } from "../interface";

interface TodoInputProps {
  onAddTask: (taskName: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTask }) => {
  const [tasks, setTasks] = useState<any>("");

  const handleInputChange = (e: any) => {
    setTasks(e.target.value);
  };

  const handleDelete = (id: any) => {
    const filteredItems = tasks.filter((task: { id: any }) => task.id !== id);
    setTasks(filteredItems);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const addTask = (): void => {
    onAddTask(tasks);
    setTasks("");
  };
  return (
    <div className='card card-body my-3'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <div>
            <input
              className='border border-gray-400 mr-2 px-4 py-2 flex-grow'
              type='text'
              name='task'
              placeholder=''
              value={tasks}
              onChange={handleInputChange}
            />
          </div>
          <button className='btn' onClick={addTask}>
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
