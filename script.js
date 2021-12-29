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














