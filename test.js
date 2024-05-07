'use strict'

function getMathResult (base, factor) {
  let number = base
  if (typeof (factor) !== 'number' || factor <= 0) {
    return number
  } else {
    let result = `${number}`
    for (let i = 1; i < factor; i++) {
      number += base
      result += `---${number}`
    }
    return result
  }
}

getMathResult(5, 6)

const str = 'Hello world!'
console.log(str.substring(2, 5))
