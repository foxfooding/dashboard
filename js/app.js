$(document).ready(function() {

var features = $('#features');
var bugs = $('#bugs');

var render = function(params) {
  var elements = '';
  // XXX/drs: Remove when 'votes' API glue lands.
  //params.bugs.forEach(function(bug) {
  //  bug.votes = Math.round(Math.random() * 100);
  //});

  var maxVotes = 0;
  params.bugs.forEach(function(bug) {
    if (bug.votes > maxVotes) {
      maxVotes = bug.votes;
    }
  });

  params.bugs.forEach(function(bug) {
    var bugLink = `https://bugzilla.mozilla.org/show_bug.cgi?id=${bug.id}`;
    var voteLink = `https://bugzilla.mozilla.org/page.cgi?id=voting/user.html&bug_id=${bug.id}#vote_${bug.id}`;
    var color = generateColor(bug.votes, maxVotes);
    var element = `
      <tr style="background-color: ${color}">
        <td class="text-center">
          <strong><a href="${bugLink}" target="_blank">Bug ${bug.id}</a></strong>
        </td>
        <td colspan="5">
          <a data-toggle="popover" data-placement="auto" title="<a
             href='${bugLink}' target='_blank'>Bug ${bug.id}</a> -
             ${escapeHTML(bug.summary)} (${bug.votes} Votes)"
             data-content="Loading..." data-html="true" data-container="body"
             data-id="${bug.id}" data-trigger="click">
            ${escapeHTML(bug.summary)}
          </a>
        </td>
        <td>${escapeHTML(bug.component)}</td>
        <td class="text-center" data-value="${bug.votes}">${bug.votes}
        (<a href="${voteLink}" target="_blank">Vote</a>)</td>
      </tr>
    `;
    elements += element;
  });

  var rendered = `
    <table class="bug-list table table-bordered table-responsive sortable">
      <thead>
        <tr>
          <th class="text-center">Bug #</th>
          <th colspan="5">Summary</th>
          <th>Component</th>
          <th class="text-center" data-defaultsort="desc">Voting</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <div class="input-group"> <span class="input-group-addon">Search</span>
            <input type="text" class="form-control" placeholder="Type search here...">
          </div>
        </tr>
        ${elements}
      </tbody>
    </table>
  `;

  return rendered;
};

bz.searchBugs({
  product: 'Firefox OS',
  resolution: '---',
  keywords: 'feature, foxfood',
}).done(function(data) {
  features.html(render(data));
  $.bootstrapSortable();
  $('body').trigger('bugsloaded');
});

bz.searchBugs({
  product: 'Firefox OS',
  resolution: '---',
  keywords: 'foxfood'
}).done(function(data) {
  // Remove features from this list.
  data.bugs = data.bugs.filter(function(bug) {
    return bug.keywords.indexOf('feature') === -1;
  });

  bugs.html(render(data));
  $.bootstrapSortable();
  $('body').trigger('bugsloaded');
});

});
