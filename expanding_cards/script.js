const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

const removeActiveClass = () => {
  panels.forEach((panel) => panel.classList.remove("active"));
};