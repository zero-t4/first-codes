// Все созданные глобальные переменные 
let createDiv = document.querySelector('#createElementbutton'); 
let save = document.querySelector('#save');
let use = document.querySelector('#use');
let delet = document.querySelector('#delet');
let counter = 1;
let colors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'snow', 'springgreen', 'steelblue', 'tanteal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheatwhite', 'whitesmoke', 'yellow', 'yellowgreen']
let body = document.querySelector('body');
let activeElement;
let offsetX = 0;
let offsetY = 0;
let cookie = [];

createDiv.addEventListener('click', cb); // обработчик событий, создания новых Div
save.addEventListener('click', cb1); // обработчик событий, сохранения состояния всех Div в Cookie
use.addEventListener('click', cb2); // обработчик событий, вост. всех Div, по инструкции - Cookie 
delet.addEventListener('click', cb3); // обработчик событий, удаления сущ. Cookie

// Начало реализации D&D
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
// Конец реализации D&D


function cb(e) { // create new random Div function
  let newDiv = document.createElement("div"); 

  newDiv.setAttribute("name", counter++);
  newDiv.style = `background: ${rand(colors)}; border:1px solid black;width:${randPx()}px;height:${randPx()}px;position:absolute;`;
  newDiv.style.top = Math.floor(Math.random() * screen.availHeight - newDiv.style.height.replace(/[A-Za-zА-Яа-яЁё]/g, "")) + 'px';
  newDiv.style.left = Math.floor(Math.random() * screen.availWidth - newDiv.style.width.replace(/[A-Za-zА-Яа-яЁё]/g, "")) + 'px';
  document.body.insertBefore(newDiv, createDiv);
  
  function randPx(){
    return Math.floor(Math.random() * 501);
  }
  
  function rand(col) {
    var i = Math.floor(Math.random() * col.length);
    return col[i];
  }
}

function cb1() { // save Div positions to cookie
  for(let i = 1; i < counter; i++) {
    let current = document.getElementsByName(i);
    let attribute = current[0].getAttribute('style');
    
    cookie.push(attribute);
  }
 
  cookie = cookie.join("&&");

  for(let i = 0; i < cookie.length; i++) {
    if(cookie[i] == ';') {
      cookie = cookie.replace(";", "`");
    }
  }

  document.cookie = "param = " + cookie + "\;";
}

function cb2() { // use saved cookie
  if(readCookie('param')){
    let load = readCookie('param');
    
    for(let i = 0; i < load.length; i++) {
      if(load[i] == '`') {
        load = load.replace("`", ";");
      }
    }
    
    load = load.split('&&');
    
    for(let i = 1; i < counter; i++) {
      let current = document.getElementsByName(i);
      current[0].setAttribute('style', load[i-1]);

      if(current[0].style[0] == "") {
        current[0].remove();
        counter = i;

      }
    }
  }
}

function cb3() { // delet cookie
    document.cookie ='param=; expires=Thu, 01 Jan 1970 00:00:01   GMT;';
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}