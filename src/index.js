import React from "react";
import { render } from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json";
import StarRating from "./components/StarRating"
import App from "./App"


render([<Menu recipes={data} />, <StarRating totalStars={5} />, <App />], document.getElementById("root"));
