document.addEventListener("DOMContentLoaded", () => {
  const propertyTableBody = document.getElementById("propertyBody");

  // Function to append data to the table
  const appendData = () => {
    // Append the initial data from propertyData array
    propertyData.forEach((property) => {
      const newRow = createTableRow(property);
      propertyTableBody.appendChild(newRow);
    });
  };

  // Function to create a table row
  const createTableRow = (property) => {
    const newRow = document.createElement("tr");
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
        <button class="addWorkspaceBtn" onclick="location.href='add-workspace.html'">Add Workspace</button>
        <button class="viewWorkspaceBtn" onclick="location.href='owner-workspace.html'">View Workspace</button>
      </td>
    `;

    // Attach event listener to the "Edit" button in this row
    newRow.querySelector(".editPropertyBtn").addEventListener("click", () => {
      const propertyId = property.propertyId;
      console.log("Property ID:", propertyId);
      // Store the property data in session storage
      sessionStorage.setItem("propertyToEdit", JSON.stringify(property));
      // Navigate to edit page
      window.location.href = "edit-property.html";
    });

    return newRow;
  };

  // Initial data append
  appendData();
});

document.addEventListener("DOMContentLoaded", () => {
  // Retrieve property data from session storage
  const propertyToEdit = JSON.parse(sessionStorage.getItem("propertyToEdit"));
  if (propertyToEdit) {
    // Populate the input fields with the stored property data
    document.getElementById("propertyId").value = propertyToEdit.propertyId;
    document.getElementById("address").value = propertyToEdit.address;
    document.getElementById("neighborhood").value = propertyToEdit.neighborhood;
    document.getElementById("squarefeet").value = propertyToEdit.squarefeet;
    document.getElementById("parking").value = propertyToEdit.parking;
    document.getElementById("publicTranspo").value =
      propertyToEdit.publicTranspo;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("editForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Update data in session storage with the new values from the form
    const updatedProperty = {
      propertyId: form.propertyId.value,
      address: form.address.value,
      neighborhood: form.neighborhood.value,
      squarefeet: form.squarefeet.value,
      parking: form.parking.value,
      publicTranspo: form.publicTranspo.value,
    };
    sessionStorage.setItem("propertyToEdit", JSON.stringify(updatedProperty));

    // Redirect to owner-property.html page
    window.location.href = "owner-property.html";
  });
});

// Function to update the corresponding table row with the new property data
document.addEventListener("DOMContentLoaded", () => {
  const updatedProperty = JSON.parse(sessionStorage.getItem("propertyToEdit"));
  if (updatedProperty) {
    // Find the corresponding table row and update its content
    const tableRow = document.querySelector(
      `#propertyBody tr[data-property-id="${updatedProperty.propertyId}"]`
    );
    if (tableRow) {
      const cells = tableRow.querySelectorAll("td");
      cells[0].textContent = updatedProperty.propertyId;
      cells[1].textContent = updatedProperty.address;
      cells[2].textContent = updatedProperty.neighborhood;
      cells[3].textContent = updatedProperty.squarefeet;
      cells[4].textContent = updatedProperty.parking;
      cells[5].textContent = updatedProperty.publicTranspo;
    }
  }
});
