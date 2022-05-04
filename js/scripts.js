var start_btn_cost = document.getElementById("startup-cost");

start_btn.addEventListener("click", () => {
  fetch("localhost:3000/start?catch=on").then((response) =>
    alert(response.message)
  );
});

var start_btn_nesw = document.getElementById("startup-nesw");

start_btn.addEventListener("click", () => {
  fetch("localhost:3000/start?catch=on").then((response) =>
    alert(response.message)
  );
});
