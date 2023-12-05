import React, { useState } from "react";
import { ITask } from "../interface";

interface TodoInputProps {
  onAddTask: (taskName: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTask }) => {
  const [tasks, setTasks] = useState<any>("");

  const handleInputChange = (e: any) => {
    setTasks(e.target.value);
  };

  const addTask = (): void => {
    onAddTask(tasks);
    setTasks("");
  };
  return (
    <div>
      {" "}
      <input
        className='border border-gray-400 mr-2 px-4 py-2 flex-grow'
        type='text'
        name='task'
        placeholder=''
        value={tasks}
        onChange={handleInputChange}
      />
      <button className='btn' onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
