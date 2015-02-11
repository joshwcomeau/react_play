var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});


var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="David Duke">THIS WEBSITE SUCKS!</Comment>
        <Comment author="Tammy Weinstein">I like the colors ^^</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        <br /><br /><br />This is where you add new comments!
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">{this.props.author}</h2>
        {this.props.children}
      </div>
    );
  }
})

React.render(
  <CommentBox />,
  document.getElementById('content')
);