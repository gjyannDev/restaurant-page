import "./style/style.css";
import "./style/modernize.css";
import "./style/header.css";
import HomePage from "./components/homepage";

let mainContentContainer = document.querySelector("#contents");
let navLinks = document.querySelectorAll(".nav__links li");

navLinks.forEach((item) => {
  item.addEventListener("click", function () {
    mainContentContainer.innerHTML = "";

    if (item.textContent === "Home") {
      mainContentContainer.appendChild(HomePage());
    } else if (item.textContent === "Menu") {
      alert("Removed everything");
    } else {
      mainContentContainer.appendChild();
    }
  });
});
