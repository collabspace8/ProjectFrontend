const workspaceTableBody = document.getElementById("workspaceBody");

// Fetch the data and append to the table
fetch("http://localhost:7000/card")
  .then((response) => response.json())
  .then((cardData) => {
    appendData(cardData);
    console.log("cardData", cardData);
  });

const appendData = (cardData) => {
  workspaceTableBody.innerHTML = ""; // Clear previous data

  cardData.forEach((card) => {
    const newRow = document.createElement("tr");

    // Populate table cells with card data
    newRow.innerHTML = `
      <td>${card.id}</td>
      <td>${card.type}</td>
      <td>${card.capacity}</td>
      <td>${card.smoking}</td>
      <td>${card.available}</td>
      <td>${card.term}</td>
      <td>${card.price}</td>
      <td>
        
        <button class="spaceeditBtn">Edit</button>
        <button class="spacedeleteBtn">Delete</button>
        <button class="spacedetailBtn">Add to List</button>
        </td>
    `;

    // Add event listeners for detail, edit, and delete buttons
    newRow.querySelector(".spacedetailBtn").addEventListener("click", () => {
      // Handle detail button click
    });

    newRow.querySelector(".spaceeditBtn").addEventListener("click", () => {
      // Handle edit button click
      window.localStorage.setItem("data", JSON.stringify(card));
      window.location.href = "edit-workspace.html";
    });

    newRow.querySelector(".spacedeleteBtn").addEventListener("click", () => {
      // Handle delete button click
      deleteCard(card.id);
    });

    workspaceTableBody.appendChild(newRow);
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
  window.location.href = "add-workspace.html";
});
