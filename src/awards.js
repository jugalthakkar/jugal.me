import React from 'react';
import _ from 'lodash';

class Award extends React.Component {

  render() {
    return <div className={"jaward ui card " + (this.props.type === "gold" ? "yellow" : "")}>
      <div className="image">
        <div className={"ui ribbon label " + this.props.ribbonColor}>
          <i className={"winner icon " + (this.props.type === "gold" ? "yellow" : "")}></i>{this.props.category}
        </div>
        <img src={this.props.imageThumbnail} alt={this.props.imageThumbnail} />
      </div>
      <div className="content">
        <span className="header">{this.props.title}</span>
        <div className="meta">
          <i className={"icon " + (this.props.to === "Jugal Thakkar" ? "user" : "users")}></i> {this.props.to}<br />
          <i className="icon marker"></i> {this.props.event}<br />
          <i className="icon wait"></i> {this.props.time}
        </div>
        <div className="description">
          <i className="icon quote left"></i> {this.props.description}
        </div>
        <div className="extra content"></div>
      </div>
    </div>
  }
}


class AwardList extends React.Component {

  render() {
    var awards = _.map(this.props.awards, function (award) {
      return (
        <Award category={award.category}
          key={award.title + award.when}
          title={award.title}
          event={award.where}
          time={award.when}
          to={award.who}
          description={award.description}
          type={award.type}
          ribbonColor="blue"
          imageThumbnail={award.imageThumbnail} />
      );
    });
    return (
      <div className="jawards ui inverted vertical segment">
        <div className="ui top left massive attached green label">Awards</div>
        <div className="ui page grid">
          <div className="row">
            <div className="column">
              <div className="ui cards">{awards}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AwardList;