cardContainer.classList.add("card-container");

//creating card image element
const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image");

cardImageElement.setAttribute("src", "https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20plan%20to%20Holiday%20in%202021.jpg");

cardImageElement.setAttribute(")alt", "travel-card");
cardContainer.appendChild(cardImageElement);

//creating card text element
const cardTextElement = document.createElement("span");
cardTextElement.innerText= "The journey of a thousand miles begins with a single step";

cardContainer.appendChild(cardTextElement);
parentElement.appendChild(cardContainer);