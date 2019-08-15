import React from 'react';
import {
    Segment, Label
} from 'semantic-ui-react';

class PageSegment extends React.Component {
    render() {
        const fullScreenStyles = {
            height: '100vh',
            padding: 0
        };
        return <Segment inverted={this.props.inverted} vertical
            as="section"
            id={this.props.id}
            style={this.props.fullScreen ? fullScreenStyles : { padding: '5em 0 7em 0' }}>
            {
                this.props.fullScreen ?
                    this.props.children :
                    <>
                        {
                            this.props.label ?
                                <Label size="massive" color={this.props.labelColor} attached="top left" style={{ textTransform: 'uppercase' }}>
                                    {this.props.label}
                                </Label>
                                : ''
                        }
                        {this.props.children}
                    </>
            }
        </Segment>
    }
};

export default PageSegment;
