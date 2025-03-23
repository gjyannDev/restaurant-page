function createCard(title, description, priceInfo, price) {
  //create elements
  const cardContainer = document.createElement("div");
  const priceContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardDes = document.createElement("p");
  const cardPriceInfo = document.createElement("p");
  const cardPrice = document.createElement("p");

  cardContainer.setAttribute("class", "card__container");
  cardTitle.setAttribute("class", "card__title");
  cardDes.setAttribute("class", "card__description");
  cardPriceInfo.setAttribute("class", "card__price-info");
  cardPrice.setAttribute("class", "card__price");

  cardTitle.textContent = title;
  cardDes.textContent = description;
  cardPriceInfo.textContent = priceInfo;
  cardPrice.textContent = price;

  textContainer.appendChild(cardTitle);
  textContainer.appendChild(cardDes);
  priceContainer.appendChild(cardPriceInfo);
  priceContainer.appendChild(cardPrice);
  cardContainer.appendChild(textContainer);
  cardContainer.appendChild(priceContainer);

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

  menuContainer.appendChild(
    createCard(
      "Peperoni",
      "Gorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Big Size",
      "399"
    )
  );

  menuPageContainer.appendChild(menuHeaderText);
  menuPageContainer.appendChild(menuContainer);

  return menuPageContainer;
}
