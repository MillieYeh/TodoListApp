import React from "react";

const addTask = () => {
  return (
    <div className='card card-body my-3'>
      <form>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='New Todo' />
        </div>
        <button type='submit' className='btn btn-light mt-3'></button>
      </form>
    </div>
  );
};

export default addTask;
