var Comment = React.createClass({
  render : function(){
    var rawMarkup=marked(this.props.children.toString(),{sanitize:false});
    return  (
      <div className="comment">
        <h2 className="author">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html:rawMarkup}} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render : function  () {
    var commentNodes=this.props.comments.map(function(comment){
      return (
          <Comment author={comment.author}>
            {comment.text}
          </Comment>
      );
    });
    return (
      <div className="commentList">
          {commentNodes}
      </div>
    );
  }
});


var CommentForm = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    var author=React.findDOMNode(this.refs.author).value.toString();
    var text=React.findDOMNode(this.refs.text).value.toString();
    if(!author || !text){
      return;
    }
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    this.props.onCommentSubmit({author:author,text:text});
  },
  render : function  () {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your name..." ref="author"/>
          <input type="text" placeholder="Say something..."  ref="text"/>
          <input type="submit" value="post" />
      </form>
    );
  }
});

var CommentBox = React.createClass({
    handleCommentSubmit:function(comment){
        var comments=this.state.comments.concat([comment]);
        this.setState({comments:comments});
    },
    loadComments:function(){
      $.ajax({
        url:this.props.url,
        dataType:'json',
        cache:false,
        success:function(response){
          this.setState({comments:response});
        }.bind(this),
        error:function(xhr,status,err){
          console.error(this.props.url,status,err);
        }.bind(this)
      });
    },
    getInitialState:function(){
      return {
        comments:[
        {author: "Pete Hunt", text: "This _is_ one comment"},
        {author: "Jordan Walke", text: "This is *another* comment"}
        ]
      }
    },
    componentDidMount:function(){
      this.loadComments();
      setInterval(this.loadComments,this.props.pollingInterval);
    },
    render: function() {

        return (
          <div className="commentBox">
            <h1>Comments</h1>
            <CommentList comments={this.state.comments} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          </div>
      );
    }
});

React.render(
  <CommentBox url="comments.json" pollingInterval={2000} />,
  document.getElementById('content')
);

