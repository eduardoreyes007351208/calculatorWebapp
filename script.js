const btnContainer = document.querySelector('#btnContainer')
const bottomScreenText = document.querySelector('#bottomScreenText')

/* initiate variables */
let filter = '1234567890.'
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
let allClear = () => {
    value1 = 0
    bottomScreenText.textContent = value1
    inputArray.length = 0
    numArray.length = 0
}

/* function to save num input */
let numInput = (value) => {
    numArray.push(value)
    let temp = numArray.join('')
    value1 = parseFloat(temp)
    bottomScreenText.textContent = value1
}

/* event handler */
btnContainer.addEventListener('click', (btn) => {
    let btnValue = btn.target.value
    let op = null
    if (filter.includes(btnValue)) {
        numInput(btnValue)
    } else {
        switch (btnValue) {
            case '+':
                bottomScreenText.textContent = '+'
                op = addFunction
                break
            case '-':
                bottomScreenText.textContent = '-'
                op = subtractFunction
                break
            case '*':
                bottomScreenText.textContent = "*"
                op = multiplyFunction
                break
            case '/':
                bottomScreenText.textContent = "/"
                op = divideFunction
                break
            case 'clear':
                op = allClear
                break
            default:
                op = equalFunction
                break
        }
        
        if (op == allClear) {
            allClear()
        } else if (op != equalFunction) {
            inputArray.push(value1)
            inputArray.push(op)
            value1 = 0
            numArray = []
        } else {
            inputArray.push(value1)
            inputArray.push(op)
            let num1 = inputArray[0]
            let num2 = inputArray[2]
            let op1 = inputArray[1]
            let equal = inputArray[3]
            let result = equal(num1, num2, op1)

            bottomScreenText.textContent = result
            value1 = 0
            numArray=[]
            inputArray=[]
        }
        
    }
})
