alert("Hello");

setTimeout(function () {
    printMessages(8);
}, 2000);

function printMessages(numberOfMessages) {
  for (var i = 0; i < numberOfMessages; i++) {
    alert("Thu Pham " + i);
  }
}
