import { useState } from 'react';
import React from 'react'
import SearchBar from './SearchBar';
import AddToDoForm from './AddToDoForm';
import ToDoList from './ToDoList';
function ToDoContainer() {
    const [inputValue, setInputValue] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const [searchItem, setSearchItem] = useState('');
 
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleSearchChange = (event) => {
        setSearchItem(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setToDoList((prevState) => [
          ...prevState,
          {
            id: Math.random(),
            title: inputValue,
          }
        ]);
        setInputValue('');
      };
    
      const handleDelete = (id) => {
        setToDoList((prevState) => prevState.filter((item) => item.id !== id));
      };
    
      const filteredToDoList = toDoList.filter((item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase())
      );
  return (
    <>
    <SearchBar searchItem={searchItem} onSearchChange={handleSearchChange} className="search-bar" />
    <AddToDoForm inputValue={inputValue} onInputChange={handleInputChange} onSubmit={handleSubmit} className="add-todo-form" />
    <ToDoList toDoList={filteredToDoList} onDelete={handleDelete} className="todo-list" />
    </>
  )
}

export default ToDoContainer
