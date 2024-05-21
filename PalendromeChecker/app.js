const typedValue = document.getElementById("inputBox")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = inputBox.value
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("yes")
    } else {
        alert("no")
    }

    typedValue.value = ""
}