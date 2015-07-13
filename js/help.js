$(document).ready(function() {
  var help = `
    <div class="container">
      <h2>Foxfooding Community Feature Ideas</h2>
      <hr>
      <p>
      Hello! This dashboard is for the Firefox OS community to make requests
      for features and bug fixes. You can think of it like Kickstarter, but we
      use votes.
      </p>
      <br>

      <h3>Want your bug to show up here?</h3>
      <hr>
      <p>
      Bugs require a few small tweaks to show up here.
      <ul>
      <li><strong>For features</strong> -
          Add the 'feature' and 'foxfood' keywords to the bug.</li>
      <li><strong>For defects</strong> -
          Add just the 'foxfood' keyword to the bug.</li>
      </ul>
      </p>
      <br>

      <h3>Get involved!</h3>
      <hr>
      <h4>Voting</h4>
      <p>
      The easiest way for you to help out is to vote on issues that matter to
      you. You can even go further and explain why it matters to you. We do our
      best to factor in all of the feedback that we get.
      </p>
      <h4>Fixing up other people's bug reports</h4>
      <p>
      Sometimes, reports could use some work so that they're easier to
      understand, more concise, and more onlookers are likely to see that their
      issues are already reported. You can go in and fix up reports to help out
      here.
      </p>
      <h4>Contributing directly to Firefox OS</h4>
      <p>
      You can jump in and work on any bug you see in this list, as long as
      there's nobody working on it already.
      </p>
      <h4>Building add-ons</h4>
      <p>
      Many features can also be implemented as add-ons. Check out the
      documentation on <a
      href="https://developer.mozilla.org/en-US/Firefox_OS/Add-ons">how to build
      add-ons</a> if you want to do this.
      </p>
      <br>

      <h3>How we select bugs and features to work on</h3>
      <hr>
      <p>
      We use your feedback here to help us decide on what we're going to build.
      Our vision is that our product development will consist partly of
      community ideas and partly of other ideas about how to advance the web.
      </p>
      <p>
      While we strive to give you the best experience possible with Firefox OS,
      we don't necessarily build features or fix bugs just because they're
      highly voted here.
      </p>
      <p>
      Some features don't fit with our vision for the long-term future of
      Firefox OS, and don't make sense for us to work on. You're welcome to
      build these as add-ons!
      </p>
      <br>

      <h3>Bugs, features, contact info</h3>
      <hr>
      <p>
      <a href="https://github.com/foxfooding/dashboard/issues">
        Please submit feedback and bug reports for this dashboard here.
      </a>
      </p>
      <br>
    </div>
  `;

  $('#help').html(help);
});
