import React from 'react';
import useEdit from '../Hooks/useEdit';
import "../App.css";

function ToDoItems({ item, onDelete, onUpdate }) { 
  //Lifting State Up  | Controlled Component | Conditional Rendering | Callback Pattern
  const { isEditing, updatedTitle, startEditing, saveEdit, handleChange } = useEdit(item.title);

  const handleSave = () => {
    if (updatedTitle.trim()) {
      onUpdate(item.id, updatedTitle);
    }
    saveEdit();
  };

  return (
    <li>
      <input type="radio" checked={item.completed} readOnly />
      {isEditing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={handleChange}
        />
      ) : (
        item.title
      )}
      <div id="ToDoItems">
        {isEditing ? (
          <button id="SaveBtn" onClick={handleSave}>Save</button>
        ) : (
          <button id="EditBtn" onClick={startEditing}>Update</button>
        )}
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </li>
  );
}

export default ToDoItems;
