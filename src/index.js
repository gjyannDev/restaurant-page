import "./style/style.css";
import "./style/modernize.css";
import "./style/header.css";
import HomePage from "./components/homepage";
import MenuPage from "./components/menuPage";

let mainContentContainer = document.querySelector("#contents");
let navLinks = document.querySelectorAll(".nav__links li");

if (module.hot) {
  module.hot.accept();
}

//Default content
mainContentContainer.appendChild(HomePage())

navLinks.forEach((item) => {
  item.addEventListener("click", function () {
    mainContentContainer.innerHTML = "";

    if (item.textContent === "Home") {
      mainContentContainer.appendChild(HomePage());
    } else if (item.textContent === "Menu") {
      mainContentContainer.appendChild(MenuPage());
    } else {
      // mainContentContainer.appendChild();
    }
  });
});
