import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Page2 from "./Page2";
import { Link } from "react-router-dom";

import "./Result.css";

const Result = ({ handleLogout }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("https://5fa5e7ad085bf700163de0f9.mockapi.io/vote").then(
      (response) => {
        console.log(response.data);

        setResults(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const totalVotesA = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesB = results
    .map((item) => item.partyB)
    .reduce((prev, curr) => prev + curr, 0);

  const data = {
    labels: ["Number 1", "Number 2"],
    datasets: [
      {
        label: "Number of Votes",
        data: [totalVotesA, totalVotesB, 0],
        backgroundColor: ["rgba(23, 133, 236, 0.9)", "rgba(224, 44, 200, 0.9)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <section className="votetobe">
      <nav>
        <h2>VOTE FOR YOUR</h2>
        <Link to="/">
          <button onClick={handleLogout}>Logout</button>
        </Link>
      </nav>
      <>
        <Bar data={data} options={options} />
      </>
    </section>
  );
};

export default Result;
