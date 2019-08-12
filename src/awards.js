import React from 'react';
import _ from 'lodash';

class Award extends React.Component {

  render() {
    return <div className={"jaward ui card " + (this.props.type === "gold" ? "yellow" : "")}>
      <div className="content">
        <a href={this.props.imageThumbnail} rel="noopener noreferrer" target="_blank">
          <img className="right floated mini ui image" src={this.props.imageThumbnail} alt={this.props.imageThumbnail} style={{ height: 100 }} />
        </a>
        <span className="header">{this.props.title}</span>
        <div className="meta">
          <i className={"winner icon " + (this.props.type === "gold" ? "yellow" : "")}></i>
          <div className={"ui mini label " + this.props.ribbonColor}>
            {this.props.category}
          </div><br />
          <i className={"icon " + (this.props.to === "Jugal Thakkar" ? "user" : "users")}></i> {this.props.to}<br />
          <i className="icon marker"></i> {this.props.event}<br />
          <i className="icon wait"></i> {this.props.time}
        </div>
        <div className="description">

          <i className="icon quote left"></i> {this.props.description}
        </div>
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
      <div className="jawards ui inverted vertical segment" id="awards">
        <div className="ui top left massive attached green label">Awards</div>
        <div className="ui page grid">
          <div className="row">
            <div className="column">
              <div className="ui stackable three cards">{awards}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AwardList;