function enterSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("mainContent").style.display = "flex";
  document.getElementById("bgMusic").play();

  // Contador de visitas local
  let visits = localStorage.getItem("visitCount");
  visits = visits ? parseInt(visits) + 1 : 1;
  localStorage.setItem("visitCount", visits);
  document.getElementById("visitCount").textContent = visits;
}