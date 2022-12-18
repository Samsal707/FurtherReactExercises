import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import colors from "./data/color-data";
import data from "./data/recipes.json";
import Menu from "./components/Menu";
import StarRating from "./components/StarRating";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const ColorContext = createContext();



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <Menu recipes={data} />
        <StarRating totalStars={5} />
    <ColorContext.Provider value={{ colors }}>
        <App />
    </ColorContext.Provider>
  </React.StrictMode>
);

reportWebVitals();