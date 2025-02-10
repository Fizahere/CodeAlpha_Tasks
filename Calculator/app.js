let screen = document.getElementById('screen')
let symbolContainer = document.getElementById('symbol')

let firstValue = ''
let secondValue = ''
let symbol = ''


const setSymobol = (val) => {
    screen.innerText = ''
    symbol = val
    symbolContainer.innerText = symbol

}

const clickHandler = (value) => {
    if (!symbol) {
        firstValue += value
        screen.innerText = firstValue
    }
    if (symbol) {
        secondValue += value
        screen.innerText = secondValue
    }
}

const removeHandler = () => {
    let str = screen.innerText.substring(0, screen.innerText.length - 1)
    if (!symbol) {
        firstValue = str
    }
    if (symbol) {
        secondValue = str
    }
    screen.innerText = str
}

const clearScreenHandler = () => {
    firstValue = ''
    secondValue = ''
    symbol = ''
    symbolContainer.innerText = symbol
    screen.innerText = firstValue
}
const calulateHandler = () => {
    if (symbol == '+') {
        let total = Number(firstValue) + Number(secondValue)
        screen.innerText = total
    }
    else if (symbol == '*') {
        let total = Number(firstValue) * Number(secondValue)
        screen.innerText = total
    }
    else if (symbol == '-') {
        let total = Number(firstValue) - Number(secondValue)
        screen.innerText = total
    }
    else if (symbol == '/') {
        let total = Number(firstValue) / Number(secondValue)
        screen.innerText = total
    }
    firstValue = ''
    secondValue = ''
    symbol = ''
    symbolContainer.innerText = symbol
}