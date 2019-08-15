import React from 'react';
import {
  Container, Image, Card, Icon, Label
} from 'semantic-ui-react';
import Link from './Link';
import _ from 'lodash';

class AwardList extends React.Component {

  render() {
    var awardCards = _.map(this.props.awards, function (award) {
      const color = award.type === "gold" ? "yellow" : "";
      return <Card color={color} header={award.title} key={award.title + award.when}>
        <Card.Content>
          <Link href={award.imageThumbnail}>
            <Image size="mini" floated="right"
              src={award.imageThumbnail}
              alt={award.imageThumbnail}
              style={{ height: 100, width: 100 }}
            />
          </Link>
          <Card.Header>{award.title}</Card.Header>
          <Card.Meta>
            <Icon name="winner" color={color} /> <Label size="mini" color="blue">{award.category}</Label>
            <br />
            <Icon name={award.who === "Jugal Thakkar" ? "user" : "users"} /> {award.who}
            <br />
            <Icon name="map marker alternate" /> {award.where}
            <br />
            <Icon name="clock outline" /> {award.when}
          </Card.Meta>
          <Card.Description>
            <Icon name="quote left" /> {award.description}
          </Card.Description>
        </Card.Content>
      </Card>
    });
    return (
      <Container >
        <Card.Group stackable doubling itemsPerRow="3">
          {awardCards}
        </Card.Group>
      </Container>
    );
  }
}

export default AwardList;