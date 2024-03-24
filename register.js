function $$(name){
    return document.getElementById(name);
}

//Function to register.  Data will be saved on an array.
function RegisterAccount(){
    var fullname = $$('reg-fullname');
    var email = $$('reg-email');
    var phone = $$('reg-phonenumber');
    var username = $$('reg-username');
    var password = $$('reg-password');
    var acces = $$('reg-useraccess');

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

    fullname.value = "";
    email.value = "";
    phone.value = "";
    username.value = "";
    password.value = "";
    acces.selectedIndex = -1;
}

//Function to go back to Homepage
function RegisterCancel(){
    window.location.href = "index.html";
}




