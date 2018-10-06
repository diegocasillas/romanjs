const matrix = require('../utils/matrix');

const roman = (n) => {
  if (!Number.isInteger(n)) {
    throw new Error('The number must be an integer.');
  }

  if (n < 0 || n > 3999) {
    throw new Error('The number must be between 0 and 3999.');
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