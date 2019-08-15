import React from 'react';
import {
    Container
} from 'semantic-ui-react';

import Link from './Link';


class Bio extends React.Component {

    render() {
        const paraStyle = { fontSize: '1.6em' };
        return <Container>
            <p style={paraStyle}>
                I am a passionate engineer at heart who loves to build simple and elegant products.
                I have a very strong <Link href="#career">full stack experience of over 9 years</Link> with both startups and large organizations.
                My programming journey started even earlier, in 2006, when I built several <Link href="https://ahumbleopinion.com/the-classic-snake-game/">C++ games</Link> during my engineering days.
                I have devoted a fair share of my career into architecture and designing of applications and solutions.
            </p>

            <p style={paraStyle}>
                Programming is also a hobby and I thoroughly enjoy immersing myself and writing code every day.
                I guess I am gifted and can pick up new <Link href="#skills">technologies</Link> quickly and easily switch from Java to Javascript to CSS to SQL to C# in seconds.
                The <Link href="#awards">numerous awards</Link> and <Link href="#career">quick promotions</Link> that I have received throughout my career are testament to my quality of work and expertise.
                These days I am hooked on to Reactjs and AWS.
            </p>

            <p style={paraStyle}>
                I believe in sharing knowledge and have garnered a modest reputation of <Link href="https://jug.al/stackoverflow">~12,000 on Stack Overflow</Link> for my contributions.
                This led me to the honor of reviewing two books, <Link href="http://bit.ly/jugalbook2">Highcharts Essentials</Link> and <Link href="http://bit.ly/jugalbook1">Highcharts Cookbook</Link>, for Packt Publishing.
                I am the proud creator of <Link href="https://muresulttracker.tk/">Mumbai University Result Tracker</Link> and <Link href="https://tincheck.tk/">Tin Check</Link>, serving to the student and accounting communities respectively.
            </p>

            <p style={paraStyle}>
                I am a big advocate for Agile development and have been part of and led high performing agile teams.
                I have been a Certified Scrum Master and Certified Scrum Product Owner until October 2018.
                I relish playing Ping-Pong, solving puzzles or trying my luck at a Bowling alley.
                I occasionally blog @ <Link href="http://ahumbleopinion.com/"> A Humble Opinion</Link>.
            </p>
        </Container>;
    }
}

export default Bio;