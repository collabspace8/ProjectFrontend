const cardTableBody = document.getElementById("cardBody");

// Fetch the data and append to the table
fetch("http://localhost:7000/card")
  .then((response) => response.json())
  .then((data) => {
    appendData(data);
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
        <button class="detailBtn">Detail</button>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
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

// const cardTableBody = document.getElementById("cardBody");

// const appendData = (cardData) => {
//   // Clear previous data
//   cardTableBody.innerHTML = "";

//   cardData.forEach((card) => {
//     const newRow = document.createElement("tr");

//     // Populate table cells with card data
//     newRow.innerHTML = `
//       <td>${card.id}</td>
//       <td>${card.address}</td>
//       <td>${card.neighborhood}</td>
//       <td>${card.squarefeet}</td>
//       <td>${card.parking}</td>
//       <td>${card.publicTranspo}</td>
//       <td>${card.price}</td>
//       <td>
//         <button id="detail_${card.id}">Detail</button>
//         <button id="edit_${card.id}">Edit</button>
//         <button id="delete_${card.id}">Delete</button>
//       </td>
//     `;

//     // Add event listeners for detail, edit, and delete buttons
//     newRow.querySelector(`#detail_${card.id}`).addEventListener("click", () => {
//       toggleDetail(newRow, card);
//     });

//     newRow.querySelector(`#edit_${card.id}`).addEventListener("click", () => {
//       window.localStorage.setItem("data", JSON.stringify(card));
//       window.location.href = "edit.html";
//     });

//     newRow.querySelector(`#delete_${card.id}`).addEventListener("click", () => {
//       deleteCard(card.id);
//     });

//     cardTableBody.appendChild(newRow);
//   });
// };

// const toggleDetail = (row, card) => {
//   // Check if the detail row already exists
//   const detailRow = row.nextElementSibling;
//   if (detailRow && detailRow.classList.contains("detail-row")) {
//     // If the detail row exists, remove it
//     detailRow.remove();
//   } else {
//     // If the detail row doesn't exist, create and append it
//     const detailRow = document.createElement("tr");
//     detailRow.classList.add("detail-row");
//     detailRow.innerHTML = `
//       <td colspan="8">
//         <h4>Address: ${card.address}</h4>
//         <h4>Neighborhood: ${card.neighborhood}</h4>
//         <h4>Square Feet: ${card.squarefeet}</h4>
//         <h4>Parking: ${card.parking}</h4>
//         <h4>Public Transportation: ${card.publicTranspo}</h4>
//         <h4>Price: ${card.price}</h4>
//       </td>
//     `;
//     row.after(detailRow);
//   }
// };

// const deleteCard = (id) => {
//   fetch("http://localhost:7000/card/" + id, { method: "DELETE" })
//     .then((response) => response.json())
//     .then((data) => {
//       appendData(data);
//     });
// };

// document.getElementById("add").addEventListener("click", () => {
//   window.location.href = "add.html";
// });
