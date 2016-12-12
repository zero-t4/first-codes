var matches = [],
count = 0;

for(var i = 0; i < 100000; i++) {
  i = i + '';
    debugger
  len = i.length;
  if(len == 5) {
    var a = i[0],
    b = i[1],
    c = i[2],
    d = i[3],
    e = i[4];
  } else if(len == 4) {
    var a = '0',
    b = i[0],
    c = i[1],
    d = i[2],
    e = i[3];
  } else if(len == 3) {
    var a = '0',
    b = '0',
    c = i[0],
    d = i[1],
    e = i[2];
  } else if(len == 2) {
    var a = '0',
    b = '0',
    c = '0',
    d = i[0],
    e = i[1];
  } else if(len == 1) {
    var a = '0',
    b = '0',
    c = '0',
    d = '0',
    e = i[0];
  }
  if(a == e && d == b && c == c) {
    var str = a+b+c+d+e;
    matches.push(str);
    ++count;
  }
}