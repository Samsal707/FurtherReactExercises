import React, { useState } from "react";

export default function Checkbox() {
    const [checked, setChecked] = useState(false);
    //here the alert is blocking - it appears before rendering and blocks rendering until the user dismissed it
    alert(`checked: ${checked.toString()}`);
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}
