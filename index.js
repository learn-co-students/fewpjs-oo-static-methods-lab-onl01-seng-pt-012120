class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize(str) {
    str = str.replace(/[^A-Za-z0-9 '-]/g, "");
    return str.trim();
  }
  static titleize(string) {
    const exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    return string
      .split(" ")
      .map((w, i) =>
        exceptions.find((exception) => w === exception) && !!i
          ? w
          : this.capitalize(w)
      )
      .join(" ");
  }
}
