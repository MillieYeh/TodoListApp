"use client";
import { useState } from "react";
import { ITask } from "./interface";
import TodoInput from "./components/TodoInput";

export default function Home() {
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const addTask = (taskName: string, id: any): void => {
    const newTask = {
      id: id,
      taskName: taskName,
    };
    setTodoList([...todoList, newTask]);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <div>
          <TodoInput onAddTask={addTask} />
          <div>
            <TodoList />;
          </div>
        </div>
      </div>
    </main>
  );
}
