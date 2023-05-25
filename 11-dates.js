var d = new Date();
var dateNumber = Number(d);
alert(dateNumber);
let date1 = Date("2017-06-23");                 // date declaration
alert('Thu Pham: ' + date1);
let date2 = Date("2017");                       // is set to Jan 01
alert('Luong Nguyen: ' + date2);
let date3 = Date("2017-06-23T12:00:00-09:45");  // date - time YYYY-MM-DDTHH:MM:SSZ
alert('Luong Sun: '+ date3);
let date4 = Date("June 23 2017");               // long date format
alert('Luong Sala: ' + date4);
let date5 = Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)");
alert('Luong 93 mai dinh: ' + date5);