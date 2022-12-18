
import React, { useState } from "react";
import { useInput } from "./hooks"

export default function AddColorForm({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = useState("");
  const [colorProps, resetColor] = useState("#000000");


const submit = event => {
  event.preventDefault();
  onNewColor(titleProps.value, colorProps.value);
  resetTitle();
  resetColor();
};

  return (
  <form onSubmit={submit}>
    <input
      {...titleProps}
      type="text"
      placeholder="color title..."
      required
    />
    <input {...colorProps} type="color" required />
    <button>ADD</button>
  </form>
);
}