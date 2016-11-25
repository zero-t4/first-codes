let buttons = document.querySelector('#button');
let counter = 1;
let colors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'snow', 'springgreen', 'steelblue', 'tanteal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheatwhite', 'whitesmoke', 'yellow', 'yellowgreen']
let body = document.querySelector('body');
let activeElement;
let offsetX = 0;
let offsetY = 0;

buttons.addEventListener('click', cb);

body.addEventListener('mousedown', e => {
  if (e.nodeName != "BUTTON") {
  activeElement = e.target;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  };
})

body.addEventListener('mouseup', e => {
  activeElement = null;
})

document.addEventListener('mousemove', e => {
  if (activeElement && activeElement.nodeName != "BUTTON") {
    activeElement.style.top = (e.clientY - offsetY) + 'px';
    activeElement.style.left = (e.clientX - offsetX) + 'px';
  }
});

function cb(e) {
  let newDiv = document.createElement("div");

  newDiv.setAttribute("queue", counter++);
  newDiv.style.background = rand(colors);
  newDiv.style.border = '1px solid black'; 
  newDiv.style.width = randPx() + 'px';
  newDiv.style.height = randPx() + 'px';
  newDiv.style.position = 'absolute';
  newDiv.style.top = Math.floor(Math.random() * screen.availHeight - newDiv.style.height.replace(/[A-Za-zА-Яа-яЁё]/g, "")) + 'px';
  newDiv.style.left = Math.floor(Math.random() * screen.availWidth - newDiv.style.width.replace(/[A-Za-zА-Яа-яЁё]/g, "")) + 'px';
  document.body.insertBefore(newDiv, button);
  
  
  function randPx(){
    return Math.floor(Math.random() * 501);
  }
  
  function rand(col) {
    var i = Math.floor(Math.random() * col.length);
    return col[i];
  }
}
