const button = document.querySelector(".rating-submit");
const card = document.querySelector(".card");
const thank = document.querySelector(".thank-you");
button.addEventListener("click", function () {
  card.style.display = "none";
  thank.style.display = "block";
});
