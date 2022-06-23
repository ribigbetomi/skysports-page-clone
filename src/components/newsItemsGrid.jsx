import { Link } from "react-router-dom";
import React from "react";

const NewsItemsGrid = ({ items }) => {
  return (
    <div className="news-grid">
      <Link to={items.to}>
        <div className="container">
          <div className="grid-image">
            <img className="grid-img" src={items.image} />
          </div>
          <div className="grid-sporttype">{items.sportType}</div>
          <div className="grid-headline">{items.headline}</div>
        </div>
      </Link>

      {/* <div className="container">
        <div className="">
          <img src={items.image} width="100%" />
        </div>
        <div className="">{items.sportType}</div>
        <div className="">{items.headline}</div>
      </div>
      <div className="container">
        <div className="">
          <img src={items.image} width="100%" />
        </div>
        <div className="">{items.sportType}</div>
        <div className="">{items.headline}</div>
      </div> */}
    </div>
  );
};

export default NewsItemsGrid;
