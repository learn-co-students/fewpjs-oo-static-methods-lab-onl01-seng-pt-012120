class Formatter {
  //add static methods here
  static capitalize(s){
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  static sanitize(s){
    return s.replace(/[^-,"'a-zA-Z0-9 ]/g,"");
  }

  static titleize(s) {
    let doNotCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    let words = thisString.split(' ');
    let fw = capitalize(words[0])
    words = words.map(w=>{
      if (doNotCaps.find(s=>s===w)) {
        return w;
      } else {
        return capitalize(w)
      }
    });
    return words.unshift(fw).join(' ')
    // let newWords = [fw, words.slice(1).map(w=>{
    //   if(doNotCaps.find(nc=>nc===w)){
    //     return w;
    //   }else{
    //     return capitalize(w)
    //   }
    // })];
    // return newWords.join(' ')
  }

}