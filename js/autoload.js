$(document).ready(function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    var event = new CustomEvent('endreached');
    window.dispatchEvent(event);
  }
});
