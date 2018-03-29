(function() {
  function prepScrolls() {
    window.addEventListener('scroll', function(evt) {
      const logos = document.getElementById('logos');
      const logoItems = document.querySelectorAll('.platform');
      // const top = logos.getBoundingClientRect().top;
      const height = window.innerHeight;
      logoItems.forEach(function(item) {
        if (item.getBoundingClientRect().top < height / 2) {
          if (!item.classList.contains('animated')) {
            item.classList.add('animated');
          }
        } else {
          if (item.classList.contains('animated')) {
            item.classList.remove('animated');
          }
        }
      })
      // if (top < height / 2) {
      //   if (!logoItems[0].classList.contains('animated')) {
      //     logoItems.forEach(function(item) {
      //       item.classList.add('animated');
      //     });
      //   }
      // } else {
      //   if (logoItems[0].classList.contains('animated')) {
      //     logoItems.forEach(function(item) {
      //       item.classList.remove('animated');
      //     });
      //   }
      // }
    });
  }

  function selectText(elementId) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(elementId));
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(elementId));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  }

  function addListeners() {
    const codeInstall = document.getElementById('code-install');
    const codeRun = document.getElementById('code-run');
    const teaser = $('#teaser');
    const howItWorks = $('#what-is');
    const exploded = $('#exploded-graphic');
    const learnMore = $('#learn-more');

    codeInstall.addEventListener('click', function(evt) {
      selectText(evt.target.id);
    });

    codeRun.addEventListener('click', function(evt) {
      selectText(evt.target.id);
    });

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
    prepScrolls();
  });
})();
