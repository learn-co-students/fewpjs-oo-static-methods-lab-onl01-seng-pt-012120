class Formatter {
  //add static methods here
  static capitalize(s){
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  static sanitize(s){
    return s.replace(/[^-,"'a-zA-Z0-9 ]/g,"");
  }
  doNotCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
  static titleize(s){
    let thisString = sanitize(s);
    let words = thisString.split(' ');
  }
}