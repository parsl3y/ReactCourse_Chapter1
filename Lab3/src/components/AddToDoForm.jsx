function AddToDoForm({ inputValue, onInputChange, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      alert('ToDo item cannot be empty');
      return;
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToDoForm;
