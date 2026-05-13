// src/index.js

import "./styles.css";

import { loadHome } from "./home.js";

const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", () => {
  loadHome();
});

loadHome();
