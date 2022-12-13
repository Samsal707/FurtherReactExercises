import React from "react";
import { FaStar } from "react-icons/fa";

// export default function StarRating() {
//   return [
//     <FaStar color="red" />,
//     <FaStar color="red" />,
//     <FaStar color="red" />,
//     <FaStar color="grey" />,
//     <FaStar color="grey" />
//   ];
// }

const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);


const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}