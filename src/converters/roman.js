const matrix = require('../utils/matrix');

const roman = (n) => {
  if (!Number.isInteger(n) || n < 0 || n > 3999) {
    throw new Error('Invalid decimal number');
  }

  if (n === 0) {
    return '';
  }

  for (let i = 0; i < matrix.length; i++) {
    if (n >= matrix[i][0]) {
      return matrix[i][1] + roman(n - matrix[i][0]);
    }
  }
}

module.exports = roman;