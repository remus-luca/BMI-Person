function calculate() {
  var nume = document.getElementById("input01").value;
  var gen = document.getElementById("input02").value;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var result = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
  var answer = document.getElementById("answer");
  answer.innerHTML =
    nume + " |" + gen + " | " + weight + "kg | " + height + "m | " + result;
  if (result < 18.5) {
    answer.innerHTML =
      nume +
      " | " +
      gen +
      " | " +
      weight +
      " kg | " +
      height +
      " m | " +
      "Interval subponderal";
  } else if (result >= 18.5 && result < 25) {
    answer.innerHTML =
      nume +
      " | " +
      gen +
      " | " +
      weight +
      " kg | " +
      height +
      " m | " +
      "Interval normal";
  } else if (result >= 25 && result < 30) {
    answer.innerHTML =
      nume +
      " | " +
      gen +
      " | " +
      weight +
      " kg | " +
      height +
      " m | " +
      "Interval supraponderal";
  } else {
    answer.innerHTML =
      nume +
      " | " +
      gen +
      " | " +
      weight +
      " kg | " +
      height +
      " m | " +
      "Interval de obezitate";
  }
}
