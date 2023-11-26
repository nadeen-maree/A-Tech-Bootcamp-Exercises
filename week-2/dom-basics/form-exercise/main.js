
const btn = document.getElementById("btn");
const userName = document.getElementById("name-input");
const desiredSalary = document.getElementById("desired-salary-input");
const birthday = document.getElementById("birthday-input");
const phone = document.getElementById("phone-input");

const errorMsg = document.createElement("p")
errorMsg.setAttribute("id", "errorMsg")
errorMsg.style.color = "red"
document.getElementById("container").appendChild(errorMsg)

const container = document.getElementById("container");

const welcomePage = document.createElement("div")
welcomePage.setAttribute("id", "welcomePage")
document.body.appendChild(welcomePage)



btn.onClick = function(){
    Validate()
}

const Validate = function(){
    let nameVal = userName.value
    let desiredSalaryVal = desiredSalary.value
    let birthdayVal = birthday.value
    let phoneVal = phone.value
    let isValidName = true
    let isValidSalary = true
    let isValidBirthdate = true
    let isValidPhone = true

    if(nameVal == ""){
        errorMsg.innerHTML = "name is missing"
        isValidName = false

    }else if(nameVal.length <= 2){
        errorMsg.innerHTML = "The name should be longer than 2 charcters"
        isValidName = false
    }

    if(desiredSalaryVal == ""){
        errorMsg.innerHTML = "salary is missing"
        isValidSalary = false

    }else if(parseInt(desiredSalaryVal) < 10000 || parseInt(desiredSalaryVal) > 16000){
        errorMsg.innerHTML = "Salary must be greater than 10,000 and less than 16,000"
        isValidSalary = false
    }

    if(birthdayVal == ""){
        errorMsg.innerHTML = "birthdate is missing"
        isValidBirthdate = false
    }

    if(phoneVal == ""){
        errorMsg.innerHTML = "phone number is missing"
        isValidPhone = false

    }else if(phoneVal.length != 10){
        errorMsg.innerHTML = "phone number  must be 10 digits long"
        isValidPhone = false
    }

    if(isValidName && isValidSalary && isValidBirthdate && isValidPhone){
        container.style.display = "none"
        welcomePage.innerHTML = `Welcome ${nameVal}!`
    }
}