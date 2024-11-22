import React from "react";

const FilterBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="filter-box"
    />
  );
};

export default FilterBox;
