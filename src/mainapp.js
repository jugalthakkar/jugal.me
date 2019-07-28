import React from 'react';
import SkillList from './skills';
import Bio from './bio';
import Header from './header';
import AwardList from './awards';
import Footer from './footer';
import TimeLine from './timeline';
import _ from 'lodash';

class App extends React.Component {
    state = {

    }

    async loadData() {
        const response = await fetch(new Request(this.props.url));
        const data = await response.json();
        this.setState({ data });
    }
    componentDidMount() {
        this.loadData();
    }
    componentDidUpdate() {
        // $('.ui.rating').rating({
        //     maxRating: 10
        // }).rating('disable');
        // //$('.ui.sticky').sticky();
        // scroll.init();
    }
    getGravatarUrl() {
        return "http://www.gravatar.com/avatar/1b1cea99bc1123198e1b4dfd68160471.jpg?s=64";
    }
    render() {
        if (!this.state.data) {
            return (<div className="jhomepage">
                <img className="loader" src="images/Material-Design-Preloader.gif" alt="loader" />
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
            <div className="homepage ui segments">
                <section className="cd-section visible">
                    <Header
                        title={this.state.data.personalDetails.displayName}
                        subTitle={this.state.data.personalDetails.blogTitle}
                        subTitleUrl={this.state.data.personalDetails.blog}
                        avatar={avatar}
                        quoteLine1={quotes[0]}
                        quoteLine2={quotes[1]}
                        quoteAuthor={this.state.data.personalDetails.favoriteQuoteAuthor}
                        quoteSource={this.state.data.personalDetails.favoriteQuoteSource}
                        backgroundImage={this.state.data.personalDetails.backgroundImage} />
                </section>
                <section className="cd-section">
                    <Bio />
                </section>
                <section className="cd-section">
                    <SkillList skills={this.state.data.skillSet} />
                </section>
                <section className="cd-section">
                    <TimeLine events={_.union(workEvents, educationEvents, personalEvents)} />
                </section>
                <section className="cd-section">
                    <AwardList awards={this.state.data.achievements} />
                </section>
                <section className="cd-section">
                    <Footer />
                </section>
                <nav className="cd-vertical-nav">
                    <div className="ui vertical icon buttons">
                        <div className="ui button purple cd-prev inactive" >
                            <i className="arrow up icon"></i>
                        </div>
                        <div className="ui button purple cd-next">
                            <i className="arrow down icon"></i>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default App;