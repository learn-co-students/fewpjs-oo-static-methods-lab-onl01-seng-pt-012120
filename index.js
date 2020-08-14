class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const wordArray = string.split(" ")
    
    const result = wordArray.map(function(word, i) {
      debugger
      return (!exceptions.includes(word)) || i === 0 ? this.capitalize(word) : word
    }, this)
    
    return result.join(" ")
  }
}


Formatter.titleize( "where the wild things are" )