const buttons = document.querySelectorAll("button");

const toggleTab = (event) => {
  console.log(event.target);
  const clickedBtn = event.target;
  const selectedTabNumber = clickedBtn.dataset.button;
  const currentActiveBtn = document.querySelectorAll("button.active")[0];
  const currentActiveTab = document.querySelectorAll("div.in-use")[0];
  const newSelectedTab = document.querySelectorAll(
    `[data-tab="${selectedTabNumber}"]`
  )[0];

  console.log(newSelectedTab);
  currentActiveBtn.classList.remove(`active`);
  currentActiveTab.classList.remove(`in-use`);
  clickedBtn.classList.add(`active`);
  newSelectedTab.classList.add(`in-use`);
};

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", toggleTab);
});
