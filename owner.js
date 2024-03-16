const cardTableBody = document.getElementById("propertyBody");

// Fetch the data and append to the table
fetch("http://localhost:7000/card")
  .then((response) => response.json())
  .then((cardData) => {
    appendData(cardData);
    console.log("cardData", cardData);
  });

const appendData = (cardData) => {
  cardTableBody.innerHTML = ""; // Clear previous data

  cardData.forEach((card) => {
    const newRow = document.createElement("tr");

    // Populate table cells with card data
    newRow.innerHTML = `
      <td>${card.id}</td>
      <td>${card.address}</td>
      <td>${card.neighborhood}</td>
      <td>${card.squarefeet}</td>
      <td>${card.parking}</td>
      <td>${card.publicTranspo}</td>
      <td>${card.price}</td>
      <td>
       
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
         <button class="detailBtn">Add to List</button>
      </td>
    `;

    // Add event listeners for detail, edit, and delete buttons
    newRow.querySelector(".detailBtn").addEventListener("click", () => {
      // Handle detail button click
    });

    newRow.querySelector(".editBtn").addEventListener("click", () => {
      // Handle edit button click
      window.localStorage.setItem("data", JSON.stringify(card));
      window.location.href = "edit.html";
    });

    newRow.querySelector(".deleteBtn").addEventListener("click", () => {
      // Handle delete button click
      deleteCard(card.id);
    });

    cardTableBody.appendChild(newRow);
  });
};

// Handle delete button click
const deleteCard = (id) => {
  fetch("http://localhost:7000/card/" + id, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => {
      appendData(data);
    });
};
// Handle add button click
document.getElementById("add").addEventListener("click", () => {
  window.location.href = "add.html";
});
