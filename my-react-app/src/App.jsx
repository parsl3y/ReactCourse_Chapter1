import React, { useState } from "react";
import Container from "./components/UserContainer";
import "./App.css"

const App = () => {

  return (
    <div className="App">
      <h2>Users from API</h2>
      <Container />
    </div>
  );
};

export default App;
