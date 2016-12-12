function scanDOM() {
  
  var totalElements = 0;
  var totalText = 0;
  var totalComments = 0;
  var doc = document;
  var tags = [];
  var tag = {};
  var cls = {};
  
    // Ищем все Элементы на странице html
  function findElement(param1) {
    param1 = param1.childNodes;
    
    for (var i = 0; i < param1.length; i++) {
    
      if (param1[i].nodeType == 1) {
        totalElements++;
        if(param1[i].hasAttribute('class')) {
          cls[param1[i].getAttribute('class')] = cls[param1[i].getAttribute('class')] + 1 || 1;
        }
      }
      
      if (param1[i].children) {
        findElement(param1[i]);
      }
    }
    return totalElements;
  }
    // Ищем все Text Элементы на странице html
  function findText(param2) {
    param2 = param2.childNodes;
    
    for (var i = 0; i < param2.length; i++) {
    
      if (param2[i].nodeType == 3) {
        totalText++;
      }
      
      if (param2[i].children) {
        findText(param2[i]);
      }
    }
    return totalText;
  }
    // Ищем все Comment Элементы на странице html
  function findComment(param3) {
    param3 = param3.childNodes;
    
    for (var i = 0; i < param3.length; i++) {
    
      if (param3[i].nodeType == 8) {
        totalComments++;
      }
      
      if (param3[i].children) {
        findComment(param3[i]);
      }
    }
    return totalComments;
  }
    // Ищем все уникальные Теги на странице
  function allTags(param1) {
    param1 = param1.childNodes;
    
    for (var i = 0; i < param1.length; i++) {
    
      if (param1[i].nodeType == 1) {
        tags.push(param1[i].tagName.toLowerCase());
      }
      
      if (param1[i].children) {
        allTags(param1[i]);
      }
    }
    return tags;
  }
  // Считаем кол - во Тегов на странице
  function ftagsCount(param1) {
    
    for (i = 0; i < tags.length; i++) {
      tag[tags[i]] = tag[tags[i]] + 1 || 1;

    }
    return tag;
  }
  // Считаем кол - во классов на странице

  
  console.log("Всего ЭЛЕМЕНТ узлов: " + findElement(doc));
  console.log("Всего TEXT узлов: " + findText(doc));
  console.log("Всего COMMENT узлов: " + findComment(doc));
  console.log("\*\*\*");
  console.log("Все Теги - " + allTags(doc));
  ftagsCount(doc);
  
  for (elem in tag) {
    console.log(`Тегов ${elem}: ${tag[elem]}`);
  }
  console.log("\*\*\*");
  for (elem in cls) {
    console.log(`Классов ${elem}: ${cls[elem]}`);
  }
  
  
}

scanDOM();