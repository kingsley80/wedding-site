import React, { useState } from "react";

import ReactStars from "react-rating-stars-component";

const StarRating = () => {
  const [rating, setRating] = useState(1);

  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };

  return (
    <div classNames="text-2xl">
      <ReactStars
        name="rate5"
        starCount={5}
        value={5}
        onStarClick={onStarClick}
      />
      {/* <p>Rating: {rating}</p> */}
    </div>
  );
};

export default StarRating;
