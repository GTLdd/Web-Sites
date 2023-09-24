var nameCheck = false;
var phoneCheck = false;


var usernameContainer = document.querySelector(".username")
var phoneContainer = document.querySelector(".phone")

var userInput = usernameContainer.querySelector("#username")
var phoneInput = phoneContainer.querySelector("#phone")

var usernameLabel = usernameContainer.querySelector(".usernameLabel")
var phoneLabel = phoneContainer.querySelector(".phoneLabel")

var userIcon = usernameContainer.querySelector("#usernameIcon")
var phoneIcon = phoneContainer.querySelector("#phoneIcon")


userInput.addEventListener("keyup", function(){
    var enteredName = userInput.value

    if(enteredName == ""){
        usernameLabel.style.visibility = "visible"
        userIcon.style.visibility="hidden"
         nameCheck = false;
    }else{
        userIcon.style.visibility="visible"
        usernameLabel.style.visibility = "hidden"
         nameCheck = true;
    }
})


phoneInput.addEventListener("keyup", function(){
    var enteredPhone = phoneInput.value

    if(enteredPhone == ""){
        phoneLabel.style.visibility= "visible"
        phoneIcon.style.visibility = "hidden"
        phoneLabel.textContent = "Please enter your Mobile number here"
         phoneCheck = false;

    }else if(enteredPhone.length != 10){
        phoneLabel.textContent = "Please enter 10 Digit Mobile number here"
        phoneLabel.style.visibility = "visible"
        phoneIcon.style.visibility = "hidden"
        phoneCheck = false;

    }else{
        phoneIcon.style.visibility = "visible"
        phoneLabel.style.visibility= "hidden"
         phoneCheck = true;
    }
})


var submitBtn = document.getElementById("submitBtn")
var notification = document.querySelector(".notification")

submitBtn.addEventListener("click", function(event){
    event.preventDefault()

    if(nameCheck == true && phoneCheck == true){
        notification.style.top = "10px"
        notification.style.opacity = "1"
        notification.style.background = "#61A4B3"
        notification.style.color = "#141B29"
        notification.textContent = "Form Submitted successfully"
        
    }else{
        notification.style.top = "10px"
        notification.style.opacity = "1"
        notification.style.background = "red"
        notification.style.color = "white"
        notification.textContent = "Please fill the forms"
    }
    setTimeout(function()
    {
        notification.style.top = "-60px"
        notification.style.opacity = "0"   
    }, 
    1200)

 
})