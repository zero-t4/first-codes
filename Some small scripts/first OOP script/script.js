/*
Простой калькулятор задание #3
function calculator(firstNumber) {
  return {
    result: 0,
    sum() {
      result = firstNumber;
      for(let i = 0; i < arguments.length; i++) {
        result += arguments[i];
      }
      return this.result = result;
    },
    dif() {
      result = firstNumber;
      for(let i = 0; i < arguments.length; i++) {
        result -= arguments[i];
      }
      return this.result = result;
    },
    div() {
      debugger
      result = firstNumber;
      for(let i = 0; i < arguments.length; i++) {
        result /= arguments[i];
      }
      return this.result = result;
    },
    mul() {
      result = firstNumber;
      for(let i = 0; i < arguments.length; i++) {
        result *= arguments[i];
      }
      return this.result = result;
    }
  }
}

var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400


*/



/*
Задание #14 es5 калькулятор
var calculator = function(num) {
  this.constNum = num;
}

calculator.prototype.sum = function() {
  this.res = this.constNum;
  for (let i = 0; i < arguments.length; i++) {
    this.res += arguments[i];
  }
}


calculator.prototype.dif = function() {
  this.res = this.constNum;
  for (let i = 0; i < arguments.length; i++) {
    this.res -= arguments[i];
  }
}


calculator.prototype.div = function() {
  this.res = this.constNum;
  for (let i = 0; i < arguments.length; i++) {
    this.res /= arguments[i];
  }
}

calculator.prototype.mul = function() {
  this.res = this.constNum;
  for (let i = 0; i < arguments.length; i++) {
    this.res *= arguments[i];
  }
}

var SqlCalc = function(num) {
  this.constNum = num;
}

SqlCalc.prototype = Object.create(calculator.prototype);

SqlCalc.prototype.sum = function() {
  calculator.prototype.sum.call(this, ...arguments);
  return this.res**2;
}
SqlCalc.prototype.dif = function() {
  calculator.prototype.dif.call(this, ...arguments);
  return this.res**2;
}
SqlCalc.prototype.div = function() {
  calculator.prototype.div.call(this, ...arguments);
  return this.res**2;
}
SqlCalc.prototype.mul = function() {
  calculator.prototype.mul.call(this, ...arguments);
  return this.res**2;
}
let myCalculator = new SqlCalc(100);

	console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
	console.log(myCalculator.dif(10, 20)); //вернет 4 900
	console.log(myCalculator.div(2, 2)); //вернет 625
	console.log(myCalculator.mul(2, 2)); //вернет 160 000
*/


// Задание #14 es6 калькулятор
class calculator {
  constructor(num) {
    this.constNum = num;
  }
  sum() {
    this.res = this.constNum;
    for (let i = 0; i < arguments.length; i++) {
      this.res += arguments[i];
    }
  }
  dif() {
    this.res = this.constNum;
    for (let i = 0; i < arguments.length; i++) {
      this.res -= arguments[i];
    }
  }
  div() {
    this.res = this.constNum;
    for (let i = 0; i < arguments.length; i++) {
      this.res /= arguments[i];
    }
  }
  mul() {
    this.res = this.constNum;
    for (let i = 0; i < arguments.length; i++) {
      this.res *= arguments[i];
    }
  }
}

class SqlCalc extends calculator {
  constructor(num) {
    super(num);
  }
  sum() {
    super.sum(...arguments);
    return this.res**2;
  }
  dif() {
    super.dif(...arguments);
    return this.res**2;
  }  
  div() {
    super.div(...arguments);
    return this.res**2;
  }  
  mul() {
    super.mul(...arguments);
    return this.res**2;
  }
}


let myCalculator = new SqlCalc(100);

	console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
	console.log(myCalculator.dif(10, 20)); //вернет 4 900
	console.log(myCalculator.div(2, 2)); //вернет 625
	console.log(myCalculator.mul(2, 2)); //вернет 160 000

