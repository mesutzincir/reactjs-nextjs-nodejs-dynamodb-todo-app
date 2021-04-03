import React from "react";
import { Link } from "react-router-dom";

function TopNavBar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" style={{ marginLeft: 0 }}>
          <h1>Easy Solution Info Tech LTD.</h1>
        </Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/todolist">My Todos</Link>
          <Link to="/about">About</Link>
        </div>
        <Link
          to="/contact"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
            marginLeft: "auto",
          }}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default TopNavBar;
