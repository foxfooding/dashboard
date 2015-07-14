$(document).ready(function() {
  $('[role="tab"]').on('show.bs.tab', function(e) {
    var text;
    switch ($(e.target).attr('href')) {
    case '#features':
      text = `Add the 'feature' and 'foxfood' keywords to your feature bugs.`;
      break;
    case '#bugs':
      text = `Add just the 'foxfood' keyword to your defect bugs.`;
      break;
    }
    $('#bug-keywords').attr('data-original-title', text);
  });
});
