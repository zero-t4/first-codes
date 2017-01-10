javascript: void((function() {
  document.body.onmouseover = document.body.onmouseout = handler;

  function handler(event) {
    if (event.type == 'mouseover') {
      event.target.style.border = '1px solid black';
      event.target.addEventListener('click', cb);
    }
    if (event.type == 'mouseout') {
      event.target.style.border = 'none';
      event.target.removeEventListener('click', cb);
    }
  }

  function cb(e) {
    e.preventDefault();
    e.target.remove();
  }
})())