const propertyData = [
  {
    propertyId: 1,
    address: "123 Downtown Avenue",
    neighborhood: "Downtown",
    squarefeet: 50,
    parking: "No",
    publicTranspo: "Yes",
  },
  {
    propertyId: 2,
    address: "123 44th Street",
    neighborhood: "South East",
    squarefeet: 100,
    parking: "Yes",
    publicTranspo: "Yes",
  },
  {
    propertyId: 3,
    address: "123 32nd Street",
    neighborhood: "Norht East",
    squarefeet: 120,
    parking: "No",
    publicTranspo: "Yes",
  },
  {
    propertyId: 4,
    address: "123 7th Street",
    neighborhood: "North West",
    squarefeet: 100,
    parking: "Yes",
    publicTranspo: "No",
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
      console.log("Edit button clicked"); // Add this line for debugging
      // Prevent default action if it's an anchor or button meant to navigate

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
