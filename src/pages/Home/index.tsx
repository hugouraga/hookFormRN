// import liraries
import React from 'react';
import { ScrollView } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';

import {
  Container,
} from './styles';

function Home() {
  return (
    <>
      <Header>Formulários</Header>
      <Container>
        <ScrollView >
          <Card title='registar cartão' />
          <Card title='registar dados do usuário' />
        </ScrollView>
      </Container>
    </>
  );
}

export default Home;
