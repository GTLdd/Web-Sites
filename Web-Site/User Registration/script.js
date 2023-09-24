//setting fields to check inputs are entered or not
var nameCheck = false;
var phoneCheck = false;

//selecting containers
var usernameContainer = document.querySelector(".username")
var phoneContainer = document.querySelector(".phone")

//Selecting Icons
var usernameIcon = usernameContainer.querySelector("i")
var phoneIcon = phoneContainer.querySelector("i")

//selecting labels
var usernameLabel = usernameContainer.querySelector("label")
var phoneLabel = phoneContainer.querySelector("label")

//selecting input Box
var usernameInput = document.getElementById("username")
var phoneInput = document.getElementById("phone")

//store username value


usernameInput.addEventListener("keyup", function(){

    var enteredValue = usernameInput.value

    if(enteredValue == ""){
        usernameLabel.style.visibility= "visible"
        usernameIcon.style.visibility = "hidden"
        nameCheck = false
    }else{
        usernameLabel.style.visibility= "hidden"
        usernameIcon.style.visibility = "visible"
        nameCheck = true

    }
})


// store phone number value

phoneInput.addEventListener("keyup", function(){
    var enteredPhoneNum = phoneInput.value

    if(enteredPhoneNum ==""){
        phoneLabel.style.visibility = "visible"
        phoneIcon.style.visibility = "hidden"
        phoneLabel.textContent = "Please enter your Phone number here"
        phoneCheck = false

    }else if(enteredPhoneNum.length != 10){
        phoneLabel.style.visibility = "visible"
        phoneIcon.style.visibility = "hidden"
        phoneLabel.textContent = "Please enter 10 digit numbers"
        phoneCheck = false

    }else{
        phoneIcon.style.visibility = "visible"
        phoneLabel.style.visibility = "hidden"
        phoneCheck = true

    }
})


//selecting submit buttons
var submitInput = document.querySelector("#submitButton")
var popup = document.querySelector(".popup")

submitInput.addEventListener("click", function(event){
    
    event.preventDefault()

    if(nameCheck==true && phoneCheck == true){
        popup.style.top = "10px"
        popup.style.opacity = "1"
        popup.textContent = "Form submitted successfully"
        popup.style.background = "#61a4b3"
        usernameInput.value = ""
        phoneInput.value = ""


        // Settimeout for this line to run after 3s
        // Set timeout  (What should happen, after how many ms)

        

    }else{
        popup.style.top = "10px"
        popup.style.opacity = "1"
        popup.textContent = "Please fill the forms"
        popup.style.background = "#f73131"

        
    }

        setTimeout(function()
        {
        popup.style.top = "-40px"
        popup.style.opacity = "0"
        },
        1200)
    

    
})
