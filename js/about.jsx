var About = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Education</h2>
                    <h3>
                        <a href="http://www.princeton.edu" class="about">Princeton University</a><br />
                        <small>2014-2018</small>
                    </h3>
                    <p>
                        At Princeton, I am studying Public Policy at the <a href="http://wws.princeton.edu/" class="about">Woodrow Wilson School of Public & International Affairs</a>. I am also persuing certificates in Applications of Computing and Creative Writing.
                    </p>
                    <h3>
                        <a href="http://www.crcs.k12.ny.us" class="about">Cobleskill-Richmondville HS</a><br />
                        <small>2010-2014</small>
                    </h3>
                    <p>
                        I graduated CRHS as the Salutatorian of the Class of 2014. I spent my four years there I was the concert master of the symphonic orchestra and the leader of the band's percussion section. I was on an <a href="http://odysseyofthemind.com/" class="about">Odyssey of the Mind</a> team which won third place at the New York State finals. I was also a member of the varsity cross country and track & field teams.
                    </p>
                <h2>Work</h2>
                    <h3>
                        <a href="http://www.howecaverns.com" class="about">Howe Caverns</a><br />
                        <small>2011-2015</small>
                    </h3>
                    <p>
                        Howe Caverns is one of the largest show caves in the country. I was hired as a tour guide, in which I role I was responsible for leading several tours of around 30 people for the 90 minute tour. I was promoted to the position of boatmen, where I was responsible for running the boatride portion of the, which involved coordinating between tour guides and responding to problems throughout the tour. I also worked in the ticket office, where I was responsible for scheduling tours and managing our often very busy lines.
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
