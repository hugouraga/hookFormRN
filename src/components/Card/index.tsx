import React from 'react';
import { cardProps } from './interface';

import {
  Container,
  Title
} from './styles';

const Card: React.FC<cardProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Card;
