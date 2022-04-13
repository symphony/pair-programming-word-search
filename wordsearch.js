const wordSearch = (letters, word) => {
  if (!Array.isArray(letters)) throw TypeError("Not an array");
  if (letters.length === 0) return false;

  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = [];
  // Transpose matrix
  for (let row = 0; row < letters[1].length; row++) {
    let verticalWord = "";
    for (let column = 0; column < letters[0].length; column++) {
      verticalWord += letters[column][row];
    }
    verticalJoin.push(verticalWord);
  }

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;