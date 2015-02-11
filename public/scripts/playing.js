var Playground = React.createClass({
  getInitialState: function() {
    return { data: { dotWidth: 220, dotHeight: 150} }
  },
  updateDot: function(dot) {
    var dotProps = this.state.data;
    var newDotProps = _.merge(dotProps, dot);
    console.log(dot);

    this.setState({data: newDotProps});
  },
  render: function() {
    var dotData = {
      width:  this.state.data.dotWidth,
      height: this.state.data.dotHeight
    };
    return (
      <div className="playground">
        <Dot data={dotData} />
        <DotForm onDotSubmit={this.updateDot} />
      </div>
    );
  }
});

var Dot = React.createClass({
  render: function() {
    return (
      <div className="dot" style={this.props.data}></div>
    );
  }
});

var DotForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    
    this.props.onDotSubmit({
      dotWidth:  this.refs.width.getDOMNode().value,
      dotHeight: this.refs.height.getDOMNode().value
    });


  },
  render: function() {
    return (
      <form className="dotForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="width" ref="width" /> x 
        <input type="text" placeholder="height" ref="height" />
        <input type="submit" value="Update The Dot!" />
      </form>
    );
  }
});


React.render(
  <Playground />,
  document.getElementById('content')
);