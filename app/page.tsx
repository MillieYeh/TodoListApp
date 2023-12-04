"use client";
import { useState } from "react";
import { ITask } from "./interface";

export default function Home() {
  const [tasks, setTasks] = useState<any>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleInputChange = (e: any) => {
    setTasks(e.target.value);
  };

  const addTask = (): void => {
    const newTask = {
      taskName: tasks,
    };
    setTodoList([...todoList, newTask]);
    setTasks("");
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <div>
          <input
            className='border border-gray-400 mr-2 px-4 py-2 flex-grow'
            type='text'
            name='task'
            placeholder=''
            value={tasks}
            onChange={handleInputChange}
          />
          <button className='btn' onClick={addTask}>
            Add
          </button>
          <div>
            <ul>
              {tasks?.map((task: any, index: any) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
