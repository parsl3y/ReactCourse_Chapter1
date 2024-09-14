function SearchBar({ searchItem, onSearchChange }) {
    return (
      <input
        type="text"
        placeholder="Search..."
        value={searchItem}
        onChange={onSearchChange}
      />
    );
  }
  
  export default SearchBar;
  