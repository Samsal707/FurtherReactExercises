import React from "react";
import { render } from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json";
import StarRating from "./components/StarRating"


render([<Menu recipes={data} />, <StarRating totalStars={5} />], document.getElementById("root"));
