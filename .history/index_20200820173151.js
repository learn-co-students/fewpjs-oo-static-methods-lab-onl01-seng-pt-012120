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
    let fw = Formatter.capitalize(s.split(' ')[0]);
    let finalArr = [fw];
    Formatter.sanitize(s).split(' ').slice(1).forEach(word => {
      if(doNotCaps.find(nc=>nc===word)){
        finalArr.push(word)        
      } else {
        finalArr.push(Formatter.capitalize(word));
      }
    });
    return finalArr.join(' ')
  }

}