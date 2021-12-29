// Clear Output
function clearOutput(){
    document.getElementById("outputResult").innerHTML = ""
}
// Clear Input
function clearInput(){
    document.getElementById("inputValue").value = ""
}
// Show Ouput
function showOutput(outputResult){
    document.getElementById("outputResult").innerHTML += outputResult
}
// Input Value
function inputValue(){
    return document.getElementById("inputValue").value
}
// Toastify Error
function error(innerText){
    Toastify({
        text : innerText,
        duration : 3000,
        newWindow : true,
        close : true,
        gravity : "top",
        position : "center",
        stopOnFocus : true,
        style : {
            background : "#ad5389",
        },
        onclick : function() {} 
    })
    .showToast();
}
var number = "25.1234"
document.getElementById("originalNumberBox").innerHTML = "<h2>" + number + "</h2>"
// Round A Number
function roundNumber(){
    clearOutput()
    let number = document.getElementById("inputValue").value
    if(!number){
        error("Please enter a floating point number.")
        return
    }
    let roundTheNumber = Math.round(number)
    let html = "<h1>" + roundTheNumber + "</h1>"
    showOutput(html)
}
// Ceil a Number
function ceilNumber(){
    clearOutput()
    let number = document.getElementById("inputValue").value
    if(!number){
        error("Please type a floating point number. ")
        return
    }
    let ceilTheNumber = Math.ceil(number)
    let html = "<h1>" + ceilTheNumber + "</h1>"
    showOutput(html)
}
// Floor A Number
function floorNumber(){
    clearOutput()
    let number = document.getElementById("inputValue").value
    if(!number){
        error("Please type a floating point number. ")
        return
    }
    let floorTheNumber = Math.floor(number)
    let html = "<h1>" + floorTheNumber + "</h1>"
    showOutput(html)
}
// Generate Random Number
function generateNumber(){
    clearOutput()
    let number = Math.random()
    let html = "<h1>" + number + "</h1>"
    showOutput(html)
}
// Throw Dice
function throwDice(){
    clearOutput()
    let number = Math.random()
    number = (number * 6) + 1
    let dice = Math.floor(number)
    let html = 'Dice Value: <br> <h1 style= "color: green;">"' + dice + '"</h1>' 
    showOutput(html)
}
// Generating Strong Password
function generatePassword(){
    clearOutput()
    let length = document.getElementById("inputValue").value
    if(!length){
        error("Please type a number to generate strong password.")
        return
    }
    let string = ""
    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let symbols = "+-/?<>+,\!@.#$_'%^&*"
    let possibleString = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols
    for(let i = 0; i < length; i++){
        let randomNumber = Math.random()
        string += possibleString.charAt(Math.floor(randomNumber * possibleString.length))
    }
    let html = '<h5 style= "color:green;">' + string + '</h5>Password is strongly generated<br>and it\'s length is: ' + length + ''
    showOutput(html)
}
// Converting String
function convertingString(){
    clearOutput()
    let num = document.getElementById("inputValue").value
    if(!num){
        error("Please enter the number in input field.")
        return
    }
    //num = parseFloat(num)
    num = parseInt(num)
    //num = Number(num)
    let html = "<h1> " + num + "</h1>"
    showOutput(html)
}







