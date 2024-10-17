
let isDefaultBackground = true;
function changeBackground() {
    const section = document.getElementById("home");
    if (isDefaultBackground) {
        section.style.backgroundColor = "#f3eacb"; 
    } else {
        section.style.backgroundColor = ""; 
    }
    isDefaultBackground = !isDefaultBackground;
}
let isOriginalImage = true;
function changeImage() {
    const image = document.getElementById("profileImage");
    if (isOriginalImage) {
        image.src="images/IMG_0912.jpg"; 
    } else {
        image.src = "images/IMG_3092 2.jpg"; 
    }
    isOriginalImage = !isOriginalImage;
}

let isOriginalFontColor = true;
function changeFont() {
    const nameElement = document.getElementById("name");

    if (isOriginalFontColor) {
        nameElement.style.color = "#7C0A24"; 
        nameElement.style.fontSize = "70px"; 
    } else {
        nameElement.style.color = ""; 
        nameElement.style.fontSize = ""; 
    }
    isOriginalFontColor = !isOriginalFontColor;
}

function sortNumbers() {
    const numberInput = document.getElementById("numberInput").value;
    const order = document.getElementById("orderSelect").value;
    const resultElement = document.getElementById("sortedNumbers");

    let numbers = numberInput.split(",").map(num => num.trim());

    if (numbers.some(num => isNaN(num) || num === "")) {
        resultElement.textContent = "Enter numbers with comma";
        return;
    }

    numbers = numbers.map(Number);
    if (order === "ascending") {
        numbers.sort((a, b) => a - b);
    } else {
        numbers.sort((a, b) => b - a);
    }

    resultElement.textContent = numbers.join(", ");
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("You must type something");
        return;
    }

    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        listItem.classList.toggle("completed", checkbox.checked);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(taskText));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
}



// task 4
function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;
    let operationText;

    if (isNaN(num1) || (operation !== '√' && isNaN(num2))) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            operationText = `${num1} + ${num2} = ${result}`;
            break;
        case '-':
            result = num1 - num2;
            operationText = `${num1} - ${num2} = ${result}`;
            break;
        case '*':
            result = num1 * num2;
            operationText = `${num1} * ${num2} = ${result}`;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            operationText = `${num1} / ${num2} = ${result}`;
            break;
        case '^':
            result = Math.pow(num1, num2);
            operationText = `${num1} ^ ${num2} = ${result}`;
            break;
        case '√':
            result = Math.sqrt(num1);
            operationText = `√${num1} = ${result}`;
            break;
    }

    document.getElementById("result").innerText = operationText; 
}

function clearFields() {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("result").innerText = '';
}

// fifth task
function calculateTax() {
    const price = parseFloat(document.getElementById('price').value);
    let taxRate = 0;

    if (price > 10000) {
        taxRate = 0.25; 
    } else if (price >= 5000) {
        taxRate = 0.20; 
    } else {
        taxRate = 0.15; 
    }

    const tax = price * taxRate; 
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `For $${price.toFixed(2)}, you will pay $${tax.toFixed(2)} tax.`; 
}
