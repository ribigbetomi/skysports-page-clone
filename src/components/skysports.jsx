import React, { Component } from "react";
import { Link } from "react-router-dom";

const Skysports = () => {
  return (
    <div className="skysports-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sky-and-sports">
          <div className="sky">sky</div>
          <div className="sports">sports</div>
        </div>
      </Link>
      <div className="sports-container">
        <div className="getskysports-container">
          <a className="getskysports">Get Sky Sports </a>
          <a className="login">Log In</a>
          <form className="search-sky">
            <input type="text" placeholder="Search Sky Sports"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Skysports;
