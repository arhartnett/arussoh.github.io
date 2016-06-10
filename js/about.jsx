var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Education</h1>
          <h2>
            <a href="http://www.princeton.edu" class="about">
              Princeton University
            </a>
            <br />
            <small>2014-2018</small>
          </h2>
          <p>
            I'm a rising Junior in the <a href="http://wws.princeton.edu/">Woodrow Wilson School of Public and International Affairs</a>. My concentration is in environmental policy. I am also persuing certificates in Applications of Computing and Creative Writing.
          </p>
          <h3>Activities</h3>
            <p>
              I'm a writer for the <a href="http://www.triangleshow.com/">Princeton Triangle Club</a>, a 125 year tradition of musical sketch comedy.
            </p>
            <p>
              I compete with the <em><a href="https://debate.princeton.edu/">Princeton Debate Panel</a></em>, and served as director of our annual, 1,000+ participant high school debate tournament.
            </p>
            <h2>
              <a href="http://www.crcs.k12.ny.us" class="about">Cobleskill-Richmondville HS</a><br />
              <small>2010-2014</small>
            </h2>
              <p>
                I graduated CRHS as the Salutatorian of the Class of 2014. I spent my four years there as the concert master of the symphonic orchestra and the leader of the band's percussion section. I was on an <a href="http://odysseyofthemind.com/" class="about">Odyssey of the Mind</a> team which won third place at the New York State finals. I was also a member of the varsity cross country and track & field teams.
              </p>
          <h1>Work</h1>
            <h2>
              <a href="http://www.howecaverns.com" class="about">Howe Caverns</a><br />
              <small>2011-2015</small>
            </h2>
            <p>
              I was hired as a tour guide at the busiest tourist attraction in my home town. I was soon promoted to the position of "boatman" (named after the underground boat ride which every tour features), where I was responsible for managing tours. In my last year I worked in the ticket office, where I scheduled the tours and handled customer service issues.
            </p>
      </div>
    );
  }
});

var about = function() {
  ReactDOM.render(
    <About />,
    document.getElementById('content')
  );
  changeActive('about')
}

// Load about page as landing page
about();
// About
document.getElementById("name").onclick = function(){
  about();
}
document.getElementById("about").onclick = function(){
  about();
}
