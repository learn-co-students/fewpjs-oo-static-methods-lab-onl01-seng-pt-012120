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

    newTitle.push(this.capitalize(titleArr[0]));

    for (let i=1; i < titleArr.length; i++) {
      if (lowerCaseWords.includes(titleArr[i])) {
        newTitle.push(titleArr[i])
      } else {
        newTitle.push(this.capitalize(titleArr[i]))
      }
    };

    return newTitle.join(' ')
  }
}