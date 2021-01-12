import React, { useState } from "react";

export default function ToDoForm({ toDo, setToDo }) {
  const [newToDo, setNewToDo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newToDo) {
      const addToDo = [newToDo, ...toDo];
      setToDo(addToDo);
      setNewToDo("");
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='form-control'>
        <label htmlFor='todo'>Add To do</label>
        <input
          type='text'
          name='todo'
          id='todo'
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
