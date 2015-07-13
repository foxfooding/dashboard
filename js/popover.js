$(document).ready(function() {
  $('body').on('bugsloaded', function() {
    var popovers = $('[data-toggle="popover"]');
    popovers.popover();
    popovers.on('show.bs.popover', function(e) {
      var id = parseInt($(this).data('id'));
      popovers.not(`[data-id="${id}"]`).popover('hide');

      if ($(this).data('loaded')) {
        return;
      }

      var self = this;
      bz.fetchComments({
        id: id
      }).done(function(data) {
        var bugLink = `https://bugzilla.mozilla.org/show_bug.cgi?id=${id}`;
        var voteLink = `https://bugzilla.mozilla.org/page.cgi?id=voting/user.html&bug_id=${id}#vote_${id}`;

        var text = data.bugs[id].comments[0].text;
        text = text.replace(/\n/g, '<br>');
        text += `<br><br>
                 <a href="${bugLink}" target="_blank">See More</a> |
                 <a href="${voteLink}" target="_blank">Vote</a>`;

        $(self).attr('data-loaded', true);
        $(self).attr('data-content', text);
        $(self).popover('show');
      });
    });
  });
});
