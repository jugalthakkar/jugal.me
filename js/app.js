$(function() {

    var appConfig = {
        colors: ['green', 'yellow', 'red', 'blue', 'orange'],
        monthsLong : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };


    var Award = React.createClass({displayName: "Award",
        render: function() {
            return (
                React.createElement("div", {className: "jaward ui card " + (this.props.type=="gold"?"yellow":"")}, 
                  React.createElement("div", {className: "image"}, 
                    React.createElement("div", {className: "ui ribbon label " + this.props.ribbonColor}, 
                    React.createElement("i", {className: "winner icon " + (this.props.type=="gold"?"yellow":"") }), this.props.category
                  ), 
                  React.createElement("img", {src: this.props.imageThumbnail})
                ), 
                React.createElement("div", {className: "content"}, 
                  React.createElement("span", {className: "header"}, this.props.title), 
                  React.createElement("div", {className: "meta"}, 
                    React.createElement("i", {className: "icon " + (this.props.to=="Jugal Thakkar" ? "user" :"users")}), " ", this.props.to, React.createElement("br", null), 
                    React.createElement("i", {className: "icon marker"}), " ", this.props.event, React.createElement("br", null), 
                    React.createElement("i", {className: "icon wait"}), " ", this.props.time
                  ), 
                  React.createElement("div", {className: "description"}, 
                    React.createElement("i", {className: "icon quote left"}), " ", this.props.description
                  ), 
                  React.createElement("div", {className: "extra content"})
                )
              )
            );
        }
    });

    var AwardList = React.createClass({displayName: "AwardList",
        render: function() {
            var i = 0;
            var awards = _.map(this.props.awards, function(award) {
                return (
                  React.createElement(Award, {
                    category: award.category, 
                    title: award.title, 
                    event: award.where, 
                    time: award.when, 
                    to: award.who, 
                    description: award.description, 
                    type: award.type, 
                    ribbonColor: "blue", 
                    imageThumbnail: award.imageThumbnail})
                );
            });
            return (
                React.createElement("div", {className: "jawards ui inverted vertical segment"}, 
                  React.createElement("div", {className: "ui top left massive attached green label"}, "Awards"), 
                  React.createElement("div", {className: "ui page grid"}, 
                    React.createElement("div", {className: "row"}, 
                      React.createElement("div", {className: "column"}, 
                        React.createElement("div", {className: "ui cards"}, awards)
                      )
                      )
                    )
                  )
            );
        }
    });

    var Skill = React.createClass({displayName: "Skill",
        render: function() {
            return (
                React.createElement("div", {className: "jskill center aligned column"}, 
                  React.createElement("div", {className: (this.props.size=="big"?"jlarge":"jsmall") + " circle"}, 
                    React.createElement("span", {className: (this.props.color||"blue") + " skill ui header " +(this.props.size=="big"?"small jlarge":"tiny jsmall")  }, this.props.title)
                  ), 
                  React.createElement("p", null, 
                    React.createElement("div", {className: "ui star rating " + (this.props.size=="big"?"huge":"mini"), "data-rating": this.props.score})
                  )
                )
            );
            if(this.props.size=="big"){
              return (
                  React.createElement("div", {className: "jskill center aligned column"}, 
                    React.createElement("div", {className: "large ui center aligned inverted blue circular segment"}, 
                      React.createElement("h2", {className: "ui header"}, React.createElement("span", {className: (this.props.color||"blue") + " skill"}, this.props.title))
                    ), 
                    React.createElement("p", null, 
                      React.createElement("div", {className: "ui star rating huge", "data-rating": this.props.score})
                    )
                  )
              );

            }else{
               return (
                  React.createElement("div", {className: "jskill center aligned column"}, 
                    React.createElement("div", {className: "small ui inverted blue circular segment"}, 
                      React.createElement("h4", {className: "ui header"}, React.createElement("span", {className: (this.props.color||"blue") + " skill"}, this.props.title))
                    ), 
                    React.createElement("p", null, 
                      React.createElement("div", {className: "ui star rating mini", "data-rating": this.props.score})
                    )
                  )
              );
            }
        }
    });

    var SkillList = React.createClass({displayName: "SkillList",
        render: function() {
            var skills = this.props.skills || [];
            var i = 0;
            var primarySkills = _.map(skills.slice(0, 3), function(skill) {
                return (
                    React.createElement(Skill, {score: skill.score, title: skill.title, size: "big", color: appConfig.colors[i++ % appConfig.colors.length]})
                );
            });
            var secondarySkills = _.map(skills.slice(3,15), function(skill) {
                return (
                    React.createElement(Skill, {score: skill.score, title: skill.title, size: "small", color: appConfig.colors[i++ % appConfig.colors.length]})
                );
            });
            var otherSkills = _.map(skills.slice(15), function(skill) {
                return (
                    React.createElement("div", {className: "ui label skill"}, skill.title)
                );
            });
            return (
                React.createElement("div", {className: "jskills ui inverted vertical segment"}, 
                  React.createElement("div", {className: "ui top left massive attached inverted red label"}, "Skills"), 
                  React.createElement("div", {className: "ui three column center aligned stackable page grid"}, 
                    primarySkills
                  ), 
                  React.createElement("div", {className: "ui six column center aligned doubling page grid"}, 
                    secondarySkills
                  ), 
                  React.createElement("div", {className: "ui center aligned doubling page grid"}, 
                      React.createElement("div", {className: "ui labels"}, 
                        otherSkills
                      )
                  )
                )
            );
        }
    });

    var Event = React.createClass({displayName: "Event",
        render: function() {
            var eventIcon;
            switch (this.props.type) {
                case 'work':
                    eventIcon = 'suitcase';
                    break;
                case 'education':
                    eventIcon = 'student';
                    break;
                case 'birthday':
                    eventIcon = 'birthday';
                    break;
            }
             return (
                React.createElement("div", {className: "ui header"}, 

                  React.createElement("i", {className: "icon " + eventIcon}), 

                  React.createElement("div", {className: "content"}, 
                    React.createElement("div", {className: "summary"}, 
                        this.props.title

                    ), 
                    React.createElement("div", {className: "sub header"}, 

                        React.createElement("i", {className: "wait icon"}), 
                            appConfig.monthsShort[this.props.start.getMonth()] + ", " + this.props.start.getFullYear(), 
                            this.props.inProgress ? "" : " - " + (appConfig.monthsShort[this.props.end.getMonth()] + ", " + this.props.end.getFullYear()), 
React.createElement("br", null), 
                        React.createElement("i", {className: "marker icon"}), " ", this.props.location, " ", React.createElement("i", {className: "flag " + this.props.country})

                    )
                  )
                )
            );
            return (
                React.createElement("div", {className: "jevent event"}, 
                  React.createElement("div", {className: "massive label"}, 
                    React.createElement("i", {className: "icon " + eventIcon})
                  ), 
                  React.createElement("div", {className: "content"}, 
                    React.createElement("div", {className: "summary"}, 
                        this.props.title, 
                        React.createElement("div", {className: "date"}, 
                            appConfig.monthsShort[this.props.start.getMonth()] + ", " + this.props.start.getFullYear(), 
                            this.props.inProgress ? "" : " - " + (appConfig.monthsShort[this.props.end.getMonth()] + ", " + this.props.end.getFullYear())

                        )
                    ), 
                    React.createElement("div", {className: "meta"}, 
                        React.createElement("i", {className: "marker icon"}), " ", this.props.location, " ", React.createElement("i", {className: "flag " + this.props.country})
                    )
                  )
                )
            );
        }
    });

    var TimeLine = React.createClass({displayName: "TimeLine",
        render: function() {
          var sortedEvents=_.sortBy(this.props.events,function(event){
            if(event.type==='education'){
                return 0-event.end.getTime();
            }
            return 0-event.start.getTime();
          });
          var events = _.map(sortedEvents, function(event) {
                return (
                    React.createElement(Event, {
                      type: event.type, 
                      title: event.title, 
                      start: event.start, 
                      end: event.end, 
                      inProgress: event.inProgress, 
                      location: event.location, 
                      country: event.country})
                );
            });
            return (
                React.createElement("div", {className: "jevents ui vertical segment"}, 
                  React.createElement("div", {className: "ui top left massive attached blue label"}, "History"), 
                  React.createElement("div", {className: "ui page grid"}, 
                    React.createElement("div", {className: "column"}, 
                      React.createElement("div", {className: "ui feed"}, 
                        events
                      )
                    )
                )
                )
            );
        }
    });

    var Header=React.createClass({displayName: "Header",
      render: function(){
        return (
          React.createElement("div", {className: "jheader ui vertical masthead segment"}, 
              React.createElement("div", {className: "header-background", style: {backgroundImage: 'url(' + this.props.backgroundImage + ')'}}, 
                  React.createElement("div", {className: "ui page grid"}, 
                      React.createElement("div", {className: "column"}, 
                          React.createElement("h1", {className: "ui inverted sticky header"}, 
                              React.createElement("img", {className: "ui avatar image", src: this.props.avatar}), 
                              React.createElement("div", {className: "content"}, 
                                  this.props.title, 
                                  React.createElement("div", {className: "sub header"}, React.createElement("a", {href: this.props.subTitleUrl}, this.props.subTitle))
                              )
                          )
                      )
                  ), 
                  React.createElement("div", {className: "row quote"}, 
                      React.createElement("span", {className: "ui header large", title: "Pursue excellence, and success will follow"}, this.props.quoteLine1), 
                      React.createElement("p", null, this.props.quoteLine2, 
                          React.createElement("br", null), "- ", React.createElement("a", {href: this.props.quoteSource, target: "_blank"}, this.props.quoteAuthor))
                  )
              )
          )
        );
      }
    });

    var Bio=React.createClass({displayName: "Bio",

      render: function(){

        var paragraphs=[];
        // _.map(this.props.bio.,function(work){
        //     return {
        //         type:'work',
        //         title:work.title,
        //         location:work.company,
        //         start:new Date(Date.parse(work.start)),
        //         end:new Date(Date.parse(work.end)),
        //         inProgress:work.inProgress || false,
        //         country:"india"
        //     }
        //   });

           return (
            React.createElement("div", {className: "jbio ui vertical segment bio"}, 
                React.createElement("div", {className: "ui top left massive attached purple label"}, "Bio"), 
                React.createElement("div", {className: "ui page grid"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "column"}, 
                            paragraphs, 
                            React.createElement("p", null, 
                                "I am a ", React.createElement("em", null, "C# professional, JavaScript expert and an Android fan boy"), ". I forge user-friendly enterprise web applications and enjoy data crunching & visualization. I am passionate about mobile and web technologies & appreciate open source."
                            ), 
                            React.createElement("p", null, 
                                "I have been a preacher of Highcharts since I got acquainted with it at work & now attempt to help developers on ", React.createElement("a", {href: "http://stackoverflow.com/tags/highcharts/topusers", target: "_blank"}, "Stack Overflow"), " with my little knowledge. I occasionally blog about Highcharts & have reviewed ", React.createElement("a", {href: "http://bit.ly/jugalbook2", target: "_blank"}, "Highcharts Essentials"), " & ", React.createElement("a", {href: "http://bit.ly/jugalbook1", target: "_blank"}, "Highcharts Cookbook"), " for ", React.createElement("a", {href: "https://www.packtpub.com/", target: "_blank"}, "Packt Publishing"), "."
                            ), 
                            React.createElement("p", null, 
                                "I relish playing Ping-Pong, solving puzzles or trying my luck at a Bowling alley. To know of what I learn, experiment and explore visit my blog, ", React.createElement("a", {href: "http://ahumbleopinion.com/", target: "_blank"}, "A Humble Opinion"), "."
                            ), 
                            React.createElement("p", null, 
                                "I am also proud to be the creator & developer of ", React.createElement("a", {href: "http://muresulttracker.tk/", target: "_blank"}, "Mumbai University Result Tracker")
                            )
                        )

                    )
                )
                )
        );
      }
    });

    var Footer = React.createClass({displayName: "Footer",
        render: function() {
            return (
                React.createElement("div", {className: "jfooter ui vertical inverted purple segment"}, 
                  React.createElement("div", {className: "ui page grid temp"}, 
                    React.createElement("div", {className: "column"}, 
                      React.createElement("p", null, 
                        "More @ ", React.createElement("a", {href: "https://www.linkedin.com/in/jugalthakkar", target: "_blank"}, "Linked In"), " | ", React.createElement("a", {href: "http://stackoverflow.com/users/1566575/jugal-thakkar", target: "_blank"}, "Stack Overflow"), " | ", React.createElement("a", {href: "https://github.com/jugalthakkar", target: "_blank"}, "GitHub")
                      ), 
                      React.createElement("p", null, 
                        "Reach Me @ mail[at]jugal[dot]me"
                      ), 
                      React.createElement("div", {className: "ui message"}, "All views expressed are my own and do not reflect those of my employer")
                    )
                  )
                )
            );
        }
    });



    var HomePage = React.createClass({displayName: "HomePage",
        getInitialState: function() {
            return {

            };
        },
        loadData: function() {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function(response) {
                    this.setState({
                        data: response
                    });
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err);
                }.bind(this)
            });
        },
        componentDidMount: function() {
            this.loadData();
        },
        componentDidUpdate: function() {
            $('.ui.rating').rating({
                maxRating: 10
            }).rating('disable');
            $('.ui.sticky').sticky();
        },
         getGravatarUrl:function(){
            return "http://www.gravatar.com/avatar/1b1cea99bc1123198e1b4dfd68160471.jpg?s=64";
      },
        render: function() {
          if(!this.state.data){
            return (React.createElement("div", {className: "jhomepage"}));
          }
          var personalEvents=[{
                type:'birthday',
                title:'Born',
                location:this.state.data.personalDetails.placeOfBirth,
                start:new Date(Date.parse(this.state.data.personalDetails.dateOfBirth)),
                inProgress:true,
                country:"india"
            }];
          var workEvents=_.map(_.select(this.state.data.workHistory,function(work){return work.start!=null;}),function(work){
            return {
                type:'work',
                title:work.title,
                location:work.company,
                start:new Date(Date.parse(work.start)),
                end:new Date(Date.parse(work.end)),
                inProgress:work.inProgress || false,
                country:"india"
            }
          });
          var educationEvents=_.map(this.state.data.education,function(education){
            return {
                type:'education',
                title:education.title + " in " + education.major,
                location:education.university,
                start:new Date(Date.parse(education.start)),
                end:new Date(Date.parse(education.end)),
                inProgress:education.inProgress || false,
                country:"india"
            }
          });
            var avatar=this.state.data.personalDetails.avatar || this.getGravatarUrl();
            var quotes=this.state.data.personalDetails.favoriteQuote.split('\n');
            return (
                React.createElement("div", {className: "homepage ui segments"}, 
                  React.createElement(Header, {
                    title: this.state.data.personalDetails.displayName, 
                    subTitle: this.state.data.personalDetails.blogTitle, 
                    subTitleUrl: this.state.data.personalDetails.blog, 
                    avatar: avatar, 
                    quoteLine1: quotes[0], 
                    quoteLine2: quotes[1], 
                    quoteAuthor: this.state.data.personalDetails.favoriteQuoteAuthor, 
                    quoteSource: this.state.data.personalDetails.favoriteQuoteSource, 
                    backgroundImage: this.state.data.personalDetails.backgroundImage}), 
                  React.createElement(Bio, null), 
                  React.createElement(SkillList, {skills: this.state.data.skillSet}), 
                  React.createElement(TimeLine, {events: _.union(workEvents,educationEvents,personalEvents)}), 
                  React.createElement(AwardList, {awards: this.state.data.achievements}), 
                  React.createElement(Footer, null)
                )
            );
        }
    });

    React.render(
        React.createElement(HomePage, {url: "jugal.json"}),
        document.getElementById('reactRoot')
    );
});
