const target = document.querySelector(".L3eUgb");
const footer = document.querySelector(".o3j99.c93Gbe");
const header = document.querySelector("#gb");
const textTags = document.querySelectorAll("p, input, a, div, svg");
const bgSearchField = document.querySelector(".RNNXgb");
const txtArea = document.querySelector("textarea");
const searchList = document.querySelector(".aajZCb");
const inputs = document.querySelectorAll("input");

for (let i = 0; i < textTags.length; i++) {
    textTags[i].style.color = "black";
}

header.style.backgroundColor = "pink";
target.style.backgroundColor = "pink";
footer.style.backgroundColor = "pink";
bgSearchField.style.backgroundColor = "white";
txtArea.style.color = "black";
searchList.style.backgroundColor = "white";

for (let i = 0; i < textTags.length; i++) {
    inputs[i].style.backgroundColor = "white";
}