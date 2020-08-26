class Formatter {
  static capitalize(s) {
    let a = s.split('');
    a[0] = a[0].toUpperCase();
    return a.join('')
  }

  static sanitize(s) {s = s.replace(/[^a-zA-Z0-9'\-_\s]/g,''); return s}

  static titleize(s) {
    let a = s.split(' ');
    const check = function(z) {if (z === 'the'||z ==='a'||z ==='an'||z==='but'||z==='of'||z==='and'||z==='for'||z==='at'||z==='by'||z==='from') {return true} else {return false}};
    for (let x = 0; x < a.length; x++) {if (check(a[x]) === false) {
      a[x] = this.capitalize(a[x])
    }};
    a[0] = this.capitalize(a[0]);
    return a.join(' ')
  }
}