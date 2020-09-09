class Formatter {
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(str){
    const lower = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = str.split(' ')

    let reducer = (phrase, word) => {
      let newWord = word;
      if (!lower.includes(word))
        newWord = this.capitalize(word);

      return `${phrase} ${newWord}`;
    }
    return words.slice(1).reduce(reducer, this.capitalize(words[0]));
  }
}