class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  };

  static titleize(string) {
    let check = function(word) {
      let stopWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      return stopWords.some(elmt => elmt === word) 
    };
    
    let array = string.split(' ');
    let newArray = array.map((word, index) => {
      if (index === 0 || !check(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });
    return newArray.join(' ')
  };
}