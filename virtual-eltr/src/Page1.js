import React from "react";
import "./page1.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Page1 = (props) => {
  const { active, setActive } = props;

  return (
    <div className="bg_image">
      <div className="vert">
        <Link to="/Login">
          <Button>ENTER SITE</Button>
        </Link>
      </div>
      <div className="texto">
        <h1>VOTE</h1>
        <h1>FOR</h1>
        <h1>YOUR</h1>
        <h1>POSITION</h1>
      </div>
    </div>
  );
};

export default Page1;
