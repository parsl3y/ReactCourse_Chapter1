import React, { useState } from 'react';
import ToDoItem from '../ToDoFolder/ToDoItems';
import "../App.css";

function ToDoList({ toDoList, onDelete, onUpdate }) {
  //List Rendering | Callback Pattern | Key Prop for Lists

  return (
    <ul>
      {toDoList.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
