const button = document.querySelector(".rating-submit");
const card = document.querySelector(".card");
const thank = document.querySelector(".thank-you");
const option = document.querySelectorAll(".rating-item");
const result = document.querySelector(".rating-result");
[...option].forEach((item) =>
  item.addEventListener("click", function () {
    console.log(item.style.backgroundColor === "hsl(217, 12%, 63%)");
  })
);
button.addEventListener("click", function () {
  card.style.display = "none";
  thank.style.display = "block";
});
