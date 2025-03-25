import PizzaOne from "/src/assets/peperoni.png"

function createCard(title, description, priceInfo, price, pizzaImage, imageLoc) {
  //create elements
  const cardContainer = document.createElement("div");
  const priceContainerOne = document.createElement("div");
  const priceContainerTwo = document.createElement("div");
  const textContainer = document.createElement("div");
  const priceContainer = document.createElement("div");
  const textContentContainer = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardDes = document.createElement("p");
  const cardPriceInfoOne = document.createElement("p");
  const cardPriceInfoTwo = document.createElement("p");
  const cardPriceOne = document.createElement("p");
  const cardPriceTwo = document.createElement("p");
  const pizzaImg = document.createElement("img");

  cardContainer.setAttribute("class", "card__container");
  cardTitle.setAttribute("class", "card__title");
  cardDes.setAttribute("class", "card__description");
  cardPriceInfoOne.setAttribute("class", "card__price-info-1");
  cardPriceInfoTwo.setAttribute("class", "card__price-info-2");
  cardPriceOne.setAttribute("class", "card__price-1");
  cardPriceTwo.setAttribute("class", "card__price-2");
  priceContainerOne.setAttribute("class", "price__container-1");
  priceContainerTwo.setAttribute("class", "price__container-2");
  textContainer.setAttribute("class", "text__container");
  priceContainer.setAttribute("class", "price__container");
  textContentContainer.setAttribute("class", "text__content-container");

  cardTitle.textContent = title;
  cardDes.textContent = description;
  cardPriceInfoOne.textContent = priceInfo[0];
  cardPriceInfoTwo.textContent = priceInfo[1];
  cardPriceOne.textContent = price[0];
  cardPriceTwo.textContent = price[1];
  pizzaImg.src = pizzaImage;
  pizzaImg.alt = "Pizza Image";
  pizzaImg.style.width = "200px";
  pizzaImg.style.height = "200px";
  pizzaImg.style.objectFit = "cover"

  textContainer.appendChild(cardTitle);
  textContainer.appendChild(cardDes);
  priceContainerOne.appendChild(cardPriceInfoOne);
  priceContainerOne.appendChild(cardPriceOne);
  priceContainerTwo.appendChild(cardPriceInfoTwo);
  priceContainerTwo.appendChild(cardPriceTwo);
  priceContainer.appendChild(priceContainerOne);
  priceContainer.appendChild(priceContainerTwo);
  (imageLoc === "left") && cardContainer.appendChild(pizzaImg);
  textContentContainer.appendChild(textContainer);
  textContentContainer.appendChild(priceContainer);
  cardContainer.appendChild(textContentContainer);
  (imageLoc === "right") && cardContainer.appendChild(pizzaImg);

  return cardContainer;
}

export default function MenuPage() {
  //create elements
  const menuPageContainer = document.createElement("div");
  const menuContainer = document.createElement("div");
  const menuHeaderText = document.createElement("h2");

  //Setting attributes for the elements
  menuPageContainer.setAttribute("class", "menu__page-container");
  menuContainer.setAttribute("class", "menu__container");
  menuHeaderText.setAttribute("class", "menu__text");

  //Setting up text contents
  menuHeaderText.textContent = "Pizza Menu";

  //Appending content to the div
  menuContainer.appendChild(
    createCard(
      "Peperoni Pizza",
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ["Big Size", "Small Size"],
      ["399", "299"],
      PizzaOne,
      "right",
    )
  );
  menuPageContainer.appendChild(menuHeaderText);
  menuPageContainer.appendChild(menuContainer);

  return menuPageContainer;
}
