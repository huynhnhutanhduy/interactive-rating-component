const button = document.querySelector(".rating-submit");
const card = document.querySelector(".card");
const thank = document.querySelector(".thank-you");
const option = document.querySelectorAll(".rating-item");
const result = document.querySelector(".rating-result");
[...option].forEach(
  (item) =>
    function () {
      if (item.style.backgroundColor === "hsl(217, 12%, 63%)") console.log(item.textContent);
      //   result.firstElementChild = item.textContent;
    }
);
button.addEventListener("click", function () {
  card.style.display = "none";
  thank.style.display = "block";
});
