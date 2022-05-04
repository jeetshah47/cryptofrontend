var start_btn_cost = document.getElementById("startup-cost");

start_btn.addEventListener("click", () => {
  fetch("https://cryptobackendindia.herokuapp.com//start").then((response) =>
    alert(response.message)
  );
});

var start_btn_nesw = document.getElementById("startup-nesw");

start_btn.addEventListener("click", () => {
  fetch("https://cryptobackendindia.herokuapp.com//news").then((response) =>
    alert(response.message)
  );
});
