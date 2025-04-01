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


let createBtns = () => {
    let i = 0
    while (i < 20) {
        let btn = document.createElement('div')
        btn.classList.add(`btn${i}`)
        btn.setAttribute('style', `background: grey; width: ${btnContWidth/6}px; height: ${btnContHeight/7}px; border-radius: 5px;`)
        btnContainer.appendChild(btn)
        i++
    }
}

createBtns()
console.log(btnContWidth, btnContHeight)