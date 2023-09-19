var numberInput = document.getElementById("numberInput");

function addtodisplay(value) {
   var calculatorValue = numberInput.value;
   var operatorSign = ["+", "-", "%", "/", "*"];
   var last = calculatorValue[calculatorValue.length - 1];
   var newInput = value;

if ( operatorSign.indexOf(last) !== -1 && operatorSign.indexOf(newInput) !== -1) {
   calculatorValue = calculatorValue.slice(0, -1) + newInput;
 } else {
   calculatorValue += newInput;
 }
 numberInput.value = calculatorValue;
}
function clearAll(){
   document.getElementById("numberInput").value = "";
}

function deleteOne(){
      var inputElement = document.getElementById("numberInput");
      var inputValue = inputElement.value;
      if (inputValue.length > 0) {
        var updatedValue = inputValue.slice(0, -1);
        inputElement.value = updatedValue;
      }
}

function equal(){
   var result = eval(document.getElementById("numberInput").value);
   document.getElementById("numberInput").value = result;
}

