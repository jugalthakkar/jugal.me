define(['react'], function(React) {

    var Bio = React.createClass({

        render: function() {

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

            return (
                <div className="jbio ui white vertical segment">
                <div className="ui top left massive attached purple label">Bio</div>
                <div className="ui page grid">
                    <div className="row">
                        <div className="column">
                            {paragraphs}
                            <p>
                                I am a <em>C# professional, JavaScript expert and an Android fan boy</em>. I forge user-friendly enterprise web applications and enjoy data crunching &amp; visualization. I am passionate about mobile and web technologies &amp; appreciate open source.
                            </p>
                            <p>
                                I have been a preacher of Highcharts since I got acquainted with it at work & now attempt to help developers on <a href="http://stackoverflow.com/tags/highcharts/topusers" target="_blank">Stack Overflow</a> with my little knowledge. I occasionally blog about Highcharts &amp; have reviewed <a href="http://bit.ly/jugalbook2" target="_blank">Highcharts Essentials</a> &amp; <a href="http://bit.ly/jugalbook1" target="_blank">Highcharts Cookbook</a> for <a href="https://www.packtpub.com/" target="_blank">Packt Publishing</a>.
                            </p>
                            <p>
                                I relish playing Ping-Pong, solving puzzles or trying my luck at a Bowling alley. To know of what I learn, experiment and explore visit my blog, <a href="http://ahumbleopinion.com/" target="_blank">A Humble Opinion</a>.
                            </p>
                            <p>
                                I am also proud to be the creator &amp; developer of <a href="http://muresulttracker.tk/" target="_blank">Mumbai University Result Tracker</a>
                            </p>
                        </div>

                    </div>
                </div>
                </div>
            );
        }
    });


    return Bio;
});
