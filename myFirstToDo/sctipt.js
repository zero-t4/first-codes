window.onload = function () {

  let addButton = document.querySelector('.addButton');
  let input = document.querySelector('.input');
  let noteCounter = 0;
  let noteContainer = document.querySelector('.notes');

  input.onkeyup = function(e) {
    if (e.keyCode==13) addButton.click();
  }

  addButton.onclick = function(e) {
    let value = input.value;
    if (!!value) {
     input.value = '',
     noteCounter++;
     createNoteDiv(value, noteCounter);
    }
    
  }

  function createNoteDiv(value, noteCounter) {
    let newNote   = document.createElement('div');    newNote.className = 'col-xs-3';
    let crossLine = document.createElement('button'); crossLine.className = 'btn btn-sm btn-default cross';
    let editBtn   = document.createElement('button'); editBtn.className = 'btn btn-sm btn-default edit';
    let deleteBtn = document.createElement('button'); deleteBtn.className = 'btn btn-sm btn-default delete';
    let h2        = document.createElement('h2');     h2.className = bg.set() + ' note text-center';
    let span      = document.createElement('span');

    h2.innerHTML        = value;
    span.innerHTML      = `[${noteCounter}]`;
    crossLine.innerHTML = 'Зачеркнуть';
    editBtn.innerHTML   = 'Редактировать';
    deleteBtn.innerHTML = 'Удалить';


    newNote.appendChild(span);
    newNote.appendChild(h2);

    insertAfter(crossLine, h2);
    insertAfter(editBtn, crossLine);
    insertAfter(deleteBtn, editBtn);

    noteContainer.appendChild(newNote);
  }

  function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

  let bg = {
    color: ['bg-success', 'bg-info', 'bg-warning', 'bg-danger'],
    counter: 0,
    set: function() {
      if(this.counter == 4) {
        this.counter = 1;
        return this.color[this.counter-1];
      } else {
        this.counter++;
        return this.color[this.counter-1];
      }
    }
  }

  document.body.addEventListener('click', cb1);
  function cb1(e) {
    (e.target.className.includes('cross')) ? crossFn(e):
    (e.target.className.includes('edit')) ? editFn(e):
    (e.target.className.includes('delete')) ? deleteFn(e): 1;
  }

  function crossFn(e) {
    if (e.target.previousElementSibling.childNodes[0].nodeName == "#text" && e.target.previousElementSibling.childNodes[0].tagName != 'S') {
      let value = e.target.previousElementSibling.innerText;
      e.target.previousElementSibling.innerHTML = `<s>${value}</s>`;
    } else {
      e.target.previousElementSibling.innerHTML = e.target.previousElementSibling.childNodes[0].innerHTML;
    }

  }

  function editFn(e) {
    let value = e.target.previousElementSibling.previousElementSibling.innerText;

    value = prompt('Новое значение: ', value);
    e.target.previousElementSibling.previousElementSibling.innerText = value;
  }

  function deleteFn(e) {
    e.target.parentNode.remove()
  }
}