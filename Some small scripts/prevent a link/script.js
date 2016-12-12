// jQuery
$(() => {
  let a = $("a");
  a.click(() => {
    return false;
  })
})

//Bookmark 
javascript: void($(() => { let a = $("a"); a.click(() => { return false; }) }))

//JS
(window.onload = () => {
  let d = document;
  d.addEventListener('click', (e) => {e.preventDefault()});
})()

//Bookmark 
javascript: void((window.onload = () => {let d = document;d.addEventListener('click',(e) =>{e.preventDefault()});})())