import "./style.css";

const dropDowns = document.querySelectorAll(".drop-down");

dropDowns.forEach((dropDown) => {
  const label = dropDown.querySelector(".drop-down-label");
  const content = dropDown.querySelector(".drop-down-content");

  label.addEventListener("click", () => {
    content.classList.toggle("hidden");
  });

  dropDown.addEventListener("focusout", (event) => {
    if (!dropDown.contains(event.relatedTarget)) {
      content.classList.add("hidden");
    }
  });
});
