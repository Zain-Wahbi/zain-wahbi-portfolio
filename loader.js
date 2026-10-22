(function () {
  var loader = document.getElementById('page-loader');
  if (!loader) return;

  var MIN_VISIBLE = 1700;  // ms: shortest time the loader stays, so it never just flashes
  var MAX_WAIT    = 8000;  // ms: failsafe, the loader always leaves after this
  var start       = Date.now();
  var finished    = false;

  document.documentElement.classList.add('is-loading');

  function finish() {
    if (finished) return;
    finished = true;
    var wait = Math.max(0, MIN_VISIBLE - (Date.now() - start));
    setTimeout(function () {
      loader.classList.add('is-done');
      document.documentElement.classList.remove('is-loading');
      setTimeout(function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 900);
    }, wait);
  }

  var pageReady = new Promise(function (resolve) {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', resolve);
  });
  var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();

  Promise.all([pageReady, fontsReady]).then(finish, finish);
  setTimeout(finish, MAX_WAIT);
})();
