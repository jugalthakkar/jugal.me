define(['react'], function(React) {


    var Header = React.createClass({
        render: function() {
            return (
                <div className="jheader ui inverted vertical masthead segment">
              <div className="header-background" style={{backgroundImage: 'url(' + this.props.backgroundImage + ')'}}>
                  <div className="ui page grid">
                      <div className="column">
                          <h1 className="ui inverted header">
                              <img className="ui avatar image" src={this.props.avatar} />
                              <div className="content">
                                  {this.props.title}
                                  <div className="sub header"><a href={this.props.subTitleUrl}>{this.props.subTitle}</a></div>
                              </div>
                          </h1>
                      </div>
                  </div>
                  <div className="row quote">
                      <span className="ui header large" title="Pursue excellence, and success will follow">{this.props.quoteLine1}</span>
                      <p>{this.props.quoteLine2}
                          <br />- <a href={this.props.quoteSource} target="_blank">{this.props.quoteAuthor}</a></p>
                  </div>
              </div> < /div>
            );
        }
    });

    return Header;
});
