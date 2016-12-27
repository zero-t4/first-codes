window.onload = function() {
  function getDate() {
    let birthDate = +prompt("Whats your birthDate Day?", 29);
    let birthMonth = +prompt("Whats your birthDate Month?", 06);
    let birthYear = +prompt("Whats your birthDate Year?", 1997);
    if (birthDate == 0 || birthMonth == 0 || birthYear == 0) {
      alert('Entered the wrong data');
      throw "stop";
    }
    if (isNaN(birthDate) || isNaN(birthMonth) || isNaN(birthYear)) {
      alert('Entered the wrong data');
      throw "stop";
    }
    let d = new Date;
    d.setFullYear(birthYear, birthMonth - 1, birthDate);
    return d;
  }

  function startApp() {
    let d = getDate()
    let now = new Date();

    currentYear = now.getFullYear() - d.getFullYear();
    document.querySelector('.Years').innerHTML = currentYear;

    let dMilliseconds =  +d + currentYear * 365 * 24 * 60 * 60 * 1000;
    setInterval(() => {
      let now = Date.now();
      now = now - dMilliseconds;
      now = now/31536000000 + '';
      now = now.slice(2);
      document.querySelector('.AnotherSide').innerHTML = now;
    }, 700)
  }
  startApp();

};