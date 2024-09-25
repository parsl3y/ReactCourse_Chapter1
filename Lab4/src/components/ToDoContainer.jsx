import { useEffect, useState } from 'react';
import React from 'react';
import SearchBar from './SearchBar';
import AddToDoForm from './AddToDoForm';
import ToDoList from './ToDoList';
import useFetch from '../Hooks/useFetch';

function ToDoContainer() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (data) {
      setToDoList(data);
      setIsLoading(false);
    }
  }, [data]);

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
    setToDoList((data) => [
      ...data,
      {
        id: Math.random(),
        title: inputValue,
        completed: completed, 
      },
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
      <SearchBar searchItem={searchItem} onSearchChange={handleSearchChange}  />
      <AddToDoForm inputValue={inputValue} onInputChange={handleInputChange} onSubmit={handleAddToDo} />
      <ToDoList toDoList={filteredToDoList} onDelete={handleDelete} />
      {isLoading && <div>Loading...</div>}
    </>
  );
}

export default ToDoContainer;
