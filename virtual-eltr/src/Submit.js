import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Submit.css";



const Page2 = ({ handleLogout }) => {

    const [loading, setLoading] = useState(false);
  const [voteForA, setVoteForA] = useState(0);
  const [voteForB, setVoteForB] = useState(0);
  const [voted, setVoted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openVoted, setOpenVoted] = useState(false);

  return (
    <div className="bg_sm">
      <section className="hero">
        <nav>
          <h2>VOTE FOR YOUR</h2>
          <Link to="/">
            <button onClick={handleLogout}>Logout</button>
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default Page2;
