class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ' ']+/g, '');
  }

  static titleize(string){
    let sanString = this.sanitize(string)
    let wordArr = sanString.split(' ')
    wordArr.forEach(function(word){ if(word === wordArr[0]){
      wordArr[wordArr.indexOf(word)] = Formatter.capitalize(word);
    }
    else if(word != 'the' && word != 'a' && word != 'an' && word != 'but' && word != 'of' && word != 'and' && word != 'for' && word != 'at' && word != 'by' && word != 'from'){
      wordArr[wordArr.indexOf(word)] = Formatter.capitalize(word);
    }});
    return wordArr.join(' ')
  }
}
