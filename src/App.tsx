import React, { Component } from 'react';
import './App.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Button, Heading, Section } from 'react-bulma-components';

import Number from './containers/Number';

import { StoreState } from './types/index';

class App extends Component{
  render() {
    return (
      <Section>
      <Container>
      <Heading>Hello TRRAH</Heading>
      <Heading subtitle>It's working</Heading>
      </Container>
      <Container>
      <Number />
      </Container>
      </Section>
    );
  }
}

export default App;
