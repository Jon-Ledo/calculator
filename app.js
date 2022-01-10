const output = document.querySelector('.output')
const btns = document.querySelectorAll('.btn')

let str = ""
let value1 = ""
let value2 = ""
let flag = ""

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const button = e.target

    // check if number is clicked
    if (button.classList.contains('num')) {
      // check if string includes decimal
      let decimalCheck = str.includes('.')
      if (!decimalCheck) {
        str = str + button.textContent
        output.textContent = str
      } else if (decimalCheck && button.textContent !== '.') {
        str = str + button.textContent
        output.textContent = str
      }
    }

    // non-number btns
    if (button.textContent === "reset") {
      reset()
    }
    if (button.textContent === "del") {
      del()
    }

    // check the operator
    if (button.classList.contains('operator')) {
      value1 = str
      str = ""
      flag = button.textContent
    }

    // calculate final number
    if (button.textContent === "=") {
      value2 = str
      str = ""
      calc(value1, value2)
    }
  })
})

// functions
function reset () {
  str = ""
  output.textContent = str
}
function del () {
  const newString = str.slice(0, -1)
  str = newString
  output.textContent = str
}
function calc (value1, value2) {
  if (flag === "+") {
    add(value1, value2)
  }
  if (flag === "-") {
    minus(value1, value2)
  }
  if (flag === "x") {
    multiply(value1, value2)
  }
  if (flag === "/") {
    divide(value1, value2)
  }
}

function add (a, b) {
  if (a && b) {
    const sum = +a + +b
    output.textContent = sum
  }
}
function minus (a, b) {
  if (a && b) {
    const remainder = +a - +b
    output.textContent = remainder
  }
}
function multiply (a, b) {
  if (a && b) {
    const product = +a * +b
    output.textContent = product
  }
}
function divide (a, b) {
  if (a && b) {
    const quotient = +a / +b
    output.textContent = quotient
  }
}



const setting1 = document.querySelector('.setting1')
const setting2 = document.querySelector('.setting2')
const setting3 = document.querySelector('.setting3')

setting1.addEventListener('click', () => {
  setting2.classList.remove('show')
  setting3.classList.remove('show')
  setting1.classList.add('show')
})
setting2.addEventListener('click', () => {
  setting1.classList.remove('show')
  setting3.classList.remove('show')
  setting2.classList.add('show')
})
setting3.addEventListener('click', () => {
  setting1.classList.remove('show')
  setting2.classList.remove('show')
  setting3.classList.add('show')
})