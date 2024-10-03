import { useState } from 'react';

const useEdit = (initialTitle) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(initialTitle);

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    if (!updatedTitle.trim()) {
      alert('ToDo item cannot be empty');
      return;
    }
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  return {
    isEditing,
    updatedTitle,
    startEditing,
    saveEdit,
    handleChange,
  };
};

export default useEdit;
