const header = document.querySelector("#header");
const paragraphs = document.querySelector(".paragraph");
const button = document.querySelector("#button");

function changeContent() {
    header.textContent = "Welcome to my website";

}
function changeParagraph() {
    paragraphs.innerHTML = "Inner html changed!";
   
}