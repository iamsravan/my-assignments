import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BarGraph, UserFeed } from "./components";
import "./index.css";

function indexComponent() {
  return <h2>My Assignment </h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bar-graph/">Bar graph</Link>
            </li>
            <li>
              <Link to="/users-feed/">User Feed</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={indexComponent} />
        <Route path="/bar-graph/" component={BarGraph} />
        <Route path="/users-feed/" component={UserFeed} />
      </div>
    </Router>
  );
}

export default AppRouter;
