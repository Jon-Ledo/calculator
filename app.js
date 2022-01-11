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

// ***** THEME 1 *****
setting1.addEventListener('click', () => {
  // add/remove the show class
  setting2.classList.remove('show')
  setting3.classList.remove('show')
  setting1.classList.add('show')
  selectedTheme = 1

  // change backgrounds
  const body = document.body
  const keypad = document.querySelector('.calculator-btns')
  const outputBackground = document.querySelector('.calculator-output')
  body.style.backgroundColor =  `var(--bgc-main-darkblue)`
  body.style.color = `var(--text-white)`
  outputBackground.style.backgroundColor = `var(--bgc-screen-darkblue)`
  outputBackground.style.color = `var(--text-white)`
  keypad.style.backgroundColor = `var(--bgc-keypad-darkblue)`
  
  // change color of keys
  const keyColor1 = document.querySelectorAll('.key-color-1')
  keyColor1.forEach((color) => {
    color.style.color = `var(--text-keys)`
    color.style.backgroundColor = `var(--key-background-orange)`
    color.style.boxShadow = `0px 3px var(--key-shadow-orange)`
  })

  const keyColor2 = document.querySelectorAll('.key-color-2')
  keyColor2.forEach((color) => {
    color.style.backgroundColor = `var(--key-background-blue)`
    color.style.boxShadow = `0px 3px var(--key-shadow-blue)`
  })

  const keyColor3 = document.querySelector('.key-color-3')
  keyColor3.style.color = `var(--text-white)`
  keyColor3.style.backgroundColor = `var(--key-background-red)`
  keyColor3.style.boxShadow = `0px 3px var(--key-shadow-red)`
})


// ***** THEME 2 *****
setting2.addEventListener('click', () => {
  // add/remove the show class
  setting1.classList.remove('show')
  setting3.classList.remove('show')
  setting2.classList.add('show')
  selectedTheme = 2

  // change backgrounds
  const body = document.body
  const keypad = document.querySelector('.calculator-btns')
  const outputBackground = document.querySelector('.calculator-output')
  body.style.backgroundColor =  `var(--bgc-main-grey)`
  body.style.color = `var(--text-keys-yellow)`
  outputBackground.style.backgroundColor = `var(--bgc-screen-lightgrey)`
  outputBackground.style.color = `var(--text-keys-yellow)`
  keypad.style.backgroundColor = `var(--bgc-keypad-greyred)`
  
  // change color of keys
  const keyColor1 = document.querySelectorAll('.key-color-1')
  keyColor1.forEach((color) => {
    color.style.color = `var(--text-keys)`
    color.style.backgroundColor = `var(--key-background-yellow)`
    color.style.boxShadow = `0px 3px var(--key-shadow-yellow)`
  })

  const keyColor2 = document.querySelectorAll('.key-color-2')
  keyColor2.forEach((color) => {
    color.style.backgroundColor = `var(--key-background-teal)`
    color.style.boxShadow = `0px 3px var(--key-shadow-teal)`
  })

  const keyColor3 = document.querySelector('.key-color-3')
  keyColor3.style.color = `var(--text-white)`
  keyColor3.style.backgroundColor = `var(--key-background-darkOrange)`
  keyColor3.style.boxShadow = `0px 3px var(--key-shadow-darkOrange)`
})

// ***** THEME 3 *****
setting3.addEventListener('click', () => {
  // add/remove the show class
  setting1.classList.remove('show')
  setting2.classList.remove('show')
  setting3.classList.add('show')
  selectedTheme = 3

  // change backgrounds
  const body = document.body
  const keypad = document.querySelector('.calculator-btns')
  const outputBackground = document.querySelector('.calculator-output')
  body.style.backgroundColor =  `var(--bgc-main-violet)`
  body.style.color = `var(--text-yellow)`
  outputBackground.style.backgroundColor = `var(--bgc-keypad-screen-violet)`
  outputBackground.style.color = `var(--text-yellow)`
  keypad.style.backgroundColor = `var(--bgc-keypad-screen-violet)`

  // change color of keys
  const keyColor1 = document.querySelectorAll('.key-color-1')
  keyColor1.forEach((color) => {
    color.style.color = `var(--text-yellow)`
    color.style.backgroundColor = `var(--key-background-darkViolet)`
    color.style.boxShadow = `0px 3px var(--key-shadow-darkMagenta)`
  })

  const keyColor2 = document.querySelectorAll('.key-color-2')
  keyColor2.forEach((color) => {
    color.style.backgroundColor = `var(--key-background-violet)`
    color.style.boxShadow = `0px 3px var(--key-shadow-magenta)`
  })

  const keyColor3 = document.querySelector('.key-color-3')
  keyColor3.style.color = `var(--text-darkBlue)`
  keyColor3.style.backgroundColor = `var(--key-background-cyan)`
  keyColor3.style.boxShadow = `0px 3px var(--key-shadow-cyan)`

})

let selectedTheme = 1
const keyColor1 = document.querySelectorAll('.key-color-1')
const keyColor2 = document.querySelectorAll('.key-color-2')
const keyColor3 = document.querySelector('.key-color-3')

// ***** MOUSE ENTER EVENT LISTENER *****
keyColor1.forEach((btn) => {
  btn.addEventListener('mouseenter', (e) => {
    const target = e.target
    hoverEffectOnOne(selectedTheme, target)

    btn.addEventListener('mouseleave', () => {
      hoverEffectOffOne(selectedTheme, target)
    })
  })
})
keyColor2.forEach((btn) => {
  btn.addEventListener('mouseenter', (e) => {
    const target = e.target
    hoverEffectOnTwo(selectedTheme, target)

    btn.addEventListener('mouseleave', () => {
      hoverEffectOffTwo(selectedTheme, target)
    })
  })
})
keyColor3.addEventListener('mouseenter', () => {
  hoverEffectOnThree(selectedTheme)
})
keyColor3.addEventListener('mouseleave', () => {
  hoverEffectOffThree(selectedTheme)
})

// hover functions
// KEY COLOR 1
function hoverEffectOnOne (flag, target) {
  // theme 1
  if (flag === 1) {
    target.style.backgroundColor = `var(--key-shadow-orange)`
  }
  //theme 2
  if (flag === 2) {
    target.style.backgroundColor = `var(--key-shadow-yellow)`
  }
  //theme 3
  if (flag === 3) {
    target.style.backgroundColor = `var(--key-shadow-darkMagenta)`
  }
}
function hoverEffectOffOne(flag, target) {
  //theme 1
  if (flag === 1) {
    target.style.backgroundColor = `var(--key-background-orange)`
  }
  //theme 2
  if (flag === 2) {
    target.style.backgroundColor = `var(--key-background-yellow)`
  }
  //theme 3
  if (flag === 3) {
    target.style.backgroundColor = `var(--key-background-darkViolet)`
  }
}
// KEY COLOR 2
function hoverEffectOnTwo (flag, target) {
  // theme 1
  if (flag === 1) {
    target.style.backgroundColor = `var(--key-shadow-blue)`
  }
  //theme 2
  if (flag === 2) {
    target.style.backgroundColor = `var(--key-shadow-teal)`
  }
  //theme 3
  if (flag === 3) {
    target.style.backgroundColor = `var(--key-shadow-magenta)`
  }
}
function hoverEffectOffTwo(flag, target) {
  //theme 1
  if (flag === 1) {
    target.style.backgroundColor = `var(--key-background-blue)`
  }
  //theme 2
  if (flag === 2) {
    target.style.backgroundColor = `var(--key-background-teal)`
  }
  //theme 3
  if (flag === 3) {
    target.style.backgroundColor = `var(--key-background-violet)`
  }
}
// KEY COLOR 3
function hoverEffectOnThree (flag) {
  //theme 1
  if (flag === 1) {
    keyColor3.style.backgroundColor = `var(--key-shadow-red)`
  }
  // theme 2
  if (flag === 2) {
    keyColor3.style.backgroundColor = `var(--key-shadow-darkOrange)`
  }
  // theme 3
  if (flag === 3) {
    keyColor3.style.backgroundColor = `var(--key-shadow-cyan)`
  }
}
function hoverEffectOffThree (flag) {
  // theme 1
  if (flag === 1) {
    keyColor3.style.backgroundColor = `var(--key-background-red)`
  }
  // theme 2
  if (flag === 2) {
    keyColor3.style.backgroundColor = `var(--key-background-darkOrange)`
  }
  // theme 3
  if (flag === 3) {
    keyColor3.style.backgroundColor = `var(--key-background-cyan)`
  }
}