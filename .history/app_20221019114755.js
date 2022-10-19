const button = document.querySelector(".rating-submit");
const card = document.querySelector(".card");
const thank = document.querySelector(".thank-you");
const option = document.querySelectorAll(".rating-item");
const result = document.querySelector(".rating-result");

button.addEventListener("click", function () {
  [...option].forEach((item) =>
    item.addEventListener("click", function () {
      result.firstElementChild.textContent = item.textContent;
    })
  );
  console.log(result.firstElementChild.textContent);
  card.style.display = "none";
  thank.style.display = "block";
});
