import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Conditions from '../../components/Conditions';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Header />
      <Conditions />
    </Container>
  );
};

export default Home;
