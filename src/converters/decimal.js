const decimal = (n) => {
  if (n === null || n === undefined) {
    throw new Error('No argument.');
  }

  if (typeof n === 'number') {
    throw new Error('The number must be a roman number string.')
  }

  if (n === '') {
    return 0;
  }
}

module.exports = decimal;