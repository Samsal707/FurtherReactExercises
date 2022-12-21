// import React from "react";
// import ColorList from "./components/ColorList.js";
// import AddColorForm from "./components/AddColorForm";
// import Checkbox from "./components/Checkbox.js";

// export default function App() {
//   return (
//     <>
//       <AddColorForm />
//       <ColorList />
//       <Checkbox />
//     </>
//   );
// }

// export default function App() {
//   const [colors, setColors] = useState(colorData);
//   return (
//     <ColorList
//       colors={colors}
//       onRemoveColor={id => {
//         const newColors = colors.filter(color => color.id !== id);
//         setColors(newColors);
//       }}
//     />
//   );
// }

import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [val, set] = useState("kevin");
  
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  });

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
    console.log(val)
  });

   useEffect(() => {
    console.log(phrase);
    console.log(val)
  });

  return (
    <>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}
