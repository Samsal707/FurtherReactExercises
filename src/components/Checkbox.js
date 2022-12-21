import React, { useState } from "react";

// export default function Checkbox() {
//     const [checked, setChecked] = useState(false);
//     //here the alert is blocking - it appears before rendering and blocks rendering until the user dismissed it
//     alert(`checked: ${checked.toString()}`);
//   return (
//     <>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() => setChecked(checked => !checked)}
//       />
//       {checked ? "checked" : "not checked"}
//     </>
//   )
// }


export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
    // her the alert is placed at the end - it will never execute after rendering of the component
  alert(`checked: ${checked.toString()}`);
};

