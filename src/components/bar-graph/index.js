import React from "react";
import "./style.css";
import graphInput from "./data.json";

function BarGraph() {
  const graphValues = graphInput.data;
  return (
    <div className="bar-graph-layout">
      <h2> Bar Graph Exercise</h2>
      <ul className="bar-graph">
        {graphValues.map((data, index) => {
          return (
            <li
              className="item"
              key={`bar_${data}_${index}`}
              style={{ height: `${data * 2}px` }}
            >
              <span> {data}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BarGraph;
