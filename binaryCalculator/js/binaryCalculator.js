// var value1;
// var value2;
// var result;
// btn0.onclick = function() {
//   value1 = res.innerHTML += 0;
//   //value1.toString(2);
//
// }
//
// btn1.onclick = function() {
//   value2 = res.innerHTML += 1;
//   //value2.toString(2);
//
// }
//
// var temp4sum = 0;
// var temp4sub = 0;
// var temp4div = 0;
// var temp4mul = 0;
// btnSum.onclick = function() {
//   res.innerHTML += "+";
//   temp4sum++;
//
// }
// btnSub.onclick = function() {
//   res.innerHTML += "-";
//   temp4sub++;
//
// }
// btnMul.onclick = function() {
//   res.innerHTML += "*";
//   temp4mul++;
//
// }
// btnDiv.onclick = function() {
//   res.innerHTML += "/";
//   temp4div++;
//
// }
//
// btnEql.onclick = function() {
//   if (temp4sum == 1) {
//   //  var temp = value1 + value2;
//     //result=temp.toString(2);
//     res.innerHTML = value2+"123";
//   };
//
// }




function onButton(e) {
  // function named onButton with e as a parameter
    var btn = e.target || e.srcElement;
    var action = document.getElementById(btn.id).innerHTML;
    // Create  a "action" variable and store the values obtaind by getElementById(btn.id).innerHTML
    var res = document.getElementById('res');
    // Created a "res" variable and referenced to as result div id "res",

    switch(action) {
      // Start Switch case and switched for "action" value
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
        // Given all the possible operand and operator symbol as case value.
            res.innerHTML += action;
            // After adding operands and operator add it to res.innerHTML
            break;

        case 'C':
        //If Press "C" then clear the res div
            res.innerHTML = '';
            break;
        case '=':
        // If press "=" then do the below operation
            var expr = res.innerHTML;
            // create a "expr" variable and reference to as res.innerHTML;
            var nums = /(\d+)/g;
            // nums variable contains regix value for base 10
            
            // Replace all base 2 nums with base 10 equivs
            expr = expr.replace(nums, function(match) {
                return parseInt(match, 2);
            })
            // eval in base 10 and convert to base 2
            res.innerHTML = eval(expr).toString(2);
            break;
        default:
            console.error('should not be executed');
            break;
    }
}
var buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.onclick = onButton;
}
