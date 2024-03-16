document.addEventListener("DOMContentLoaded", function () {
  let card = JSON.parse(window.localStorage.getItem("data"));

  document.getElementById("type").value = card.type;
  document.getElementById("capacity").value = card.capacity;
  document.getElementById("smoking").value = card.smoking;
  document.getElementById("available").value = card.available;
  document.getElementById("term").value = card.term;
  document.getElementById("price").value = card.price;

  document
    .getElementById("editFormWorkspace")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let updateCard = {
        type: document.getElementById("type").value,
        capacity: document.getElementById("capacity").value,
        smoking: document.getElementById("smoking").value,
        available: document.getElementById("available").value,
        term: document.getElementById("term").value,
        price: document.getElementById("price").value,
      };

      fetch("http://localhost:7000/card/" + card.id, {
        method: "PUT",
        body: JSON.stringify(updateCard),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          window.location.href = "owner-workspace.html";
        });
    });
});
