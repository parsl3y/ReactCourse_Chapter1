function AddToDoForm({ inputValue, onInputChange, onSubmit }) {
    return (
      <form onSubmit={onSubmit}>
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
  