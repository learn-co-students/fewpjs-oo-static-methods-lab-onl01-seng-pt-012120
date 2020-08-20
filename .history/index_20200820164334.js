class Formatter {
  //add static methods here
  static capitalize(s){
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  static sanitize(s){
    return s.replace(/[^-,"'a-zA-Z0-9]/g,"");
  }
}