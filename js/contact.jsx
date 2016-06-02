var Contact = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Email</h2>
                    <h3><a href="mailto:arh3@princeton.edu" class="contact">arh3@princeton.edu</a></h3>
                <h2>LinkedIn</h2>
                    <h3><a href="https://www.linkedin.com/in/andrew-hartnett-6482b89a" class="contact">/in/andrew-hartnett-6482b89a</a></h3>
                <h2>GitHub</h2>
                    <h3><a href="https://github.com/arussoh" class="contact">/arussoh</a></h3>
            </div>
        )
    }
});

document.getElementById("contact").onclick = function(){
    ReactDOM.render(
        <Contact />,
        document.getElementById("content")
    );
}
