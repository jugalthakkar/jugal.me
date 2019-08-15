import React from 'react';

class XHeader extends React.Component {
    render() {
        const content = this.props.text || this.props.children || this.props.href;
        if (this.props.href.indexOf('#') !== 0) {
            return <a href={this.props.href} target="_blank" rel="noopener noreferrer">{content}</a>
        }
        return <a href={this.props.href}>{content}</a>
    }
};

export default XHeader;
