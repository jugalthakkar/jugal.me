import React from 'react';
import _ from 'lodash';
import appConfig from './config';
import { Rating } from 'semantic-ui-react';

class Skill extends React.Component {

  render() {
    return <div className="jskill center aligned column">
      <div className={(this.props.size === "big" ? "jlarge" : "jsmall") + " circle"}>
        <span className={(this.props.color || "blue") + " skill ui header " + (this.props.size === "big" ? "small jlarge" : "tiny jsmall")}>{this.props.title}</span>
      </div>

      <Rating
        icon="star"
        size={(this.props.size === "big" ? "huge" : "mini")}
        rating={this.props.score}
        maxRating={10}
        disabled
      />

    </div>
  }
}


class SkillList extends React.Component {

  render() {
    var skills = this.props.skills || [];
    var i = 0;
    var primarySkills = _.map(skills.slice(0, 3), function (skill) {
      return (
        <Skill key={skill.title} score={skill.score} title={skill.title} size="big" color={appConfig.colors[i++ % appConfig.colors.length]} />
      );
    });
    var secondarySkills = _.map(skills.slice(3, 15), function (skill) {
      return (
        <Skill key={skill.title} score={skill.score} title={skill.title} size="small" color={appConfig.colors[i++ % appConfig.colors.length]} />
      );
    });
    var otherSkills = _.map(skills.slice(15), function (skill) {
      return (
        <div key={skill.title} className="ui label skill">{skill.title}</div>
      );
    });
    return (
      <div className="jskills ui inverted vertical segment">
        <div className="ui top left massive attached inverted red label">Skills</div>
        <div className="ui three column center aligned stackable page grid">
          {primarySkills}
        </div>
        <div className="ui six column center aligned doubling page grid">
          {secondarySkills}
        </div>
        <div className="ui center aligned doubling page grid">
          <div className="ui labels">
            {otherSkills}
          </div>
        </div>
      </div>
    );
  }
}

export default SkillList;