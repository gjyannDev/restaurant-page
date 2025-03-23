export default function HomePage() {
  // create elements
  const homePageContainer = document.createElement("div");
  const heroSecTextContentContainer = document.createElement("div");
  const heroSecHeaderText = document.createElement("h1");
  const heroSecDescriptionText = document.createElement("p");
  const heroSecCTABtn = document.createElement("button");

  homePageContainer.setAttribute("class", "homepage__container");
  heroSecHeaderText.setAttribute("class", "hero__header");
  heroSecDescriptionText.setAttribute("class", "hero__description");
  heroSecCTABtn.setAttribute("class", "hero__cta-btn");
  heroSecTextContentContainer.setAttribute("class", "hero__tex-container");
  
  //Setting up text contents
  heroSecHeaderText.textContent =
    "Hungry? Grab a Pizza That will satisfy your tummy mummy.";
  heroSecDescriptionText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.";
  heroSecCTABtn.textContent = "Order Now";

  //Appending the created elements with contents
  heroSecTextContentContainer.appendChild(heroSecHeaderText);
  heroSecTextContentContainer.appendChild(heroSecDescriptionText);
  homePageContainer.appendChild(heroSecTextContentContainer);
  homePageContainer.appendChild(heroSecCTABtn);

  return homePageContainer;
}
