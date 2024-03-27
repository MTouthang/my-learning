import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

const StartRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (getCurrentIndex: number) => {
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex: number) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        return (
          <FaStar
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          ></FaStar>
        );
      })}
    </div>
  );
};

export default StartRating;
