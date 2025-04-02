const btnContainer = document.querySelector('#btnContainer')
const screenText = document.querySelector('#screenText')
const clearBtn = document.querySelector('#clearBtn')
const plusBtn = document.querySelector('#plusBtn')
const minusBtn = document.querySelector('#minusBtn')
const multiplyBtn = document.querySelector('#multiplyBtn')
const divideBtn = document.querySelector('#divideBtn')
const equalBtn = document.querySelector('#equalBtn')
const periodBtn = document.querySelector('#periodBtn')
const zeroBtn = document.querySelector('#zeroBtn')
const oneBtn = document.querySelector('#oneBtn')
const twoBtn = document.querySelector('#twoBtn')
const threeBtn = document.querySelector('#threeBtn')
const fourBtn = document.querySelector('#fourBtn')
const fiveBtn = document.querySelector('#fiveBtn')
const sixBtn = document.querySelector('#sixBtn')
const sevenBtn = document.querySelector('#sevenBtn')
const eightBtn = document.querySelector('#eightBtn')
const nineBtn = document.querySelector('#nineBtn')
let inputArray = []
let numArray = []
let value1 = 0

/* functions for the operations */
let addFunction = (num1, num2) => {
    return num1 + num2
}
let subtractFunction = (num1, num2) => {
    return num1 - num2
}
let multiplyFunction = (num1, num2) => {
    return num1 * num2   
}
let divideFunction = (num1, num2) => {
    return num1 / num2
}
let equalFunction = (num1, num2, operation) => {
    return operation(num1, num2)
}

/* function to save num input */
let numInput = (value) => {
    numArray.push(value)
    let temp = numArray.join('')
    value1 = parseFloat(temp)
    screenText.textContent = value1
}

btnContainer.addEventListener('click', (btn) => {
    console.log(btn.target.value)
    if (btn.target.value != '') {
        numInput(btn.target.value)
        console.log(value1)
    } else {
        console.log('not num')
    }
})