import React from "react";

const FetchButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="fetch-button">
      Fetch Users
    </button>
  );
};

export default FetchButton;
