const button = document.querySelector(".rating-submit");
const card = document.querySelector(".card");
const thank = document.querySelector(".thank-you");
const option = document.querySelectorAll(".rating-item");
const result = document.querySelector(".rating-result")
button.addEventListener("click", function () {
    [...option].forEach(item => function () {
      if(item.style.backgroundColor === "hsl(217, 12%, 63%)")
  })
    card.style.display = "none";
  thank.style.display = "block";
});
