javascript: var elements = document.body.querySelectorAll('.hm-subject-list-item-description-lessons');
Array.prototype.forEach.call(elements, function(el, i) { el.setAttribute('style', 'height: 100% !important;'); });