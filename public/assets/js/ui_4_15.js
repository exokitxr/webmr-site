(function() {
  window.onload = function() {
    let startedZeoSectionAutoplay = false;
    // let startedFpsSectionAutoplay = false;

    const installCode = document.getElementById('installCode');
    const zeoSection = document.getElementById('speed');
    // const fpsSection = document.getElementById('fpsSection');
    const zeoVid = document.getElementById('zeo');
    const overlay1 = document.getElementById('zeoOverlay');
    // const chromeOverlay = document.getElementById('chromeOverlay');
    // const exoOverlay = document.getElementById('exoOverlay');
    // const fpsChrome = document.getElementById('fpsChrome');
    // const fpsExo = document.getElementById('fpsExo');

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

    overlay1.addEventListener('click', function() {
      if (zeoVid.paused) {
        zeoVid.play();
        overlay1.classList.add('hide');
      } else {
        zeoVid.pause();
        overlay1.classList.remove('hide');
      }
    });

    installCode.addEventListener('click', function() {
      selectText('installCode', true);
    });

    window.addEventListener('scroll', function () {
      // const fpsSectionTop = fpsSection.getBoundingClientRect().top;
      const zeoSectionTop = zeoSection.getBoundingClientRect().top;
      if (zeoSectionTop < 100 && !startedZeoSectionAutoplay) {
        zeoVid.play();
        overlay1.classList.add('hide');
        startedZeoSectionAutoplay = true;
      }
    });
  };
})();
