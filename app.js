const icon = document.querySelector("#icon");
const icons = document.querySelector(".icons");
const icons1 = document.querySelector(".icons-1");
const icons2 = document.querySelector(".icons-2");

icon.onclick = () => {
  icon.classList.toggle("filled");
};

icons.onclick = () => {
  icons.classList.toggle("filled");
};

icons1.onclick = () => {
  icons1.classList.toggle("filled");
};

icons2.onclick = () => {
  icons2.classList.toggle("filled");
};