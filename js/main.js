// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

let btn = document.getElementById("submit-button");
let fn = document.getElementById("fullname");
let em = document.getElementById("email");
let msg = document.getElementById("msg");
let emailFormat = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

// Declare variable that will 
// store regular expression for email
   
// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

function handleForm() {
       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors

    var formData = {
        
    };

    var error = [];


    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.

    if (fn.value !== "") {
        formData.fn = fn.value;
    } else {
        error.push("Please enter your full name");
    }


    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.

    if (em.value) {
        
        if (emailFormat.test(em.value)) {
            formData.em = em.value;
            } else {
              error.push("Email is invalid"); 
            }
    } else {
        error.push("Please enter email");
    }
    
  
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.

    if (msg.value !== "") {
        formData.msg = msg.value;
    } else {
        error.push("Please enter your message")
    }


    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
        
    if(error.length > 0) {
        console.log(error);
    } else {
        console.log(formData);
        msg.value = "";
        em.value = "";
        fn.value = "";
    }

    
        
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.

// Close your function here
}
// Register your form to "click" event.

btn.addEventListener("click", handleForm);