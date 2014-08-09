
$(document).ready(function () {
  function WordColor() {
    return '#' + Math.random().toString(10).slice(2, 8);
  };
 $("#button").on("click", function() {
    $("#button").css('color', WordColor());
  });
});
