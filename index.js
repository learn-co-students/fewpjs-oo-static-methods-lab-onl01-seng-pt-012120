class Formatter {
  //add static methods here

  static capitalize(string){    
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    // words that shouldn't be capitalized
    let capsExceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    // capitalize the first letter of each word
    let na = Formatter.capitalize(string.split(' ')[0]);
    let newArr = [na];
    Formatter.sanitize(string).split(' ').slice(1).forEach(word => {
      if(capsExceptions.find(nc=>nc===word)){
        newArr.push(word)        
      } else {
        newArr.push(Formatter.capitalize(word));
      }
    });
    return newArr.join(' ')
  }
    
}