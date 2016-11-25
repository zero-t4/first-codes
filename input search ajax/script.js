let myInput = document.querySelector('#myInput'); // поле ввода
let matches = document.querySelector('#matches'); // div с совпадением
let respond = []; // ответ ajax 
let pressTrue; // ввели в input ?
let arrInput = []; // значение ввода в input
let filterRespond = [];
let b = 0;
let b1 = 0;

myInput.addEventListener('keyup', cb1);
myInput.addEventListener('keyup', cb2);

function cb1() {
  console.log('cb1- ' + ++b)
  
  
}
function cb2() {
    console.log('cb2- ' + ++b1)
    
    arrInput = myInput.value.split();
    
    function search(arrInput) {
      filterRespond = [];
      
      for(let i = 0; i < respond.length; i++) {
        filterRespond.push(respond[i].slice(0, arrInput[0].length));
      }
      
      outer: for(let i = 0; i < filterRespond.length; i++) {
        if(arrInput[0] == filterRespond[i].toLowerCase()) {
          matches.innerText = respond[i];
          break outer;
        }
        matches.innerText = '';
      }
      
    }
      search(arrInput);
  }

window.onload = function() {
  function sendAjax(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      
      xhr.open('GET', url);
      xhr.addEventListener('load', () => {
        resolve(xhr.responseText);
      });
      xhr.addEventListener('error', () => {
        reject();
      });
      xhr.send();
    });
  }
  sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
  .then((responseText) => {
    responseText = JSON.parse(responseText);
    for (let i = 0; i < responseText.length; i++) {
      if (responseText[i].hasOwnProperty('name')) {
          respond.push(responseText[i]['name']);
      }
    }
    respond.sort();
    console.log(respond);
  })
}