import React from 'react';

class Bio extends React.Component {

    render() {
        var paragraphs = [];
        // _.map(this.props.bio.,function(work){
        //     return {
        //         type:'work',
        //         title:work.title,
        //         location:work.company,
        //         start:new Date(Date.parse(work.start)),
        //         end:new Date(Date.parse(work.end)),
        //         inProgress:work.inProgress || false,
        //         country:"india"
        //     }
        //   });
        return <div className="jbio ui white vertical segment">
            <div className="ui top left massive attached purple label">Bio</div>
            <div className="ui page grid">
                <div className="row">
                    <div className="column">


                        <p>
                            I am a passionate engineer at heart who loves to build simple & elegant products. I have a very strong <a href="#career">full stack experience of over 9 years</a> with both startups and large organisations. My programming journey started even earlier, in 2006, when I built several <a href="https://ahumbleopinion.com/the-classic-snake-game/" rel="noopener noreferrer" target="_blank">C++ games</a> during my engineering days. I have devoted a fair share of my career into architecture & designing of applications and solutions.
                        </p>

                        <p>
                            Programming is also a hobby & I throughly enjoy immersing myself & writing code every day. I guess I am gifted and can pick up new <a href="#skills">technlogies</a> quickly and easily switch from Java to Javascript to CSS to SQL to C# in seconds. The <a href="#awards">numerous awards</a> and <a href="#career">quick promotions</a> that I have received throughout my career are testament to my quality of work and expertise. These days I am hooked on to Reactjs & AWS. 
                            </p>                            

                        <p>
                            I believe in sharing knowledge and have garnered a modest reputation of <a href="https://jug.al/stackoverflow" rel="noopener noreferrer" target="_blank">~12,000 on Stack Overflow</a> for my contributions. This led me to the honor of reviewing two books, <a href="http://bit.ly/jugalbook2" rel="noopener noreferrer" target="_blank">Highcharts Essentials</a> &amp; <a href="http://bit.ly/jugalbook1" rel="noopener noreferrer" target="_blank">Highcharts Cookbook</a>, for Packt Publishing. I am the proud creator of <a href="https://muresulttracker.tk/" target="_blank" rel="noopener noreferrer">Mumbai University Result Tracker</a> and <a href="https://tincheck.tk/" target="_blank" rel="noopener noreferrer">Tin Check</a>, serving to the student and accounting communities respectively.
                            </p>

                        <p>
                            I am a big advocate for Agile development and have been part of and led high performing agile teams. I have been a Certified Scrum Master and Certified Scrum Product Owner until October 2018. I relish playing Ping-Pong, solving puzzles or trying my luck at a Bowling alley. I occassionally blog @ <a href="http://ahumbleopinion.com/" rel="noopener noreferrer" target="_blank"> A Humble Opinion</a>.
                            </p>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default Bio;