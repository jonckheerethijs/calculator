let first = ""
let second = ""
let operation = ""

const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operator")
const equalsButton = document.getElementById("equals")
const clearButton = document.getElementById("all-clear")
const backspaceButton = document.getElementById("backspace")
const pointButton = document.getElementById("dot")
const lastOperationScreen = document.getElementById("result")
const currentOperationScreen = document.getElementById("user-input")

window.addEventListener("keydown", handleKeyboardInput)
equalsButton.addEventListener("click", evaluate)
clearButton.addEventListener("click", clear)
backspaceButton.addEventListener("click", backspace)
pointButton.addEventListener("click", addPoint)

function handleKeyboardInput(e) {
    console.log(`Key ${e.key} pressed!`)
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === ".") addPoint()
    if (e.key === "Backspace") backspace()
    if (e.key === "Delete" || e.key === "Escape") clear()
    if (e.key === "=" || e.key === "Enter") evaluate()
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" || e.key === ":") operate(e.key)
}

function appendNumber(number){
    currentOperationScreen.textContent += number
}

function addPoint(){
    currentOperationScreen.textContent += "."
}

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function operate(operation, first, second) {
    return window[operation](first, second)
}

console.log(operate("subtract", 1, 6))
