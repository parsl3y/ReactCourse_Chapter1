import React, { useState } from 'react';
import SearchBar from './SearchBar';
import AddBookToForm from './AddBookToForm';
import ToDoList from './BooksList';

function BookContainer() {
  const [toDoList, setToDoList] = useState([]);
  const [searchItem, setSearchItem] = useState('');


  const handleAddToDo = (newToDo) => {
    const newId = toDoList.length > 0 ? toDoList[toDoList.length - 1].id + 1 : 1;

    setToDoList((prevState) => [
      ...prevState,
      {
        id: newId,
        ...newToDo,
      },
    ]);
  };
  

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleUpdate = (id, updatedToDo) => {
    setToDoList((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, ...updatedToDo } : item
      )
    );
  };

  const handleDelete = (id) => {
    setToDoList((prevState) => prevState.filter((item) => item.id !== id));
  };

  const filteredToDoList = toDoList.filter(item => 
    item.firstName.toLowerCase().includes(searchItem.toLowerCase()) ||
    item.lastName.toLowerCase().includes(searchItem.toLowerCase()) ||
    item.phone.includes(searchItem)
  );

  return (
    <>
      <SearchBar searchItem={searchItem} onSearchChange={handleSearchChange} />
      <AddBookToForm onAddToDo={handleAddToDo} />
      <ToDoList toDoList={filteredToDoList} onDelete={handleDelete} onUpdate={handleUpdate} />
    </>
  );
}

export default BookContainer;
