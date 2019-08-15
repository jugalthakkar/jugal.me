import React from 'react';
import {
  Container, Icon, Button
} from 'semantic-ui-react';
import Link from './Link';
class Footer extends React.Component {
  render() {
    const email = 'career[at]jugal[dot]me';
    return <footer>
      <Container>
        <Link href="https://jug.al/linkedin">
          <Button color='linkedin'><Icon name='linkedin' /> LinkedIn</Button>
        </Link>
        <Link href="https://jug.al/stackoverflow">
          <Button color='orange'><Icon name='stack overflow' /> Stack Overflow</Button>
        </Link>
        <Link href="https://jug.al/github">
          <Button color='black'><Icon name='github' /> GitHub</Button>
        </Link>
        <Button color='green' onClick={() => window.location = `mailto:${email}`.replace('[dot]', '.').replace('[at]', '@')}>
          <Icon name='mail' /> {email}
        </Button>
      </Container>
    </footer >
  }
}

export default Footer;
