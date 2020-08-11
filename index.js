class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, "");
  }

  static titleize(string) {
    let lows = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(" ");
    let r = [];
    for (let word of words) {
      if(lows.includes(word)){
        r.push(word);
      } else {
        r.push(this.capitalize(word));
      }
    }
    return r.join(" ")[0].toUpperCase() + r.join(" ").slice(1);

  }



}
