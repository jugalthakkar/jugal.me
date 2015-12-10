define(['react'], function(React) {

    var Footer = React.createClass({
        render: function() {
            return (
                <div className="jfooter ui vertical inverted purple segment">
                  <div className="ui page grid temp">
                    <div className="column">
                      <p>
                        More @ <a href="https://www.linkedin.com/in/jugalthakkar" target="_blank">Linked In</a> | <a href="http://stackoverflow.com/users/1566575/jugal-thakkar" target="_blank">Stack Overflow</a> | <a href="https://github.com/jugalthakkar" target="_blank">GitHub</a>
                      </p>
                      <p>
                        Reach Me @ mail[at]jugal[dot]me
                      </p>
                      <div className="ui message">All views expressed are my own and do not reflect those of my employer</div>
                    </div>
                  </div>
                </div>
            );
        }
    });

    return Footer;
});
