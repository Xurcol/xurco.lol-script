// Blocks right-click, devtools shortcuts, text selection and dragging.
(function () {
  "use strict";

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener("keydown", function (e) {
    var key = e.keyCode || e.which;
    var ctrl = e.ctrlKey || e.metaKey;

    var blocked =
      key === 123 ||                                  // F12
      (ctrl && e.shiftKey && (key === 73 ||           // Ctrl+Shift+I
                              key === 74 ||           // Ctrl+Shift+J
                              key === 67 ||           // Ctrl+Shift+C
                              key === 75)) ||         // Ctrl+Shift+K
      (ctrl && (key === 85 ||                         // Ctrl+U  view-source
                key === 83 ||                         // Ctrl+S  save
                key === 80));                         // Ctrl+P  print

    if (blocked) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  document.addEventListener("selectstart", function (e) { e.preventDefault(); });
  document.addEventListener("dragstart", function (e) { e.preventDefault(); });
})();
