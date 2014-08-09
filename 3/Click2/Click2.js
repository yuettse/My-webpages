
$(document).ready(function () {
var size = 500;
var helper = true;
  function WordColor() {
    return '#' + Math.random().toString(10).slice(2, 8);
  };
  function WordSize() {
    if( helper == true ) {
      size -= 50;
      if( size <= 50 ) {
        helper = false;
      }
    } else {
      if (size >= 500) {
        helper = true;
      }
      size += 50;
    }
    return size;
  }
 $("#button").on("click", function() {
    $("#button").css('color', WordColor());
  });

   $("#button").on("click", function() {
    $("#button").css('font-size', WordSize());
  });
  
  
  
});
