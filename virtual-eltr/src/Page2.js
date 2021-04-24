import React from "react";
import { Link } from "react-router-dom";
import Votingto from "./Votingto";

import "./Page2.css";

const Page2 = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>VOTE FOR YOUR</h2>
        <Link to="/">
          <button onClick={handleLogout}>Logout</button>
        </Link>
      </nav>
      <p className="imgup"></p>
      <article className="image1">
        <aside className="imgright"></aside>

        
      </article>
      <Link to="/Votingto">
          <p className="texting2">Click here for voting</p>
        </Link>
    </section>
  );
};

export default Page2;
