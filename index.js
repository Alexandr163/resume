const getElement = document.querySelector(".info-text");
console.log(getElement);
const newParagraph = document.createElement("p");
newParagraph.textContent = "Прохожу курс Junior Frontend Developer в школе Result School, поставил перед собой цель работать в IT";
getElement.append(newParagraph);