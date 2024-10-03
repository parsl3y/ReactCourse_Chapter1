import React, { useState } from 'react';
import ToDoItem from './ToDoItems.jsx';
import "../App.css";

function ToDoList({ toDoList, onDelete, onUpdate }) {
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
