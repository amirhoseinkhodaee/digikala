const loadingScreen = document.querySelector(".loading-container");

setTimeout(() => {
  loadingScreen.style.display = "none";
  console.log("Loading screen hidden after 2 seconds");
}, 2000);
