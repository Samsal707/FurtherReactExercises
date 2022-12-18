import React, { useContext } from "react";
import { ColorContext } from "../index";
import Color from "./Color";

export default function ColorList() {
  const { colors } = useContext(ColorContext);
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  return (
    <div className="color-list">
      {
        colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  );
}



//export default function ColorList({ colors = [], onRemoveColor = f => f }) {
//   if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

// return (
//   <div>
//     {colors.map(color =>  (
//           <Color key={color.id} {...color} onRemove={onRemoveColor} />
//     ))}
//     </div>
//   );
// *}