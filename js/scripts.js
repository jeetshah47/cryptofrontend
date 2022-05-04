var start_btn = document.getElementById("startup");

start_btn.addEventListener("click", () => {
  fetch("localhost:3000/start?catch=on").then((response) =>
    alert(response.message)
  );
});
