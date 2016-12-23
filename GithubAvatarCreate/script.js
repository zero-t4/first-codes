function start() {
  var tdClear = document.querySelectorAll('td');
  for(let i = 0; i < tdClear.length; i++) {
    tdClear[i].style.backgroundColor = '';
  }
  let arr = [];
  
  for(let i = 0; i < 8; i++){
    arr.push(Math.floor(Math.random() * 8));
  }
  debugger
  let getColor = color();

  var s;
  if(arr.includes(0)) {
    s = document.querySelector('.c1');
    s.style.backgroundColor = getColor;
    s = document.querySelector('.c10');
    s.style.backgroundColor = getColor;
  };
  if(arr.includes(1)) {
    s = document.querySelector('.c2');
    s.style.backgroundColor = getColor;
    s = document.querySelector('.c9');
    s.style.backgroundColor = getColor;
  };
  if(arr.includes(2)) {
    s = document.querySelector('.c3');
    s.style.backgroundColor = getColor;
    s = document.querySelector('.c12');
    s.style.backgroundColor = getColor;
  };
  if(arr.includes(3)) {
    s = document.querySelector('.c4');
    s.style.backgroundColor = getColor;
    s = document.querySelector('.c11');
    s.style.backgroundColor = getColor;
  };
  if(arr.includes(4)) {
    s = document.querySelector('.c5');
    s.style.backgroundColor = getColor;
    s = document.querySelector('.c14');
    s.style.backgroundColor = getColor;
  };
  if(arr.includes(5)) {
    s = document.querySelector('.c6');
    s.style.backgroundColor = getColor;
    s = document.querySelector('.c13');
    s.style.backgroundColor = getColor;
  };
  if(arr.includes(6)) {
    s = document.querySelector('.c7');
    s.style.backgroundColor = getColor;
    s = document.querySelector('.c16');
    s.style.backgroundColor = getColor;
  };
  if(arr.includes(7)) {
    s = document.querySelector('.c8');
    s.style.backgroundColor = getColor;
    s = document.querySelector('.c15');
    s.style.backgroundColor = getColor;
  };
}

function color() {

  let colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenrod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'Goldenrod', 'Gray', 'Green', 'GreenYellow', 'Honeydew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenrodYellow', 'LightGreen', 'LightGrey', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquamarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenrod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'Seashell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen']
  let num = Math.floor(Math.random() * (colors.length + 1));
  return colors[num]
};
var animation = true;
function anim() {
  setInterval(function() {
  if(!animation) return false;
    start();
  },500)
}

function anim_stop() {
animation = false;
}