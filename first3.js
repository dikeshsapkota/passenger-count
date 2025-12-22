const img = document.getElementById("img");

img.addEventListener("mouseover", () => {
  img.style.transform = "scale(1.2)";
  img.style.transition = "transform 0.3s ease"; // smooth animation
});

img.addEventListener("mouseout", () => {
  img.style.transform = "scale(1)";
});
