import React from 'react';
import {
    Segment, Grid, GridColumn, Header, HeaderContent, HeaderSubheader, Image, GridRow
} from 'semantic-ui-react';
import Link from './link';


class HeaderPage extends React.Component {

    render() {
        return <Segment inverted vertical
            id="header"
            style={{ padding: '1em 0 0 0' }}>
            <header style={{
                backgroundImage: 'url(' + this.props.backgroundImage + ')',
                zIndex: -2,
                width: '100%',
                height: '100vh',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
                <Grid container>
                    <GridColumn>
                        <Header size="huge" inverted>
                            <Image avatar src={this.props.avatar} alt="Jugal Thakkar's avatar" />
                            <HeaderContent>
                                <>
                                    {this.props.title}
                                    <HeaderSubheader>
                                        <Link href={this.props.subTitleUrl} text={this.props.subTitle} />
                                    </HeaderSubheader>
                                </>
                            </HeaderContent>
                        </Header>
                    </GridColumn>

                </Grid>
                <GridRow style={{
                    position: 'absolute',
                    bottom: 18,
                    textAlign: 'right',
                    right: 50
                }}>
                    <Header size="large" title="Pursue excellence, and success will follow" inverted>
                        {this.props.quoteLine1}
                        <HeaderSubheader>
                            <p>{this.props.quoteLine2} <br />
                                - <Link href={this.props.quoteSource} text={this.props.quoteAuthor} /></p>
                        </HeaderSubheader>
                    </Header>
                </GridRow>
            </header>
        </Segment >;
    }
}

export default HeaderPage;