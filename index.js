class Formatter {
  static capitalize (string){
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    string = string.charAt(0).toUpperCase() + string.slice(1);
    let stringArray = string.split(" ");
    let nonCase = ["a", "an", "but", "of", "and", "for", "at", "by", "from", "the"]
    let newString = []
    for (const word of stringArray){
      if ( !nonCase.includes(word)){
        newString.push(word.charAt(0).toUpperCase() + word.slice(1))
      }else {newString.push(word)}

    }
    newString = newString.join(" ")
    return newString
  }
}