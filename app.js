const button = document.querySelector(".rating-submit");
const card = document.querySelector(".card");
const thank = document.querySelector(".thank-you");
const option = document.querySelectorAll(".rating-item");
const result = document.querySelector(".rating-result");
[...option].forEach((item) =>
  item.addEventListener("click", function () {
    result.firstElementChild.textContent = item.textContent;
  })
);
button.addEventListener("click", function () {
  card.style.display = "none";
  thank.style.display = "block";
});
