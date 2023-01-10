let form = document.getElementById("form")

function nameValidate(input) {
    let regularExpression = /^[A-Za-z]{3,29}$/
     if (regularExpression.test(input.value)) {
        validate(input)
        return true
    } else {
        validate(input , "Name should start with an alphabet and ba at least 3 characters")
        return false
    }         
}
function passwordValidate(input) {
    let regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
     if (regularExpression.test(input.value)) {
        validate(input)
        return true
    } else {
        validate(input , "Invalid password")
        return false
    }         
}
function emailValidate(input) {
    let regularExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
     if (regularExpression.test(input.value)) {
        validate(input)
        return true
    } else {
        validate(input , "Invalid Email")
        return false
    }         
}

function validate (input , msg = "") {
    input.nextElementSibling.innerText = msg
}

form.addEventListener('input' , function(e) {
    console.log(e)
    if (e.target.id == "name") nameValidate(e.target)
    
    
    else if (e.target.id == "email") emailValidate(e.target)
    else if (e.target.id == "password") passwordValidate(e.target)
})
form.addEventListener('submit' , function(e) {
    
    if (nameValidate(e.target[0]) == false || emailValidate(e.target[1]) == false || passwordValidate(e.target[2]) == false )
    {
        e.preventDefault()
        emailValidate(e.target[1])
        passwordValidate(e.target[2])
    }
    
})


