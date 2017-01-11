javascript: var running;
alert('Press Shift to turn on');

function toggle(e) {
  if (e.keyCode == 16) {
    running = !running;
    running ? alert('running') : alert('turned off');
  }
}
window.addEventListener('keyup', toggle);
document.body.onmouseover = document.body.onmouseout = handler;

function handler(event) {
  if (running) {
    if (event.type == 'mouseover') {
      for (let i = 0; i < event.toElement.children.length; i++) {
        event.toElement.children[i].style = "box-shadow: inset 0px 0px 1px 1px rgba(250, 75, 227, 1);"
      }
      event.target.style.border = '1px solid black';
      event.target.addEventListener('click', deleteFunc);
    }
    if (event.type == 'mouseout') {
      for (let i = 0; i < event.target.children.length; i++) {
        event.target.children[i].style = "box-shadow: none;"
      }
      event.target.style.border = 'none';
    }
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 16) {
        event.target.style.border = 'none';
        for (let i = 0; i < event.target.children.length; i++) {
          event.target.children[i].style = "box-shadow: none;"
        }
        event.target.removeEventListener('click', deleteFunc);
        event.toElement.removeEventListener('click', deleteFunc);
      }
    })
  }
}

function deleteFunc(e) {
  e.preventDefault();
  e.target.remove();
}