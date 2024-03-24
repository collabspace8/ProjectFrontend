document.addEventListener("DOMContentLoaded", () => {
  let workspaceToEdit = JSON.parse(sessionStorage.getItem("workspaceToEdit"));
  let propertyWorkspaceData = JSON.parse(
    sessionStorage.getItem("propertyWorkspaceData")
  );

  // Function to populate the edit form fields with data from session storage
  const populateFormFields = () => {
    // Check if workspaceToEdit and propertyWorkspaceData are valid
    if (
      workspaceToEdit &&
      propertyWorkspaceData &&
      propertyWorkspaceData[workspaceToEdit.propertyId]
    ) {
      const workspace = propertyWorkspaceData[workspaceToEdit.propertyId].find(
        (ws) => ws.workspaceId === workspaceToEdit.workspaceId
      );

      // Populate form fields with workspace data
      if (workspace) {
        document.getElementById("propertyId").value =
          workspaceToEdit.propertyId;
        document.getElementById("workspaceId").value =
          workspaceToEdit.workspaceId;
        document.getElementById("type").value = workspace.type;
        document.getElementById("capacity").value = workspace.capacity;
        document.getElementById("smoking").value = workspace.smoking;
        document.getElementById("available").value = workspace.available;
        document.getElementById("term").value = workspace.term;
        document.getElementById("price").value = workspace.price;
      } else {
        console.error("Workspace not found in propertyWorkspaceData.");
      }
    } else {
      console.error("Invalid workspaceToEdit or propertyWorkspaceData.");
    }
  };

  // Populate the form fields initially
  populateFormFields();

  const form = document.getElementById("editForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Extract updated values directly from the form elements
    const updatedWorkspace = {
      workspaceId: form.workspaceId.value,
      type: form.type.value,
      capacity: form.capacity.value,
      smoking: form.smoking.value,
      available: form.available.value,
      term: form.term.value,
      price: form.price.value,
    };

    // Assuming workspaceToEdit contains propertyId and workspaceId of the workspace to be edited
    if (workspaceToEdit && propertyWorkspaceData[workspaceToEdit.propertyId]) {
      // Find the workspace and update it within the propertyWorkspaceData
      const workspaces = propertyWorkspaceData[workspaceToEdit.propertyId];
      const workspaceIndex = workspaces.findIndex(
        (ws) =>
          ws.workspaceId.toString() === workspaceToEdit.workspaceId.toString()
      );

      if (workspaceIndex !== -1) {
        workspaces[workspaceIndex] = updatedWorkspace;
        sessionStorage.setItem(
          "propertyWorkspaceData",
          JSON.stringify(propertyWorkspaceData)
        );

        // Redirect back to the workspace overview page
        window.location.href = "owner-workspace.html";
      } else {
        console.error("Workspace not found.");
      }
    } else {
      console.error("Invalid workspaceToEdit data.");
    }
  });

  // Handle back button click
  document.getElementById("backEdit").addEventListener("click", () => {
    // Redirect to the owner-property.html page
    window.location.href = "owner-workspace.html";
  });
});
