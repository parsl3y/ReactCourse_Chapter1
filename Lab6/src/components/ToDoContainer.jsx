import React, { useState } from 'react';
import SearchBar from './SearchBar';
import AddToDoForm from './AddToDoForm';
import ToDoList from './ToDoList';
import '../App.css';
import useGetAllToDo from '../Hooks/useGetAllToDo';
import Loading from './Loading';

function ToDoContainer() { 
  const [inputValue, setInputValue] = useState('');
  const [searchItem, setSearchItem] = useState('');
  
  const { isLoading, data: toDoList, setData } = useGetAllToDo(); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleAddToDo = (completed) => {
    if (!inputValue.trim()) {
      alert('ToDo item cannot be empty');
      return;
    }
    const newToDo = {
      id: Math.random(),
      title: inputValue,
      completed: completed,
    };
    setData((prevData) => [...prevData, newToDo]); 
    setInputValue('');
  };

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id)); 
  };

  const handleUpdate = (id, updatedTitle) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, title: updatedTitle } : item
      )
    );
  };

  const filteredToDoList = toDoList.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <Loading isLoading={isLoading}>
      <>
        <p className="search">
          <SearchBar searchItem={searchItem} onSearchChange={handleSearchChange} />
        </p>
        <AddToDoForm inputValue={inputValue} onInputChange={handleInputChange} onSubmit={handleAddToDo} />
        <ToDoList toDoList={filteredToDoList} onDelete={handleDelete} onUpdate={handleUpdate} />
      </>
    </Loading>
  );
}

export default ToDoContainer;
