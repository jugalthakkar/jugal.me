import React from 'react';
import {
  Container, Icon, Button
} from 'semantic-ui-react';
import Link from './Link';
class Footer extends React.Component {

  render() {
    return <footer>
      <Container>
        <Link href="https://jug.al/linkedin">
          <Button color='linkedin'><Icon name='linkedin' /> LinkedIn</Button>
        </Link>
        <Link href="https://jug.al/stackoverflow">
          <Button color='orange'><Icon name='stack overflow' /> Stack Overflow</Button>
        </Link>
        <Link href="https://jug.al/github">
          <Button color='grey'><Icon name='github' /> GitHub</Button>
        </Link>

        <Button color='green' disabled>
          <Icon name='mail' /> mail[at]jugal[dot]me
        </Button>
      </Container>
    </footer >
  }
}

export default Footer;
