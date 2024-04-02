'use strict'

let result = ''

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    result += '*'
  }
  result += '\n'
}

console.log(result)

/*
const lines = 5
let result = ''
for (let i = 0; i <= lines; i++) {
  for (let k = lines; k >= i; k--) {
    if (k === i) {
      for (let j = 0; j <= i; j++) {
        if (j === 0) {
          result += '*'
        } else if (j > 0 || j === i) {
          result += '**'
        }
      }
    } else {
      result += ' '
      continue
    }
  }
  result += '\n'
}

console.log(result)
*/
