var value1;
var value2;
var result;
btn0.onclick = function() {
  value1 = res.innerHTML += 0;
  value1.toString(2);

}

btn1.onclick = function() {
  value2 = res.innerHTML += 1;
  value2.toString(2);

}

var temp4sum = 0;
var temp4sub = 0;
var temp4div = 0;
var temp4mul = 0;
btnSum.onclick = function() {
  res.innerHTML += "+";
  temp4sum++;

}
btnSub.onclick = function() {
  res.innerHTML += "-";
  temp4sub++;

}
btnMul.onclick = function() {
  res.innerHTML += "*";
  temp4mul++;

}
btnDiv.onclick = function() {
  res.innerHTML += "/";
  temp4div++;

}

btnEql.onclick = function() {
  if (temp4sum == 1) {
    var temp = value1.toString(10) + value2.toString(10);
    //result=temp.toString(2);
    res.innerHTML = temp;
  };

}
