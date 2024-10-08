import React from 'react';
import ListItems from './ListItems.jsx';
import "../App.css";

function ToDoList({ toDoList, onDelete, onUpdate }) {
  return (
    <div>
      {toDoList.length === 0 ? (
        <p>No data to display</p>
      ) : (
        <ul>
          {toDoList.map((item) => (
            <ListItems
              key={item.id}
              item={item}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
