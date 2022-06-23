import React from "react";
import { Link } from "react-router-dom";
const NewsItems = ({ items }) => {
  return (
    <div className="grid">
      <div className="grid--1x2 grid--news">
        <Link to={items.to} style={{ textDecoration: "none" }}>
          <div className="">
            <img src={items.image} width="100%" />
          </div>
        </Link>
        <div className="img-details">
          <div className="sport-type">{items.sportType}</div>
          <Link to={items.to} style={{ textDecoration: "none" }}>
            <div className="headline">{items.headline}</div>
          </Link>
          <div className="match-report">{items.matchReport}</div>
          <div className="player-rating">{items.playerRating}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
