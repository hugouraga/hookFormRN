import React from 'react';

//styled
import {
  Container,
  Title
} from './styles';

const Header = ({ children }) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
};

//make this component available to the app
export default Header;
