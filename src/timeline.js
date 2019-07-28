import React from 'react';
import appConfig from './config';
import _ from 'lodash';

class Event extends React.Component {

    render() {
        let eventIcon;
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
            default:
                eventIcon = '';
        }
        return (
            <div className="ui header">

                <i className={"icon " + eventIcon}></i>

                <div className="content">
                    <div className="summary">
                        {this.props.title}

                    </div>
                    <div className="sub header">
                        <i className="wait icon"></i>
                        {appConfig.monthsShort[this.props.start.getMonth()] + ", " + this.props.start.getFullYear()}
                        {this.props.inProgress ? "" : " - " + (appConfig.monthsShort[this.props.end.getMonth()] + ", " + this.props.end.getFullYear())}
                        <br />
                        <i className="marker icon"></i> {this.props.location} <i className={"flag " + this.props.country}></i>
                    </div>
                </div>
            </div>
        );
    }
}


class TimeLine extends React.Component {

    render() {
        const sortedEvents = _.sortBy(this.props.events, function (event) {
            if (event.type === 'education') {
                return 0 - event.end.getTime();
            }
            return 0 - event.start.getTime();
        });
        const events = _.map(sortedEvents, function (event) {
            return (
                <Event
                    key={event.title}
                    type={event.type}
                    title={event.title}
                    start={event.start}
                    end={event.end}
                    inProgress={event.inProgress}
                    location={event.location}
                    country={event.country} />
            );
        });
        return (
            <div className="jevents ui white vertical segment">
                <div className="ui top left massive attached blue label">History</div>
                <div className="ui two column page grid">
                    <div className="column">
                        <div className="ui feed">
                            {events}
                        </div>
                    </div>
                    <div className="ui vertical divider">
                        <i className="empty star icon"></i>
                    </div>
                    <div className="column">
                        <p>Lead Engineer in less than 4 years</p>
                        <p>Leading a cross fuctional agile team of 4-5 from 2013</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default TimeLine;
