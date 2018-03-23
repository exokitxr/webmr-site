(function() {
  function addListeners() {
    var teaser = $('#teaser');
    var howItWorks = $('#how-it-works');
    var exploded = $('#exploded-graphic');
    var learnMore = $('#learn-more');

    teaser.on('click', function() {
      $('html, body').animate({
        scrollTop: howItWorks.offset().top,
      }, 500, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(howItWorks);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    });

    learnMore.on('click', function() {
      $('html, body').animate({
        scrollTop: exploded.offset().top,
      }, 500, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(exploded);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    });
  }

  window.addEventListener('load', function () {
    addListeners();
  });
})();
