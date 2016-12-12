function deepEqual(objA, objB) {
  var allPropEqual = false;
  function checking (objA, objB) {

    for(let key in objA) {
      if(typeof(objA[key]) == "object" && typeof(objB[key]) == "object") {
          checking(objA[key], objB[key]);
      }else {
        if(objA[key] == objB[key]) {
          allPropEqual = true;
        }else {
          allPropEqual = false;
          alert('Error not Equal {}\' s');
          return false;
        }
      }
    }
  }
  checking (objA, objB) 
  if (allPropEqual) {
    return true;
  }else {
    return false;
  }
}

var objA = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: {
        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
    },
    prop5: 1000
};

var objB = {
    prop5: 1000,
    prop3: 'value3',
    prop1: 'value1',
    prop2: 'value2',
    prop4: {
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        },
        subProp1: 'sub value1'
    }
};

console.log(deepEqual(objA, objB)); //объекты идентичны, вернет true