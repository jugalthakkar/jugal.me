define(['react', 'underscore','jconfig'], function(React, _,appConfig) {

    var Skill = React.createClass({
        render: function() {
            return (
                <div className="jskill center aligned column">
                  <div className={(this.props.size=="big"?"jlarge":"jsmall") + " circle"}>
                    <span className={(this.props.color||"blue") + " skill ui header " +(this.props.size=="big"?"small jlarge":"tiny jsmall")  }>{this.props.title}</span>
                  </div>
                  <p>
                    <div className={"ui star rating " + (this.props.size=="big"?"huge":"mini")} data-rating={this.props.score}></div>
                  </p>
                </div>
            );
            if (this.props.size == "big") {
                return (
                    <div className="jskill center aligned column">
                    <div className="large ui center aligned inverted blue circular segment">
                      <h2 className="ui header"><span className={(this.props.color||"blue") + " skill" }>{this.props.title}</span></h2>
                    </div>
                    <p>
                      <div className="ui star rating huge"  data-rating={this.props.score}></div>
                    </p>
                  </div>
                );

            } else {
                return (
                    <div className="jskill center aligned column">
                    <div className="small ui inverted blue circular segment">
                      <h4 className="ui header"><span className={(this.props.color||"blue") + " skill" }>{this.props.title}</span></h4>
                    </div>
                    <p>
                      <div className="ui star rating mini"  data-rating={this.props.score}></div>
                    </p>
                  </div>
                );
            }
        }
    });

    var SkillList = React.createClass({
        render: function() {
            var skills = this.props.skills || [];
            var i = 0;
            var primarySkills = _.map(skills.slice(0, 3), function(skill) {
                return (
                    <Skill score={skill.score} title={skill.title} size="big" color={appConfig.colors[i++ % appConfig.colors.length]} />
                );
            });
            var secondarySkills = _.map(skills.slice(3, 15), function(skill) {
                return (
                    <Skill score={skill.score} title={skill.title} size="small"  color={appConfig.colors[i++ % appConfig.colors.length]} />
                );
            });
            var otherSkills = _.map(skills.slice(15), function(skill) {
                return (
                    <div className="ui label skill">{skill.title}</div>
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
    });

    return SkillList;
});
