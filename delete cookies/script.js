(() => {
  new Promise((resolve, reject) => {
    let cookies = document.cookie;

    if (cookies == "") {
      reject();
    }
    resolve(cookies);
  })
  .then(
    (cookies) => { //resolve()
      cookies = cookies.split(' ');
      
      let cookiesObj = {};
      
      for(let i = 0; i < cookies.length; i++) {
        cookies[i] = cookies[i].split('=');
        cookiesObj[cookies[i][0]] = cookies[i][1];
      }
      
      let table = document.createElement('table');
      let counter = 0;
      for(let key in cookiesObj) {

        ++counter;
        let tr = document.createElement('tr');
        var td = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        var button = document.createElement('button');
        
        button.innerHTML = "Удалить эту куку";
        td.innerHTML = key;
        td2.innerHTML = cookiesObj[key];
        
        td2.style = 'width: 500px;word-break: break-all;border-bottom: 1px solid black;';
        td.style = 'word-break: break-all;background-color: #4de6ff;border-bottom: 1px solid black;padding: 15px;';
        td.id = counter;
        button.id = counter;
        
        td3.appendChild(button);
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
      }
      table.style = "background: rgb(244, 244, 244);border: 1px solid black;z-index: 5000;margin: 0px auto 150px;position: fixed;top: 20px;left: 33%;";
      
      let next = document.body.children[0];
      document.body.insertBefore(table, next);
      
      table.addEventListener('click', buttonDelete);
      
      function buttonDelete(e) {
        if(e.target.nodeName == button.nodeName) {
          let ask = confirm('Вы уверены в своем дейсвтвии?');
          if (ask) {
            let cookieName = document.getElementById(parseInt(e.target.id)).innerHTML;
            
            deleteCookie (cookieName);
            
            e.target.innerHTML = 'Удалено';
          }
        }
      }

      function deleteCookie( name ) {

        document.cookie = name + '=;   expires=Thu, 01 Jan 1970 00:00:01   GMT; path=/';

      }
    },
    () => { //reject()
      console.warn( "This site has no Cookie:*");
      alert( "warning --- There is no any Cookie:*, try another site..");
    }
  )
  
  
  
})()

