import React from 'react';
import {
    Container, Header, Image
} from 'semantic-ui-react';
import Link from './Link';


class PageHeader extends React.Component {

    render() {
        return <header style={{
            backgroundImage: 'url(' + this.props.backgroundImage + ')',
            zIndex: -2,
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <Container>
                <Header inverted size="huge">
                    <Image avatar src={this.props.avatar} alt="Jugal Thakkar's avatar" />
                    <Header.Content>
                        {this.props.title}
                        <Header.Subheader>{this.props.subTitle}</Header.Subheader>
                    </Header.Content>
                </Header>
            </Container>

            <Header inverted size="large" title="Pursue excellence, and success will follow"
                style={{
                    position: 'absolute',
                    bottom: 18,
                    textAlign: 'right',
                    right: 50
                }}>
                {this.props.quoteLine1}
                <Header.Subheader>
                    <p>{this.props.quoteLine2} <br />
                        - <Link href={this.props.quoteSource} text={this.props.quoteAuthor} /></p>
                </Header.Subheader>
            </Header>
        </header>;
    }
}

export default PageHeader;