document.addEventListener("DOMContentLoaded", () => {
  // Retrieve existing property data from session storage or initialize an empty array if none exists
  let propertyData = JSON.parse(sessionStorage.getItem("propertyData")) || [];

  const propertyTableBody = document.getElementById("propertyBody");

  // Function to append data to the table
  const appendData = () => {
    propertyTableBody.innerHTML = ""; // Clear previous data

    // Append data from propertyData array
    propertyData.forEach((property) => {
      appendRow(property);
    });
  };

  // Function to append a single row to the table
  const appendRow = (property) => {
    const newRow = document.createElement("tr");
    newRow.setAttribute("data-property-id", property.propertyId);

    newRow.innerHTML = `
      <td>${property.propertyId}</td>
      <td>${property.address}</td>
      <td>${property.neighborhood}</td>
      <td>${property.squarefeet}</td>
      <td>${property.parking}</td>
      <td>${property.publicTranspo}</td>
      <td>
        <button class="editPropertyBtn" data-property-id="${property.propertyId}">Edit</button>
        <button class="deleteBtn">Delete</button>
        <button class="addWorkspaceBtn" onclick="location.href='add-workspace.html?propertyId=${property.propertyId}'">Add Workspace</button>
        <button class="viewWorkspaceBtn" onclick="location.href='owner-workspace.html'">View Workspace</button>
      </td>
    `;
    propertyTableBody.appendChild(newRow);
  };

  // Handle add button click
  document.getElementById("addPropertyBtn").addEventListener("click", () => {
    window.location.href = "add-property.html";
  });

  // Event delegation for handling clicks on dynamically created buttons
  document.getElementById("propertyBody").addEventListener("click", (event) => {
    if (event.target.classList.contains("editPropertyBtn")) {
      event.preventDefault();
      const propertyId = event.target.getAttribute("data-property-id");
      const propertyToEdit = propertyData.find(
        (property) => property.propertyId.toString() === propertyId
      );
      if (propertyToEdit) {
        sessionStorage.setItem(
          "propertyToEdit",
          JSON.stringify(propertyToEdit)
        );
        // Navigate to edit page
        window.location.href = "edit-property.html";
      }
    }
  });

  // Initial data append
  appendData();
});
