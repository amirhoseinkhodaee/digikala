const loadingScreen = document.querySelector(".loading-container");

setTimeout(() => {
  loadingScreen.style.display = "none";
  console.log("Loading screen hidden after 1.5 seconds");
}, 1500);
