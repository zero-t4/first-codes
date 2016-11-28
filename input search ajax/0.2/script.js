let myInput = document.querySelector('#myInput'); // поле ввода
let matches = document.querySelector('#matches'); // div с совпадением
let respond = []; // ответ ajax 
let pressTrue; // ввели в input ?
let valueInput = []; // значение ввода в input
let b = 0;
let b1 = 0;
myInput.value = "search...";

myInput.addEventListener('keyup', cb1);
myInput.addEventListener('focus', cb2);
 
    for(let i = 0; i < respond.length; i++) {
      filterRespond.push(respond[i].slice(0, valueInput[0].length)); // нарезаем ответы на правильное кол-во символов == введенных символов
    }
function cb1() {
  valueInput = myInput.value; // получаем значение INPUT

  search(valueInput); // ищем есть ли такой город в полученном массиве 
  
  function search(valueInput) {
    matches.innerHTML = "";
    for(let i = 0; i < respond.length; i++) { // перебор, на совпадения

      if(valueInput == respond[i].substring(valueInput[0], valueInput.length ).toLowerCase() && valueInput != "") { //если совпало
        let temp = document.createElement("span");
        let br = document.createElement("br");
        temp.innerText = respond[i]
        matches.appendChild(temp);
        matches.appendChild(br);
      }
      
    }
  }
}

function cb2(e) {
  if(myInput.value == "search...") {
    myInput.value = '';
  }
  myInput.removeEventListener('focus', cb2);
}

window.onload = function() {
  function sendAjax(url) { // функция отправки AJAX
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      
      xhr.open('GET', url); // открываем соединение
      xhr.addEventListener('load', () => { // устанавливаем обр. событий
        resolve(xhr.response);
      });
      xhr.addEventListener('error', () => { // устанавливаем обр. событий
        reject();
      });
      xhr.send();  // послали запрос
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
    respond.sort(); //получаем полностью отсортированный список городов
    console.log(respond);
  })
}