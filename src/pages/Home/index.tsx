import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import { Container, Days } from './styles';

const myList = [
  {
    date: '14/05',
    weekday: 'Sex',
    max: 18,
    min: 12,
    description: 'Tempo nublado',
    condition: 'cloud',
  },
  {
    date: '15/05',
    weekday: 'Sáb',
    max: 19,
    min: 13,
    description: 'Tempo nublado',
    condition: 'cloud',
  },
  {
    date: '16/05',
    weekday: 'Dom',
    max: 21,
    min: 13,
    description: 'Tempo nublado',
    condition: 'cloud',
  },
  {
    date: '17/05',
    weekday: 'Seg',
    max: 23,
    min: 12,
    description: 'Parcialmente nublado',
    condition: 'cloudly_day',
  },
  {
    date: '18/05',
    weekday: 'Ter',
    max: 22,
    min: 13,
    description: 'Tempo nublado',
    condition: 'cloud',
  },
  {
    date: '19/05',
    weekday: 'Qua',
    max: 23,
    min: 13,
    description: 'Parcialmente nublado',
    condition: 'cloudly_day',
  },
  {
    date: '20/05',
    weekday: 'Qui',
    max: 24,
    min: 13,
    description: 'Tempo nublado',
    condition: 'cloud',
  },
  {
    date: '21/05',
    weekday: 'Sex',
    max: 26,
    min: 13,
    description: 'Parcialmente nublado',
    condition: 'cloudly_day',
  },
  {
    date: '22/05',
    weekday: 'Sáb',
    max: 22,
    min: 16,
    description: 'Alguns chuviscos',
    condition: 'rain',
  },
  {
    date: '23/05',
    weekday: 'Dom',
    max: 21,
    min: 13,
    description: 'Tempo nublado',
    condition: 'cloud',
  },
];

const Home: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Header />
      <Conditions />
      <Days
        horizontal
        data={myList}
        keyExtractor={item => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </Container>
  );
};

export default Home;
