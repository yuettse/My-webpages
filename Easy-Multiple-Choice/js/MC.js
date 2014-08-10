$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var ans = $('input[name=question1]:checked').val();
    ans = '<div>'+ ans +'</div>';
    $('body').html(ans);
  });
});
