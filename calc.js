/**
 * Takes the input from the user
 * @param {number} value 
 */
    function appendToDisplay(value) {
      document.getElementById('display').value += value;
    }

    function calculate() {
      let expression = document.getElementById('display').value;
      try {
        document.getElementById('display').value = eval(expression);
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
    }

    function clearDisplay() {
      document.getElementById('display').value = '';
    }
