javascript: var elements = document.body.querySelectorAll(
  ".hm-subject-list-item-description-lessons"
);
Array.prototype.forEach.call(elements, function(el, i) {
  el.setAttribute("style", "height: 100% !important;");

  $(el).filter((index, element) => {
    var text = $(element)
      .find(".lesson-status-tab")
      .each(function(index) {
        if (
          $(this)
            .text()
            .indexOf("(Выдано задание) 0") != -1
        ) {
          $(this).css({ background: "yellow" });
        }
      });
  });
});
