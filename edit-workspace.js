document.addEventListener("DOMContentLoaded", () => {
  const workspaceForm = document.getElementById("editWorkspaceForm");

  // Retrieve workspace data from session storage if it exists
  const propertyWorkspaceData =
    JSON.parse(sessionStorage.getItem("propertyWorkspaceData")) || {};

  // Retrieve workspace data to edit from session storage
  const workspaceToEdit = JSON.parse(sessionStorage.getItem("workspaceToEdit"));

  // Populate form fields with data from workspaceToEdit
  if (workspaceToEdit) {
    document.getElementById("editPropertyId").value =
      workspaceToEdit.propertyId;
    document.getElementById("editWorkspaceId").value =
      workspaceToEdit.workspaceId;
    document.getElementById("editType").value = workspaceToEdit.type;
    document.getElementById("editCapacity").value = workspaceToEdit.capacity;
    document.getElementById("editSmoking").value = workspaceToEdit.smoking;
    document.getElementById("editAvailable").value = workspaceToEdit.available;
    document.getElementById("editTerm").value = workspaceToEdit.term;
    document.getElementById("editPrice").value = workspaceToEdit.price;
  }

  // Handle form submission for editing workspace
  workspaceForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values from the form
    const propertyId = document.getElementById("editPropertyId").value;
    const workspaceId = document.getElementById("editWorkspaceId").value;
    const type = document.getElementById("editType").value;
    const capacity = document.getElementById("editCapacity").value;
    const smoking = document.getElementById("editSmoking").value;
    const available = document.getElementById("editAvailable").value;
    const term = document.getElementById("editTerm").value;
    const price = document.getElementById("editPrice").value;

    // Retrieve existing workspace data for the current property ID
    const workspaceData = propertyWorkspaceData[propertyId] || [];

    // Find the index of the workspace to edit
    const workspaceIndex = workspaceData.findIndex(
      (ws) => ws.workspaceId === workspaceId
    );

    // Update the workspace object
    if (workspaceIndex !== -1) {
      workspaceData[workspaceIndex] = {
        propertyId: propertyId,
        workspaceId: workspaceId,
        type: type,
        capacity: capacity,
        smoking: smoking,
        available: available,
        term: term,
        price: price,
      };

      // Update the propertyWorkspaceData object
      propertyWorkspaceData[propertyId] = workspaceData;

      // Save the updated propertyWorkspaceData object to session storage
      sessionStorage.setItem(
        "propertyWorkspaceData",
        JSON.stringify(propertyWorkspaceData)
      );

      // Redirect back to the workspace overview page
      window.location.href = "owner-workspace.html";
    } else {
      console.error("Workspace not found for editing.");
    }
  });
});
