const workspaceData = [
  {
    propertyId: 1,
    workspaceId: 1,
    type: "Office Room",
    capacity: 15,
    smoking: "No",
    available: "30-04-2024",
    term: " 12 Months",
    price: "2000",
    contactInfo: "dakisleochico@gmail.com",
  },
  {
    propertyId: 2,
    workspaceId: 2,
    type: "Meeting Room",
    capacity: 10,
    smoking: "Yes",
    available: "30-03-2024",
    term: "6 Months",
    price: "1500",
  },
  {
    propertyId: 3,
    workspaceId: 3,
    type: "Study Room",
    capacity: 5,
    smoking: "Yes",
    available: "20-03-2024",
    term: "4 Weeks",
    price: "800",
  },
  {
    propertyId: 4,
    workspaceId: 4,
    type: "Cubicle Space",
    capacity: 3,
    smoking: "No",
    available: "25-03-2024",
    term: "5 Days",
    price: "500",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const propertyTableBody = document.getElementById("propertyBody");

  // Function to append data to the table
  const appendData = () => {
    propertyTableBody.innerHTML = ""; // Clear previous data

    // Append the initial data from propertyData array
    propertyData.forEach((property) => {
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
      propertyTableBody.appendChild(newRow);
      // Attach event listener to the "Add Workspace" button in this row
      newRow.querySelector(".addWorkspaceBtn").addEventListener("click", () => {
        const propertyId = property.propertyId;
        console.log("Property ID:", propertyId);
        // Perform actions with the propertyId as needed
        // For example, redirect to the add workspace page with the propertyId in the URL
        window.location.href = `add-workspace.html?propertyId=${propertyId}`;
      });
    });

    // Retrieve existing property data from session storage
    const storedPropertyData =
      JSON.parse(sessionStorage.getItem("propertyData")) || [];

    // Append data from session storage (last row)
    storedPropertyData.forEach((property) => {
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
      propertyTableBody.appendChild(newRow);
    });
  };

  // Handle add button click
  document
    .getElementById("addPropertyBtn")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("addWorkspaceBtn")) {
        console.log("ID ", propertyId);
        if (propertyId) {
          const propertyId = event.target.getAttribute("propertyId");
          document.getElementById("propertyId").value = propertyId; // Set propertyId in the hidden input field
          console.log("ID ", propertyId);
        }
      }
      window.location.href = "add-property.html";
    });

  // Event delegation for handling clicks on dynamically created buttons
  document.getElementById("propertyBody").addEventListener("click", (event) => {
    if (event.target.classList.contains("editPropertyBtn")) {
      // Prevent default action if it's an anchor or button meant to navigate
      event.preventDefault();

      const propertyId = event.target.getAttribute("data-property-id");
      const propertyToEdit = propertyData.find(
        (property) => property.propertyId.toString() === propertyId
      );

      if (propertyToEdit) {
        // Store the property data in session storage
        sessionStorage.setItem(
          "propertyToEdit",
          JSON.stringify(propertyToEdit)
        );
        // Navigate to edit page
        window.location.href = "edit-property.html";
      }
    }
  });

  // Function to update the corresponding table row with the new property data
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

  // Initial data append
  appendData();
});
