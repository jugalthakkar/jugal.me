import React from 'react';
import {
  SegmentGroup
} from 'semantic-ui-react';
import _ from 'lodash';
import 'semantic-ui-css/semantic.min.css';

import SkillList from './Skills';
import Bio from './Bio';
import PageHeader from './PageHeader';
import PageSegment from './PageSegment';
import AwardList from './AwardList';
import Footer from './Footer';
import TimeLine from './TimeLine';

const DATA_SOURCE = "jugal.json";
class App extends React.Component {
  state = {

  }

  async loadData() {
    const response = await fetch(DATA_SOURCE);
    const data = await response.json();
    this.setState({ data });
  }
  componentDidMount() {
    this.loadData();
  }
  getGravatarUrl() {
    return "http://www.gravatar.com/avatar/1b1cea99bc1123198e1b4dfd68160471.jpg?s=64";
  }
  render() {
    if (!this.state.data) {
      return (<div>
        <img src="images/Material-Design-Preloader.gif" alt="loader"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 510,
            height: 46,
            marginTop: -23,
            marginLeft: -255
          }} />
      </div>);
    }
    var personalEvents = [{
      type: 'birthday',
      title: 'Born',
      location: this.state.data.personalDetails.placeOfBirth,
      start: new Date(Date.parse(this.state.data.personalDetails.dateOfBirth)),
      inProgress: true,
      country: "india"
    }];
    var workEvents = _.map(_.filter(this.state.data.workHistory, function (work) {
      return work.start != null;
    }), function (work) {
      return {
        type: 'work',
        title: work.title,
        location: work.company,
        start: new Date(Date.parse(work.start)),
        end: new Date(Date.parse(work.end)),
        inProgress: work.inProgress || false,
        country: "india"
      }
    });
    var educationEvents = _.map(this.state.data.education, function (education) {
      return {
        type: 'education',
        title: education.title + " in " + education.major,
        location: education.university,
        start: new Date(Date.parse(education.start)),
        end: new Date(Date.parse(education.end)),
        inProgress: education.inProgress || false,
        country: "india"
      }
    });
    var avatar = this.state.data.personalDetails.avatar || this.getGravatarUrl();
    var quotes = this.state.data.personalDetails.favoriteQuote.split('\n');
    return (
      <SegmentGroup>
        <PageSegment id="header" fullScreen inverted>
          <PageHeader
            title={this.state.data.personalDetails.displayName}
            subTitle={this.state.data.personalDetails.blogTitle}
            subTitleUrl={this.state.data.personalDetails.blog}
            avatar={avatar}
            quoteLine1={quotes[0]}
            quoteLine2={quotes[1]}
            quoteAuthor={this.state.data.personalDetails.favoriteQuoteAuthor}
            quoteSource={this.state.data.personalDetails.favoriteQuoteSource}
            backgroundImage={this.state.data.personalDetails.backgroundImage} />
        </PageSegment>
        <PageSegment id="bio" label="Bio" labelColor="purple">
          <Bio />
        </PageSegment>
        <PageSegment inverted id="skills" label="Skills" labelColor="red">
          <SkillList skills={this.state.data.skillSet} />
        </PageSegment>
        <PageSegment id="career" label="History" labelColor="blue">
          <TimeLine events={_.union(workEvents, educationEvents, personalEvents)} />
        </PageSegment>
        <PageSegment inverted id="awards" label="Awards" labelColor="green">
          <AwardList awards={this.state.data.achievements} />
        </PageSegment>
        <PageSegment id="footer">
          <Footer />
        </PageSegment>
      </SegmentGroup >
    );
  }
}

export default App;
