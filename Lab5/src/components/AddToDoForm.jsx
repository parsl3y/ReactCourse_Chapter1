import React, { useState } from 'react';

function AddToDoForm({ inputValue, onInputChange, onSubmit }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      alert('ToDo item cannot be empty');
      return;
    }
    onSubmit(isCompleted); 
    setIsCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
        <label>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)} 
          />
          {isCompleted ? 'Completed   ' : 'Not Completed   '}
        </label>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Add new ToDo"
      />
        <button id="addbtn" type="submit">
        Add
      </button>
    </form>
  );
}

export default AddToDoForm;
