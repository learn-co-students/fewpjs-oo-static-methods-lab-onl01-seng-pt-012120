class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string){
    let s = Formatter.capitalize(string)
    let words = s.split(" ")
    let st = words.map(function(word) {
      if (word != 'the'&& word != 'and'
      && word != 'a'&& word != 'an' && word != 'but'
      && word != 'of'&& word != 'for'&& word != 'at'
      && word != 'by'&& word != 'from')   {
        return Formatter.capitalize(word)
      }
      else {
        return word
      }
    })
    let n = st.join(" ")
    return n
  }
}