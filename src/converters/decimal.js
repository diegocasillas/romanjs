const matrix = require('../utils/matrix')
const romanRegex = require('../utils/romanRegex')

const decimal = (n) => {
  if (typeof n !== 'string' || !romanRegex.test(n.toUpperCase())) {
    throw new Error('Invalid roman number')
  }

  let roman = 0

  for (let i = 0; i < n.length; i++) {
    const currentValue = matrix.find((element) => {
      return element[1] === n.charAt(i).toUpperCase()
    })[0]

    const nextIndex = i + 1

    if (nextIndex < n.length) {
      const nextValue = matrix.find((element) => {
        return element[1] === n.charAt(nextIndex).toUpperCase()
      })[0]

      nextValue > currentValue
        ? roman -= currentValue
        : roman += currentValue
    } else {
      roman += currentValue
    }
  }

  return roman
}

module.exports = decimal
