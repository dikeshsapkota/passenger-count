function getNumbers() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    return { num1, num2 };
}

function add() {
    let { num1, num2 } = getNumbers();
    document.getElementById("sum-el").textContent = "Sum: " + (num1 + num2);
}

function subtract() {
    let { num1, num2 } = getNumbers();
    document.getElementById("sum-el").textContent = "Difference: " + (num1 - num2);
}

function multiply() {
    let { num1, num2 } = getNumbers();
    document.getElementById("sum-el").textContent = "Product: " + (num1 * num2);
}

function divide() {
    let { num1, num2 } = getNumbers();
    if (num2 === 0) {
        document.getElementById("sum-el").textContent = "Cannot divide by zero";
        return;
    }
    document.getElementById("sum-el").textContent = "Quotient: " + (num1 / num2);
}
