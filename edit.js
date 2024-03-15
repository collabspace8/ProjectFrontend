document.addEventListener("DOMContentLoaded", function () {
  let card = JSON.parse(window.localStorage.getItem("data"));

  document.getElementById("address").value = card.address;
  document.getElementById("neighborhood").value = card.neighborhood;
  document.getElementById("squarefeet").value = card.squarefeet;
  document.getElementById("parking").value = card.parking;
  document.getElementById("publicTranspo").value = card.publicTranspo;
  document.getElementById("price").value = card.price;

  document
    .getElementById("editForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let updateCard = {
        address: document.getElementById("address").value,
        neighborhood: document.getElementById("neighborhood").value,
        squarefeet: document.getElementById("squarefeet").value,
        parking: document.getElementById("parking").value,
        publicTranspo: document.getElementById("publicTranspo").value,
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
          window.location.href = "owner-property.html";
        });
    });
});
