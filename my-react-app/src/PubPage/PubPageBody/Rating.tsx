import React, { useState } from 'react';
import { Star } from 'lucide-react';
import "./StarRatingStyle.css"

type StarRatingProps = {
  totalStars?: number;
  initialValue?: number;
  onChange?: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialValue = 0,
  onChange,
}) => {
  const [rating, setRating] = useState(initialValue);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  return (
    <div className="flex cursor-pointer star-rating-container">
      {Array.from({ length: totalStars }, (_, i) => {
        const index = i + 1;
        const isFilled = hoveredStar ? index <= hoveredStar : index <= rating;
        return (
          <Star
            key={index}
            className={`w-6 h-6 transition-colors ${
              isFilled ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill={isFilled ? 'currentColor' : 'none'}
            // onMouseEnter={() => setHoveredStar(index)}
            // onMouseLeave={() => setHoveredStar(null)}
            // onClick={() => handleClick(index)}
          />
        );
      })}
      <h2>{rating}</h2>
    </div>
  );
};

export default StarRating;
