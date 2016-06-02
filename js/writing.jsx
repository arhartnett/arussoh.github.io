var Writing = React.createClass({
    render: function() {
        return (
            <div>
                <h3>
                    <a href="https://www.youtube.com/c/howithappens" class="creative">How it Happens</a><br />
                    <small>2013-2016</small>
                </h3>
                <p>
                    How it Happens is an educational YouTube series.
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Acri0U3TAE8" frameborder="0" allowfullscreen></iframe>
                </p>
                <h3>
                    <a href="http://www.triangleshow.com/" class="creative">Princeton Triangle Club</a><br />
                    <small>2015-2016</small>
                </h3>
                    <p>
                        I am a writer for the Princeton Triangle Club, a sketch musical comedy group. I have thus far been involved with the 2015 spring sketch show, A Wrinkle Intime, and the main stage fall 2015 show, Tropic Blunder.
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/mp6Nwtc4fyc?list=PLD0Xl55ohYOrQP8BoKt8v1NmOtL-Dpa23" frameborder="0" allowfullscreen></iframe>
                    </p>
                <h3>
                    <a href="writing/alegion.html" class="creative">American Legion Oratorical Contest</a><br />
                    <small>2014</small>
                </h3>
                <p>
                    The American Legion Oratorical Contest is an annual scholarship for high school students. My senior year, I was invited to represent my school in the program. The requirements were to prepare an eight minute speech about the constitution, and the rights and responsibilities of a citizen (linked above). This speech was to be delivered on stage, with no notes, podium, or amplification. I made it through local, regional, and district competitions to make it state finals, where I placed first, allowing me to compete at the national finals.
                </p>
            </div>
        )
    }
});

document.getElementById("writing").onclick = function(){
    ReactDOM.render(
        <Writing />,
        document.getElementById("content")
    );
}
