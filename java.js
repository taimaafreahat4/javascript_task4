alert("JavaScript is working");

function submitOrder(){


let username = document.getElementById("username").value;

let password = document.getElementById("password").value;

let phone = document.getElementById("phone").value;

let order = document.getElementById("order").value;



// Username Regex

let usernameRegex = /^\S+$/;


// Password Regex

let passwordRegex = /^(?=.*\d).{8,}$/;


// Phone Regex

let phoneRegex = /^07\d{8}$/;



if(!usernameRegex.test(username)){

    alert("Username cannot be empty or contain spaces");
    return;

}



if(!passwordRegex.test(password)){

    alert("Password must be 8 characters and contain a number");
    return;

}



if(!phoneRegex.test(phone)){

    alert("Phone must start with 07 and contain 10 digits");
    return;

}



// Display Welcome

document.getElementById("welcome").innerHTML =
"Welcome, " + username;



// Local Storage

localStorage.setItem("order", order);



// Session Storage

sessionStorage.setItem("username", username);



// Display saved data

document.getElementById("savedOrder").innerHTML =
"Saved Order: " + localStorage.getItem("order");


document.getElementById("savedUsername").innerHTML =
"Saved Username: " + sessionStorage.getItem("username");


}