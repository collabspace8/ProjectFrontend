document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("editWorkspaceForm");

  // Retrieve workspace data from sessionStorage
  let propertyWorkspaceData =
    JSON.parse(sessionStorage.getItem("propertyWorkspaceData")) || {};

  // Retrieve propertyId and workspaceId from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get("propertyId");
  const workspaceId = urlParams.get("workspaceId");

  // Retrieve the selected workspace data
  const selectedWorkspace = propertyWorkspaceData[propertyId].find(
    (workspace) => workspace.workspaceId === parseInt(workspaceId)
  );

  // Populate the form fields with selected workspace data
  if (selectedWorkspace) {
    document.getElementById("propertyId").value = propertyId;
    document.getElementById("type").value = selectedWorkspace.type;
    document.getElementById("capacity").value = selectedWorkspace.capacity;
    document.getElementById("smoking").value = selectedWorkspace.smoking;
    document.getElementById("available").value = selectedWorkspace.available;
    document.getElementById("term").value = selectedWorkspace.term;
    document.getElementById("price").value = selectedWorkspace.price;
  } else {
    console.log("Workspace not found!");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve updated input values from the form
    const updatedType = document.getElementById("type").value;
    const updatedCapacity = document.getElementById("capacity").value;
    const updatedSmoking = document.getElementById("smoking").value;
    const updatedAvailable = document.getElementById("available").value;
    const updatedTerm = document.getElementById("term").value;
    const updatedPrice = document.getElementById("price").value;

    // Update the selected workspace data
    const updatedWorkspace = {
      workspaceId: selectedWorkspace.workspaceId,
      type: updatedType,
      capacity: updatedCapacity,
      smoking: updatedSmoking,
      available: updatedAvailable,
      term: updatedTerm,
      price: updatedPrice,
    };

    // Update the workspace data in sessionStorage
    propertyWorkspaceData[propertyId] = propertyWorkspaceData[propertyId].map(
      (workspace) => {
        if (workspace.workspaceId === updatedWorkspace.workspaceId) {
          return updatedWorkspace;
        }
        return workspace;
      }
    );

    // Save the updated propertyWorkspaceData object to sessionStorage
    sessionStorage.setItem(
      "propertyWorkspaceData",
      JSON.stringify(propertyWorkspaceData)
    );

    // Redirect to the owner-workspace.html page
    window.location.href = "owner-workspace.html";
  });

  // Handle back button click
  document.getElementById("backEditWorkspace").addEventListener("click", () => {
    // Redirect to the owner-workspace.html page
    window.location.href = "owner-workspace.html";
  });
});
