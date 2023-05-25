var pi = 3.156;
var zeroFixedPi = pi.toFixed(0);      // 3   
alert(zeroFixedPi);
var twoFixedPi = pi.toFixed(2);       //3.16
alert(twoFixedPi);       
var twoPrecisionPi = pi.toPrecision(2) //3.2
alert(twoPrecisionPi);
var piNumber = pi.valueOf();            //3.156
alert(piNumber);