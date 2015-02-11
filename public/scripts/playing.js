var Dot = React.createClass({
  render: function() {
    var dotStyles = {
      width:  this.props.width,
      height: this.props.height
    }
    console.log(dotStyles)
    return (
      <div className="dot" style={dotStyles}></div>
    );
  }
});

React.render(
  <Dot width={200} height={200} />,
  document.getElementById('content')
);