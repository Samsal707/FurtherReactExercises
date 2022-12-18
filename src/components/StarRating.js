import React, {useState} from "react";
import Star from "./Star";


const createArray = length => [...Array(length)];

export default function StarRating({ style = {}, totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: "5px", ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}




// export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
//   return (
//     <>
//       {createArray(totalStars).map((n, i) => (
//         <Star
//           key={i}
//           selected={selectedStars > i}
//         />
//       ))}
//       <p>
//         {selectedStars} of {totalStars} stars
//       </p>
//     </>
//   );
// }


// export default function StarRating({ totalStars = 5 }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return (
//     <>
//       {createArray(totalStars).map((n, i) => (
//         <Star
//           key={i}
//           selected={selectedStars > i}
//           onSelect={() => setSelectedStars(i + 1)}
//         />
//       ))}
//       <p>
//         {selectedStars} of {totalStars} stars
//       </p>
//     </>
//   );
// }