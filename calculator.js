let expression = '';
const display = document.getElementById('display');
function appendToDisplay(input) {
  expression += input;
  display.value = expression;
}
function clearDisplay() {
  expression = '';
  display.value = '';
}
function calculateResult() {
  try {
    const result = eval(expression);
    expression = result.toString();
    display.value = expression;
  } catch (error) {
    expression = '';
    display.value = 'Error';
  }
}
