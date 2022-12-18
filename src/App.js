import React from "react";
import ColorList from "./components/ColorList.js";
import AddColorForm from "./components/AddColorForm";

export default function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}

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