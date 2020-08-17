class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newTitle = [];
    let titleArr = string.split(' ');

    let firstWord = titleArr[0];
    firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
    newTitle.push(firstWord);

    for (let i=1; i < titleArr.length; i++) {
      if (lowerCaseWords.includes(titleArr[i])) {
        newTitle.push(titleArr[i])
      } else {
        let newWord = titleArr[i];
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
        newTitle.push(newWord)
      }
    };

    return newTitle.join(' ')
  }
}