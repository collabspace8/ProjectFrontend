// document.addEventListener("DOMContentLoaded", () => {
//   const workspaceToEdit = JSON.parse(sessionStorage.getItem("workspaceToEdit"));
//   if (workspaceToEdit) {
//     document.getElementById("propertyId").value = workspaceToEdit.propertyId;
//     document.getElementById("workspaceId").value = workspaceToEdit.workspaceId;
//     document.getElementById("address").value = workspaceToEdit.address;
//     document.getElementById("neighborhood").value =
//       workspaceToEdit.neighborhood;
//     document.getElementById("squarefeet").value = workspaceToEdit.squarefeet;
//     document.getElementById("parking").value = workspaceToEdit.parking;
//     document.getElementById("publicTranspo").value =
//       workspaceToEdit.publicTranspo;
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const propertyTableBody = document.getElementById("propertyBody");
//   let currentEditingRow = null; // Keeps track of the row currently being edited
//   console.log("propertyTableBody", propertyTableBody); // This should be right before the addEventListener call that's causing the problem

//   const form = document.getElementById("editForm");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent the form from submitting traditionally
//     if (!currentEditingRow) return; // Exit if there's no row selected

//     // Update the row with new values from the form
//     const updatedValues = [
//       form.propertyId.value,
//       form.address.value,
//       form.neighborhood.value,
//       form.squarefeet.value,
//       form.parking.value,
//       form.publicTranspo.value,
//     ];

//     // Assign updated values back to the table row
//     Array.from(currentEditingRow.cells).forEach((cell, index) => {
//       cell.textContent = updatedValues[index + 1];
//     });

//     // Update data in sessionStorage
//     const propertyToEdit = JSON.parse(sessionStorage.getItem("propertyToEdit"));
//     if (propertyToEdit) {
//       propertyToEdit.propertyId = updatedValues[0];
//       propertyToEdit.address = updatedValues[1];
//       propertyToEdit.neighborhood = updatedValues[2];
//       propertyToEdit.squarefeet = updatedValues[3];
//       propertyToEdit.parking = updatedValues[4];
//       propertyToEdit.publicTranspo = updatedValues[5];
//       sessionStorage.setItem("propertyToEdit", JSON.stringify(propertyToEdit));
//     }

//     form.reset(); // Reset the form after submission
//     currentEditingRow = null; // Reset the currently editing row tracker
//   });

//   // Handle update button click
//   document.getElementById("updatePropertyBtn").addEventListener("click", () => {
//     updatePropertyTable();
//   });

//   // Handle back button click
//   document.getElementById("backEdit").addEventListener("click", () => {
//     window.location.href = "owner-property.html";
//   });
//   //Update session storage

//   function updatePropertyTable() {
//     const updatedProperty = JSON.parse(
//       sessionStorage.getItem("propertyToEdit")
//     );
//     if (!updatedProperty) return;

//     // Update the properties of updatedProperty with the values from the form
//     updatedProperty.propertyId = document.getElementById("propertyId").value;
//     updatedProperty.address = document.getElementById("address").value;
//     updatedProperty.neighborhood =
//       document.getElementById("neighborhood").value;
//     updatedProperty.squarefeet = document.getElementById("squarefeet").value;
//     updatedProperty.parking = document.getElementById("parking").value;
//     updatedProperty.publicTranspo =
//       document.getElementById("publicTranspo").value;

//     // Update the row in the property table if it exists
//     const tableRow = document.querySelector(
//       `#propertyBody tr[data-propertyid="${updatedProperty.propertyId}"]`
//     );

//     if (tableRow) {
//       const cells = tableRow.querySelectorAll("td");
//       if (cells && cells.length > 5) {
//         cells[0].textContent = updatedProperty.propertyId;
//         cells[1].textContent = updatedProperty.address;
//         cells[2].textContent = updatedProperty.neighborhood;
//         cells[3].textContent = updatedProperty.squarefeet;
//         cells[4].textContent = updatedProperty.parking;
//         cells[5].textContent = updatedProperty.publicTranspo;
//       }
//     }

//     // Update data in sessionStorage
//     sessionStorage.setItem("propertyToEdit", JSON.stringify(updatedProperty));

//     // Redirect to owner-property.html page
//     window.location.href = "owner-property.html";
//   }

//   function populateForm(row) {
//     // Extract the text content of each cell and populate the form
//     const propertyId = row.querySelector("td:nth-child(1)").textContent;
//     const address = row.querySelector("td:nth-child(2)").textContent;
//     const neighborhood = row.querySelector("td:nth-child(3)").textContent;
//     const squarefeet = row.querySelector("td:nth-child(4)").textContent;
//     const parking = row.querySelector("td:nth-child(5)").textContent;
//     const publicTranspo = row.querySelector("td:nth-child(6)").textContent;

//     // Set the retrieved values into the input fields
//     document.getElementById("propertyId").value = propertyId;
//     document.getElementById("address").value = address;
//     document.getElementById("neighborhood").value = neighborhood;
//     document.getElementById("squarefeet").value = squarefeet;
//     document.getElementById("parking").value = parking;
//     document.getElementById("publicTranspo").value = publicTranspo;
//   }
// });

// // Load data from sessionStorage and update table rows on page load
// document.addEventListener("DOMContentLoaded", () => {
//   const storedPropertyToEdit = JSON.parse(
//     sessionStorage.getItem("propertyToEdit")
//   );
//   if (storedPropertyToEdit) {
//     const propertyId = storedPropertyToEdit.propertyId;
//     const tableRow = document.querySelector(
//       `#propertyBody tr[data-propertyid="${propertyId}"]`
//     );
//     if (tableRow) {
//       const cells = tableRow.querySelectorAll("td");
//       cells[0].textContent = storedPropertyToEdit.propertyId;
//       cells[1].textContent = storedPropertyToEdit.address;
//       cells[2].textContent = storedPropertyToEdit.neighborhood;
//       cells[3].textContent = storedPropertyToEdit.squarefeet;
//       cells[4].textContent = storedPropertyToEdit.parking;
//       cells[5].textContent = storedPropertyToEdit.publicTranspo;
//     }
//   }
// });
