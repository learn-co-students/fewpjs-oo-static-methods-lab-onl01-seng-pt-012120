class Formatter {
  static capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }

  static sanitize(input) {
    return input.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(input) {
    let noCapitals = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arrayOfWords = input.split(" ")
    arrayOfWords[0] = this.capitalize(arrayOfWords[0])
    for (let i = 1; i < arrayOfWords.length; i++) {
      if (!noCapitals.find(x => x === arrayOfWords[i])) {
        arrayOfWords[i] = this.capitalize(arrayOfWords[i])
      }
    }
    return arrayOfWords.join(" ")
  }
}