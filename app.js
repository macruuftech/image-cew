let view = document.querySelector("#view");
let image = document.querySelector("#image");

view.src = "view.jpg";

image.addEventListener("change", () => {
  view.src = URL.createObjectURL(image.files[0]);
});
