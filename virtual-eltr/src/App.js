import React from "react";
import "./App.css";
import styled from "styled-components";

const Button = styled.button`
  padding: 15px;
  background-color: #4caf50;
  color: white;
  font-size: medium;
  border-style: none;
  border-radius: 15rem;
  box-shadow: 10px 10px 36px -10px rgba(0, 0, 0, 0.75);
  outline: none;
  &:active {
    background-color: #3c9f40;
  }
`;

function App() {
  return (
    <div className="bg_image">
      <div className="vert">
            <Button onClick>ENTER SITE</Button>
          </div>
      <div className="text">
        <h1>VOTE</h1>
        <h1>FOR</h1>
        <h1>YOUR</h1>
      </div>
    </div>
  );
}

export default App;
