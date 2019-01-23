$(document).ready(function() {
  $('nav a.inside-link').click(function(e) {
    e.preventDefault();
    var strAnchor = $(this).attr('href');
    $('body,html').stop(true, true).animate({
      scrollTop: $(strAnchor).offset().top
    }, 900);
  });
});