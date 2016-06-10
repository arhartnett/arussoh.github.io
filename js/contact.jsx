var Contact = React.createClass({
  render: function() {
    return (
      <div>
        <h1>LinkedIn</h1>
        <h2><a href="https://www.linkedin.com/in/andrew-hartnett-6482b89a" class="contact">/in/andrew-hartnett-6482b89a</a></h2>
        <h1>GitHub</h1>
        <h2><a href="https://github.com/arussoh" class="contact">/arussoh</a></h2>
      </div>
    )
  }
});

var contact = function() {
  ReactDOM.render(
    <Contact />,
    document.getElementById("contact")
  );
}
contact();
