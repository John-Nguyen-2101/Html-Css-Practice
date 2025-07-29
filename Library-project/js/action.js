
  function openAllWraps() {
    const wraps = document.querySelectorAll(".wrap");
    wraps.forEach(function(wrap) {
      wrap.style.display = "block";
    });
  }
  function closeAllWraps() {
    const wraps = document.querySelectorAll(".wrap");
    wraps.forEach(function(wrap) {
      wrap.style.display = "none";
    });
  }
  