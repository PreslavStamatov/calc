const display = document.querySelector('.calculator-screen');

const mathProblem = {
  number1: '',
  operator: '',
  number2: ''
}

const clearScreen = function() {
  mathProblem.number1 = '';
  mathProblem.operator = '';
  mathProblem.number2 = '';
  display.value = '';
  window.alert(mathProblem.number1)
  
}

const updateCurrentDisplayValue = function(value) {
  display.value += value;
  mathProblem.number1 += value;
  window.alert(mathProblem.number1);
}; 

const updateOperator = function(operator) {
  
  display.value += operator;
  window.alert(operator)
}

