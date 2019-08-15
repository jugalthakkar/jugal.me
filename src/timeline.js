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
        const diffInMS = (this.props.inProgress ? Date.now() : this.props.end.getTime()) - this.props.start.getTime();
        const durationMonths = diffInMS / (1000 * 60 * 60 * 24 * 365 / 12);
        const durationYears = Math.floor(durationMonths / 12);
        const addtionalMonths = Math.floor(durationMonths % 12)

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
                        &nbsp;({durationYears > 0 ? `${durationYears}y${addtionalMonths}m` : `${addtionalMonths}m`})
                        <br />
                        <i className="marker icon"></i> {this.props.location} <i className={"flag " + this.props.country}></i>
                    </div>
                </div>
            </div>
        );
    }
}


class TimeLine extends React.Component {

    renderEventColumn(events) {
        return <div className="column">
            <div className="ui feed">
                {
                    _.map(events, event => <Event
                        key={event.title}
                        type={event.type}
                        title={event.title}
                        start={event.start}
                        end={event.end}
                        inProgress={event.inProgress}
                        location={event.location}
                        country={event.country} />
                    )
                }
            </div>
        </div>
    }

    render() {
        const sortedEvents = _.sortBy(this.props.events, function (event) {
            if (event.type === 'education') {
                return 0 - event.end.getTime();
            }
            return 0 - event.start.getTime();
        });

        const midway = sortedEvents.length / 2;
        return (
            <div className="jevents ui white vertical segment" id="career">
                <div className="ui top left massive attached blue label">History</div>
                <div className="ui two column stackable page grid">
                    {
                        this.renderEventColumn(sortedEvents.filter((event, index) => index < midway))
                    }                     
                    {
                        this.renderEventColumn(sortedEvents.filter((event, index) => index >= midway))
                    }
                </div>
            </div>
        );
    }
}
export default TimeLine;
