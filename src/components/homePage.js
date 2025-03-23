export default function HomePage() {
  // create elements
  const homePageContainer = document.createElement("div");
  const heroSecTextContentContainer = document.createElement("div");
  const heroSecHeaderText = document.createElement("h1");
  const heroSecDescriptionText = document.createElement("p");
  const heroSecCTABtn = document.createElement("button");

  //Adding contents on the created elements
  homePageContainer.setAttribute("class", "homepage__container");
  heroSecHeaderText.textContent =
    "Hungry? Grab a Pizza That will satisfy your tummy mummy.";
  heroSecDescriptionText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.";
  heroSecCTABtn.textContent = "Order Now";
  heroSecTextContentContainer.setAttribute("class", "hero__text-content");

  //Appending the created elements with contents
  heroSecTextContentContainer.appendChild(heroSecHeaderText)
  heroSecTextContentContainer.appendChild(heroSecDescriptionText)
  homePageContainer.appendChild(heroSecTextContentContainer)
  homePageContainer.appendChild(heroSecCTABtn)

  return homePageContainer
}
