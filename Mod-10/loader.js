function playLoader() {
  setTimeout(loader, 3000);
}

function loader() {
  document.querySelector(".loader-container").style.display = "none";
  document.querySelector(".container").style.display = "block";
}
