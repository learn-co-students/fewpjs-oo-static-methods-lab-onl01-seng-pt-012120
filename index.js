class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const wordArray = string.split(" ")

    const result = wordArray.map(x => {
      debugger
      // this is undefined...?
    })
  }
}


Formatter.titleize( "where the wild things are" )

// iterate through wordArray and capitalize each word 
// UNLESS its in the exception array
// and push those onto a new array(or map) 
// then join that array and return it