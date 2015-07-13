$(document).ready(function() {
   $('body').on('keyup', '.tab-pane input', function() {
      var tabPane = $(this).closest('.tab-pane');
      var rex = new RegExp($(this).val(), 'i');
      var bugs = tabPane.find('tr');
      bugs.hide();
      bugs.filter(function() {
        return rex.test($(this).text());
      }).show();
    });
});
