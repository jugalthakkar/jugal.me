import React from 'react';

class Footer extends React.Component {

    render() {
        return <div className="jfooter ui vertical inverted purple segment">
        <div className="ui page grid temp">
          <div className="column">
            <p>
              More @ <a href="https://jug.al/linkedin" target="_blank" rel="noopener noreferrer">Linked In</a> | <a href="https://jug.al/stackoverflow" rel="noopener noreferrer" target="_blank">Stack Overflow</a> | <a href="https://jug.al/github" rel="noopener noreferrer" target="_blank">GitHub</a>
            </p>
            <p>
              Reach Me @ mail[at]jugal[dot]me
            </p>
            {/* <div className="ui message">All views expressed are my own and do not reflect those of my employer</div> */}
          </div>
        </div>
      </div>
    }
}

export default Footer;
