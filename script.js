const btnContainer = document.querySelector('#btnContainer')
const btnContStyle = getComputedStyle(btnContainer)
const numFilter = '1234567890.'

/* get the width and height from Styles for button container */
let btnContWidth = parseFloat(btnContStyle.width
                    .split('')
                    .filter((char) => numFilter.includes(char))
                    .join(''))
let btnContHeight = parseFloat(btnContStyle.height
                    .split('')
                    .filter((char) => numFilter.includes(char))
                    .join(''))
