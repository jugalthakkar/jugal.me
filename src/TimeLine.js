import React from 'react';
import _ from 'lodash';
import {
    Header, Grid, GridColumn, Feed, Icon, Flag
} from 'semantic-ui-react';
import appConfig from './config';


class TimeLine extends React.Component {

    renderEventColumn(events) {
        return <GridColumn>
            <Feed>
                {
                    _.map(events, event => {
                        let eventIcon;
                        switch (event.type) {
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
                        const diffInMS = (event.inProgress ? Date.now() : event.end.getTime()) - event.start.getTime();
                        const durationMonths = diffInMS / (1000 * 60 * 60 * 24 * 365 / 12);
                        const durationYears = Math.floor(durationMonths / 12);
                        const additionalMonths = Math.floor(durationMonths % 12)

                        return (<Header icon={eventIcon} key={event.title}>
                            {event.title}
                            <Header.Subheader>
                                <Icon name="clock outline" />
                                {appConfig.monthsShort[event.start.getMonth()] + ", " + event.start.getFullYear()}
                                {event.inProgress ? "" : " - " + (appConfig.monthsShort[event.end.getMonth()] + ", " + event.end.getFullYear())}
                                &nbsp;({durationYears > 0 ? `${durationYears}y${additionalMonths}m` : `${additionalMonths}m`})
                            <br />
                                <Icon name="map marker alternate" /> {event.location} <Flag name={event.country} />
                            </Header.Subheader>
                        </Header>
                        );
                    }
                    )
                }
            </Feed>
        </GridColumn>
    }

    render() {
        const sortedEvents = _.sortBy(this.props.events, function (event) {
            if (event.type === 'education') {
                return 0 - event.end.getTime();
            }
            return 0 - event.start.getTime();
        });

        const midway = sortedEvents.length / 2;
        return (<Grid container stackable columns="2">
            {
                this.renderEventColumn(sortedEvents.filter((event, index) => index < midway))
            }
            {
                this.renderEventColumn(sortedEvents.filter((event, index) => index >= midway))
            }
        </Grid>);
    }
}
export default TimeLine;
