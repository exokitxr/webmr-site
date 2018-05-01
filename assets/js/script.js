(function() {
  window.onload = function() {
    const aboutLink = document.getElementById('about-link');
    const aboutExokit = $('#about-exokit');
    const codeInstall = document.getElementById('code-install');
    const codeRun = document.getElementById('code-run');

    function selectText(elementId, copyIt) {
      if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(elementId));
        range.select();
        if (copyIt) document.execCommand('Copy');
      } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(elementId));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        if (copyIt) document.execCommand('Copy');
      }
    }

    codeInstall.addEventListener('click', function(evt) {
      selectText(evt.target.id);
    });

    codeRun.addEventListener('click', function(evt) {
      selectText(evt.target.id);
    });

    aboutLink.addEventListener('click', function(evt) {
      $('html, body').animate({
        scrollTop: aboutExokit.offset().top,
      }, 500, function() {
        // Callback after animation
        // Must change focus!
        aboutExokit.focus();
        if (aboutExokit.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          aboutExokit.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          aboutExokit.focus(); // Set focus again
        };
      });
    });
  };
})();