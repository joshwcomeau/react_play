var Playground = React.createClass({
  render: function() {
    return (
      <div className="playground">
        <Dot width={200} height={200} />
        <DotForm />
      </div>
    );
  }
});

var Dot = React.createClass({
  render: function() {
    var dotStyles = {
      width:  this.props.width,
      height: this.props.height
    }

    return (
      <div className="dot" style={dotStyles}></div>
    );
  }
});

var DotForm = React.createClass({
  updateDot: function(e) {
    e.preventDefault();
    // placeholder behavior
    alert("Updated!");
  },
  render: function() {
    return (
      <form className="dotForm" onSubmit={this.updateDot}>
        <input type="text" placeholder="width" /> x <input type="text" placeholder="height" />
        <input type="submit" value="Update The Dot!" />
      </form>
    );
  }
});


React.render(
  <Playground />,
  document.getElementById('content')
);