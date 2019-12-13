function fly() {
  var body = document.getElementsByTagName('body')[0];
  var body_width = body.clientWidth;
  var stop_widht = body_width - 100;

  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == stop_widht) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = 100 + Math.sin(pos/100)*25 + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}