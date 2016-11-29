let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
let myInput = document.querySelector('#myInput'); // поле ввода
let results = document.querySelector('#results'); // div с совпадением
let respond = []; // ответ ajax 
let pressTrue; // ввели в input ?
let valueInput = []; // значение ввода в input
myInput.value = "search...";

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
  sendAjax(url)
  .then((responseText) => {
    respond = responseText = JSON.parse(responseText);
    let allCity = [];
    
    for (let key in respond) {
      allCity[allCity.length] = respond[key].name; 
    }
    
    allCity.sort();
    respond = [];
    
    for(let key in allCity) {
      let obj = new Object();
      obj.name = allCity[key];
      respond.push(obj);
    }
    show();
    function show() {
      let source = matches.innerHTML;
      let templateFn = Handlebars.compile(source);
      let template = templateFn({list: respond});
  
      results.innerHTML = template;
    }
    
    myInput.addEventListener('keyup', cb1);
    myInput.addEventListener('focus', cb2); // удалить search вызовется 1 раз

    function cb1() {
      valueInput = myInput.value; // получаем значение INPUT
      show();
      search(valueInput); // ищем есть ли такой город в полученном массиве 
      
      function search(valueInput) {
        for(let key in respond) { // перебор, на совпадения

          if(valueInput == respond[key].name.substring(valueInput[0], valueInput.length ).toLowerCase() && valueInput != "") { //если совпало
            document.getElementsByName(respond[key].name)[0].style = "background-color: rgb(102, 102, 255);color: white;";
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
  })
}
