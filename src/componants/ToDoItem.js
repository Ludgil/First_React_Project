import React from "react";

export default function ToDoItem({ toDo, handleDelete }) {
  if (toDo.length === 0) {
    return <h3>There is no task to do ! you lazy piece of ***</h3>;
  }
  return (
    <div>
      {toDo.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
