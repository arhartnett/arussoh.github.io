var Coding = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Webapps</h1>
          <h2>
            <a href="https://www.kpasa.me" class="coding">KPasa</a><br />
            <small>2014-2015</small>
          </h2>
          <p>
            KPasa is the largest project I've worked on to date. An "event network" for Princeton students, it sought to bridge the gap between student groups (especially performing groups and social clubs) looking to attract more student interest in their performances and events, and students looking for fun things to do on campus. Club-side event creation was easy and anonymous, and user-side interaction with these events was simple. The principle currency of the site was "Hype", a button users could click on events they were excited for. I set the project aside when the Undergraduate Student Government released their own, official version of an app like this.
          </p>
          <h2>
            <span class="coding">YourCongress</span><br />
            <small>2012-2014</small>
          </h2>
          <p>
            My first experience with web design, YourCongress was a web-scraping and data-presentation site for roll-call votes in the United States Congress.
          </p>
        <h1>Games</h1>
          <h2>
            <a href="https://github.com/arussoh/calculusgame" class="coding">Calculus</a> <br />
            <small>2014</small>
          </h2>
          <p>As a final project for my AP Calculus class, I worked in a team of three to develop a platformer game based around our year in the class. I coded (writing entirely JavaScript using the <a href="http://craftyjs.com/" class="coding">CraftyJS engine</a>), while my team members directed the game's art and general story.</p>
      </div>
    )
  }
});

document.getElementById("coding").onclick = function(){
  ReactDOM.render(
    <Coding />,
    document.getElementById("content")
  );
  changeActive('coding');
}
