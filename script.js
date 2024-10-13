const contentWrapper = document.querySelector(".contentWrapper");
const ratingCard = document.querySelector(".ratingCard");
const thanksCard = document.querySelector(".thanksCard");
const submitBtn = document.querySelector(".submitBtn");
const ratingLi = document.querySelectorAll("li");

const rating = thanksCard.querySelector(".result");

let selectedLi = null;

ratingLi.forEach((li) => {
  li.addEventListener("click", () => {
    const check = li.classList.contains("selected");

    if (selectedLi) {
      selectedLi = null;
      ratingLi.forEach((li) => li.classList.remove("selected"));
    }
    if (!check) {
      li.classList.add("selected");
      selectedLi = li;
    }
    if (check) {
      li.classList.remove("selected");
      selectedLi = null;
    }
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedLi !== undefined && selectedLi !== null) {
    rating.textContent = `You Selected ${selectedLi.innerText} Out of 5`;
    ratingCard.classList.add("hidden");
    thanksCard.classList.remove("hidden");
  } else {
    submitBtn.setAttribute("disabled", true);
    const toast = document.createElement("p");
    toast.innerText = "Please Select Rating First";
    toast.classList.add("toast");

    if (!contentWrapper.contains(toast)) {
      contentWrapper.appendChild(toast);
    }

    setTimeout(() => {
      contentWrapper.removeChild(toast);
      submitBtn.removeAttribute("disabled");
    }, 5000);
  }
});

thanksCard.addEventListener("click", () => {
  ratingCard.classList.remove("hidden");
  thanksCard.classList.add("hidden");
});
