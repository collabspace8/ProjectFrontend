document.addEventListener("DOMContentLoaded", () => {
  const workspaceTableBody = document.getElementById("workspaceBody");

  // Function to append data to the table
  const appendData = () => {
    workspaceTableBody.innerHTML = ""; // Clear previous data

    // Append the initial data from workspaceData array
    workspaceData.forEach((workspace) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${workspace.propertyId}</td>
        <td>${workspace.workspaceId}</td>
        <td>${workspace.type}</td>
        <td>${workspace.capacity}</td>
        <td>${workspace.smoking}</td>
        <td>${workspace.available}</td>
        <td>${workspace.term}</td>
        <td>${workspace.price}</td>
        <td>
          <button class="spaceeditBtn">Edit</button>
          <button class="spacedeleteBtn">Delete</button>
        </td>
      `;
      workspaceTableBody.appendChild(newRow);
      // Attach event listener to the "Add Workspace" button in this row
      newRow.querySelector(".addWorkspaceBtn").addEventListener("click", () => {
        const propertyId = workspace.propertyId;
        console.log("Property ID:", propertyId);
        // Perform actions with the propertyId as needed
        // For example, redirect to the add workspace page with the propertyId in the URL
        window.location.href = `add-workspace.html?propertyId=${propertyId}`;
      });
    });

    // Retrieve existing workspace data from session storage
    const storedWorkspaceData =
      JSON.parse(sessionStorage.getItem("workspaceData")) || [];

    // Append data from session storage (last row)
    storedWorkspaceData.forEach((workspace) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${workspace.propertyId}</td>
        <td>${workspace.workspaceId}</td>
        <td>${workspace.type}</td>
        <td>${workspace.capacity}</td>
        <td>${workspace.smoking}</td>
        <td>${workspace.available}</td>
        <td>${workspace.term}</td>
        <td>${workspace.price}</td>
        <td>
          <button class="spaceeditBtn">Edit</button>
          <button class="spacedeleteBtn">Delete</button>
        </td>
      `;
      workspaceTableBody.appendChild(newRow);
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
  document
    .getElementById("workspaceBody")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("editPropertyBtn")) {
        // Prevent default action if it's an anchor or button meant to navigate
        event.preventDefault();

        const propertyId = event.target.getAttribute("data-property-id");
        const workspaceToEdit = workspaceData.find(
          (workspace) => workspace.propertyId.toString() === propertyId
        );

        if (workspaceToEdit) {
          // Store the workspace data in session storage
          sessionStorage.setItem(
            "workspaceToEdit",
            JSON.stringify(workspaceToEdit)
          );
          // Navigate to edit page
          window.location.href = "edit-workspace.html";
        }
      }
    });

  // Function to update the corresponding table row with the new workspace data
  const updatedWorkspace = JSON.parse(
    sessionStorage.getItem("workspaceToEdit")
  );
  if (updatedWorkspace) {
    // Find the corresponding table row and update its content
    const tableRow = document.querySelector(
      `#workspaceBody tr[data-property-id="${updatedWorkspace.propertyId}"]`
    );
    if (tableRow) {
      const cells = tableRow.querySelectorAll("td");
      cells[0].textContent = updatedWorkspace.propertyId;
      cells[1].textContent = updatedWorkspace.workspaceId;
      cells[2].textContent = updatedWorkspace.type;
      cells[3].textContent = updatedWorkspace.capacity;
      cells[4].textContent = updatedWorkspace.smoking;
      cells[5].textContent = updatedWorkspace.available;
      cells[6].textContent = updatedWorkspace.term;
      cells[7].textContent = updatedWorkspace.price;
    }
  }

  // Initial data append
  appendData();
});
