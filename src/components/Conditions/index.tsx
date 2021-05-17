import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import ConditionsItem from '../ConditionsItem';

import { Container } from './styles';

const Conditions: React.FC = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <Container>
      <ConditionsItem
        key="1"
        color="#E6E8EB"
        icon="weather-windy"
        text={String(weather?.wind_speedy)}
      />
      <ConditionsItem
        key="2"
        color="#E6E8EB"
        icon="weather-sunset-up"
        text={String(weather?.sunrise)}
      />
      <ConditionsItem
        key="3"
        color="#E6E8EB"
        icon="weather-sunset-down"
        text={String(weather?.sunset)}
      />
      <ConditionsItem
        key="4"
        color="#1ec9ff"
        icon="water-outline"
        text={String(weather?.humidity)}
      />
    </Container>
  );
};

export default Conditions;
