// controller function
// get string from user input
function getValue() {
    let userString = document.getElementById("userString").value;
    let reversedString = reverseString(userString);
    displayString(reversedString);
}

// logic function
// reverse the string
function reverseString(userString) {
    let reversedString = "";
    // reverse the string using a for loop
    for (let i = userString.length - 1; i >= 0; i--){
        reversedString += userString[i];
    }

    return reversedString;
}

// view function
// display the reversed string
function displayString(reversedString) {
    // insert string in the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${reversedString}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}