"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result1;
  var result2;
  var temp = original.value;
  var regexp = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([fFcCkK])/;
  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[3];
    num = parseFloat(num);

    if(m[2]!==undefined){
        var exp = m[2];
        exp = parseInt(exp);
        var a = 1;
        var b = 10;

        if(exp<0){
            exp = -exp;

            while(a < exp){
              b = b * 10;
              a++;
            }
            if(b !== 0){
              num = num/b;
            }
        }
        else{
          while(a < exp){
            b = b * 10;
            a++;
          }
        if(b !== 0)
          num = num*b;
        }
    }

    if (type == 'c' || type == 'C') {
      result1 = (num * 9/5)+32;
      result1 = result1.toFixed(1)+" Farenheit"
      result2 = num + 273.15;
      result2 = result2.toFixed(1) + " Kelvin"
    }
    else if (type == 'k' || type == 'K') {
      result1 = num - 273.15;
      result2 = 1.8 * (num - 273.15) + 32;
      result1 = result1.toFixed(1)+" Celsius"
      result2 = result2.toFixed(1) + " Farenheit"

    }
    else {
      result1 = (num - 32)*5/9;
      result2 = result1 + 273.15;
      result1 = result1.toFixed(1)+" Celsius"
      result2 = result2.toFixed(1) + " Kelvin"
    }

    document.getElementById("converted").setAttribute("col", "gr");
    converted.innerHTML = result1 + ", " +result2;
  }
  else {
    document.getElementById("converted").setAttribute("col", "rd");
    converted.innerHTML = "ERROR! Introduzca algo tipo '-4.2C', '78K', '23f' ...";
  }
}
