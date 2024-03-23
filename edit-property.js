document.addEventListener("DOMContentLoaded", () => {
  let propertyToEdit = JSON.parse(sessionStorage.getItem("propertyToEdit"));
  let propertyData = JSON.parse(sessionStorage.getItem("propertyData"));

  // Function to populate the edit form fields with data from session storage
  const populateFormFields = () => {
    document.getElementById("propertyId").value = propertyToEdit.propertyId;
    document.getElementById("address").value = propertyToEdit.address;
    document.getElementById("neighborhood").value = propertyToEdit.neighborhood;
    document.getElementById("squarefeet").value = propertyToEdit.squarefeet;
    document.getElementById("parking").value = propertyToEdit.parking;
    document.getElementById("publicTranspo").value =
      propertyToEdit.publicTranspo;
  };

  // Populate the form fields initially
  populateFormFields();

  const form = document.getElementById("editForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Update the table row with new values from the form
    const updatedValues = [
      form.propertyId.value,
      form.address.value,
      form.neighborhood.value,
      form.squarefeet.value,
      form.parking.value,
      form.publicTranspo.value,
    ];

    // Find the index of the property to edit in propertyData array
    const index = propertyData.findIndex(
      (property) => property.propertyId === propertyToEdit.propertyId
    );

    if (index !== -1) {
      // Update the property in propertyData array
      propertyData[index] = {
        propertyId: updatedValues[0],
        address: updatedValues[1],
        neighborhood: updatedValues[2],
        squarefeet: updatedValues[3],
        parking: updatedValues[4],
        publicTranspo: updatedValues[5],
      };

      // Update data in sessionStorage with the updated propertyData
      sessionStorage.setItem("propertyData", JSON.stringify(propertyData));

      // Redirect to the owner-property.html page
      window.location.href = "owner-property.html";
    } else {
      console.log("Can't locate the property in propertyData array.");
    }
  });

  // Handle back button click
  document.getElementById("backEdit").addEventListener("click", () => {
    // Redirect to the owner-property.html page
    window.location.href = "owner-property.html";
  });
});
