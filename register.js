function $$(name){
    return document.getElementById(name);
}

// Function to register. Data will be saved on an array.
function RegisterAccount(){
    var fullname = $$('reg-fullname');
    var email = $$('reg-email');
    var phone = $$('reg-phonenumber');
    var username = $$('reg-username');
    var password = $$('reg-password');
    var acces = $$('reg-useraccess');
    var successRegister = $$('successRegister');

    var data = {
        fullname: fullname.value,
        email: email.value,
        phone: phone.value,
        username: username.value,
        password: password.value,
        acces: acces.value
    }
    var jsonString = JSON.stringify(data);
    console.log(jsonString)

    // Check if all required fields are filled
    if (fullname.value && email.value && phone.value && username.value && password.value && acces.value) {
        // Display success message
        successRegister.textContent = "Successfully Registered!";
        successRegister.style.color = "black";
        successRegister.style.display = "block";

        // Automatically remove success message after 5 seconds
        setTimeout(function() {
            successRegister.textContent = "";
            successRegister.style.display = "none";
        }, 5000);
    

    // Clear input fields
    fullname.value = "";
    email.value = "";
    phone.value = "";
    username.value = "";
    password.value = "";
    acces.selectedIndex = -1;
} else {
    // Display error message
    successRegister.textContent = "Please fill all fields!";
    successRegister.style.color = "red";
    successRegister.style.display = "block";

    // Automatically remove error message after 3 seconds
    setTimeout(function() {
        successRegister.textContent = "";
        successRegister.style.display = "none";
    }, 3000);
}
}


// Function to go back to Homepage
function RegisterCancel(){
    window.location.href = "index.html";
}
