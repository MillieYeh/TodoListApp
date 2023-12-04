"use client";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <div>
          <input
            className='border border-gray-400 mr-2 px-4 py-2 flex-grow'
            type='text'
            placeholder=''
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className='btn' onClick={handleAddTodo}>
            Add
          </button>
          <div>
            <ul>
              {todos.map((todo: any, index: any) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
