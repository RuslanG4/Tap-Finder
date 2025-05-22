import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./Rating";
import "./DrinksMenuStyle.css";
type DrinkOverviewProps = {
  name: string;
  filePath: string;
  ratingValue: number;
  priceValue: number;
};

const DrinkOverview: React.FC<DrinkOverviewProps> = ({
  name,
  filePath,
  ratingValue = 0,
  priceValue = 0,
}) => {
  return (
    <div className="drink-overview-container">
      <img src={filePath} alt="Image of drink" />
      <div className="drinks-details">
        <h1 className="drinkName">{name}</h1>
        <StarRating initialValue={ratingValue} />
        <div className="bottom-overview-container">
          <h2>${priceValue}</h2>
          <a className="review-link">Leave a review</a>
        {/* <Link to="/" className="review-link"></Link> */}
        </div>
      </div>
    </div>
  );
};

export default DrinkOverview;
