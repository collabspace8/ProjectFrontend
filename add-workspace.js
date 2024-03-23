document.addEventListener("DOMContentLoaded", () => {
  const workspaceTableBody = document.getElementById("workspaceBody");
  const workspaceForm = document.getElementById("workspaceForm");

  // Retrieve workspace data from session storage if it exists
  let workspaceData = JSON.parse(sessionStorage.getItem("workspaceData")) || [];

  // Function to append new data to the existing table
  const appendData = (newWorkspace) => {
    const newRow = document.createElement("tr");

    // Populate the new row with data from the newWorkspace object
    newRow.innerHTML = `
      <td>${newWorkspace.propertyId}</td>
      <td>${newWorkspace.workspaceId}</td>
      <td>${newWorkspace.type}</td>
      <td>${newWorkspace.capacity}</td>
      <td>${newWorkspace.smoking}</td>
      <td>${newWorkspace.available}</td>
      <td>${newWorkspace.term}</td>
      <td>${newWorkspace.price}</td>
      <td>
        <button class="spaceeditBtn">Edit</button>
        <button class="spacedeleteBtn">Delete</button>
      </td>
    `;
    workspaceTableBody.appendChild(newRow);
  };
  // Extract propertyId from URL parameters and set it in the input field
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get("propertyId");
  if (propertyId) {
    // Check if propertyId is not null
    document.getElementById("propertyId").value = propertyId;
  }
  // Handle form submission
  workspaceForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values from the form
    const propertyId = document.getElementById("propertyId").value;
    const type = document.getElementById("type").value;
    const capacity = document.getElementById("capacity").value;
    const smoking = document.getElementById("smoking").value;
    const available = document.getElementById("available").value;
    const term = document.getElementById("term").value;
    const price = document.getElementById("price").value;

    // Construct a new workspace object
    const newWorkspace = {
      propertyId: propertyId,
      workspaceId: workspaceData.length + 5, // Generate unique ID for the new workspace
      type: type,
      capacity: capacity,
      smoking: smoking,
      available: available,
      term: term,
      price: price,
    };

    // Add the new workspace to the workspaceData array
    workspaceData.push(newWorkspace);

    // Save the updated workspaceData array to session storage
    sessionStorage.setItem("workspaceData", JSON.stringify(workspaceData));

    // Append the new workspace to the table
    appendData(newWorkspace);

    // Clear form fields
    workspaceForm.reset();
  });

  // Handle save button click
  document.getElementById("saveWorkspaceBtn")?.addEventListener("click", () => {
    window.location.href = "owner-workspace.html";
  });

  // Handle back button click
  document.getElementById("back").addEventListener("click", () => {
    window.location.href = "owner-property.html";
  });

  // Append existing workspace data to the table on initial load
  workspaceData.forEach((workspace) => {
    appendData(workspace);
  });
});
