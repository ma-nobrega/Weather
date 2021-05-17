import React, { useContext } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import { Container, Days } from './styles';
import { WeatherContext } from '../../contexts/WeatherContext';

const Home: React.FC = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <Container>
      <Menu />
      <Header />
      <Conditions />
      <Days
        horizontal
        showsHorizontalScrollIndicator={false}
        data={weather?.forecast}
        keyExtractor={item => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </Container>
  );
};

export default Home;
