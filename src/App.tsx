import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Button, Heading, Section } from 'react-bulma-components';

class App extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Heading>Hello TRRAH</Heading>
          <Heading subtitle>It's working</Heading>
          <Button color="primary">My Bulma button</Button>
        </Container>
      </Section>
    );
  }
}

export default App;
