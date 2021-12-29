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










