// class Formatter {
//   //add static methods here
// }


class Formatter  {
  static capitalize(string) {
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const wordArray = string.split(" ")
    
    const result = wordArray.map(function(word, i) {
    
      return (!exceptions.includes(word)) || i === 0 ? this.capitalize(word) : word
    }, this)
    
    return result.join(" ")
  }
}
// }
  