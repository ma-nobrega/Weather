import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Menu>Menu</Menu>
      <Header />
    </Container>
  );
};

export default Home;
