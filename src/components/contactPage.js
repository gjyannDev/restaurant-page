function contactCardInfo(contactInfoTitle, contactInfoDetails) {
  const contactInfoContainer = document.createElement("div");
  const infoTitleContainer = document.createElement("div");
  const infoDetailsContainer = document.createElement("div");
  const infoTitle = document.createElement("p");
  const infoDetails = document.createElement("p");

  contactInfoContainer.setAttribute("class", "contact__info-container");
  infoTitleContainer.setAttribute("class", "info__title-container");
  infoDetailsContainer.setAttribute("class", "info__details-container");
  infoTitle.setAttribute("class", "info__title");
  infoDetails.setAttribute("class", "info__details");

  infoTitle.textContent = contactInfoTitle;
  infoDetails.textContent = contactInfoDetails;

  infoTitleContainer.appendChild(infoTitle);
  infoDetailsContainer.appendChild(infoDetails);
  contactInfoContainer.appendChild(infoTitleContainer);
  contactInfoContainer.appendChild(infoDetailsContainer);

  return contactInfoContainer;
}

export default function ContactPage() {
  const contactPageContainer = document.createElement("div");
  const contactContentContainer = document.createElement("div");
  const contactInfoOne = document.createElement("div");
  const contactInfoTwo = document.createElement("div");
  const contactContentTextContainer = document.createElement("div");
  const contactText = document.createElement("h2");
  const contactInfoOneTitle = document.createElement("h3");
  const contactInfoTwoTitle = document.createElement("h3");

  contactPageContainer.setAttribute("class", "contact__page-container");
  contactContentContainer.setAttribute("class", "contact__content-container");
  contactInfoOne.setAttribute("class", "contact__info");
  contactInfoTwo.setAttribute("class", "contact__info");
  contactContentTextContainer.setAttribute("class", "content__text-container");
  contactText.setAttribute("class", "contact__text");
  contactInfoOneTitle.setAttribute("class", "contact__one-title");
  contactInfoTwoTitle.setAttribute("class", "contact__two-title");

  contactText.textContent = "Contact";

  contactInfoOne.appendChild(
    contactCardInfo("RESERVATION NO.", "(+63)098849284824")
  );
  contactInfoOne.appendChild(
    contactCardInfo("EMAIL", "thirdpizza24824@gmail.com")
  );
  contactInfoTwo.appendChild(
    contactCardInfo(
      "ADRESS",
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    )
  );
  contactInfoTwo.appendChild(
    contactCardInfo("TELEPHONE", "(+63) 0248828578353")
  );
  contactInfoTwo.appendChild(contactCardInfo("EMAIL", "pizzaera@gmail.com"));

  contactContentContainer.appendChild(contactText);
  contactContentTextContainer.appendChild(contactInfoOne);
  contactContentTextContainer.appendChild(contactInfoTwo);
  contactContentContainer.appendChild(contactContentTextContainer);
  contactPageContainer.appendChild(contactContentContainer);

  return contactPageContainer;
}
