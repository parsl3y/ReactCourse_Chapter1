import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList';

function App() {
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
    <div>
      <SearchBar searchItem={searchItem} onSearchChange={handleSearchChange} />
      <AddToDoForm inputValue={inputValue} onInputChange={handleInputChange} onSubmit={handleSubmit} />
      <ToDoList toDoList={filteredToDoList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
