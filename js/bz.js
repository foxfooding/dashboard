window.bz = {
  searchBugs: function(data) {
    var url = 'https://bugzilla.mozilla.org/rest/bug';
    var opts = {
      url: url,
      data: data
    };
    return $.ajax(opts, function() {}, function(error) {
      console.error('Error fetching', error);
    });
  },
  fetchComments: function(data) {
    var url = 'https://bugzilla.mozilla.org/rest/bug/' + data.id + '/comment';
    var opts = {
      url: url,
      data: data
    };
    return $.ajax(opts, function() {}, function(error) {
      console.error('Error fetching', error);
    });
  }
};
