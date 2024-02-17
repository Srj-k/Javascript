
    function inp(a) {
        var id = document.getElementById("op");
        id.value += a;
    }

    function calculate() {
      var id = document.getElementById("op");
      var result = eval(id.value); // Evaluate the expression
      id.value = result; // Update the input field with the result
  }
  function clearInput() {
   var id = document.getElementById("op");
   id.value = ""; // Clear the input field
}