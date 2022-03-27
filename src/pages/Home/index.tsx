import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import Card from '../../components/Card';
import Header from '../../components/Header';

import {
  Container,
} from './styles';

function Home() {

  const navigation = useNavigation<any>();

  return (
    <>
      <Header>Formulários</Header>
      <Container>
        <ScrollView >
          <Card
            title='registar cartão'
            onPress={() => { navigation.navigate('FormCard') }}
          />
          <Card
            title='registar dados do usuário'
            onPress={() => navigation.navigate('FormUser')}
          />
        </ScrollView>
      </Container>
    </>
  );
}

export default Home;
