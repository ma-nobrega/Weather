import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import colors from '../../styles/colors';
import ConditionsItem from '../ConditionsItem';

import { Container } from './styles';

const Conditions: React.FC = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <Container>
      <ConditionsItem
        key="1"
        color={colors.textStrong}
        icon="weather-windy"
        text={String(weather?.wind_speedy)}
      />
      <ConditionsItem
        key="2"
        color={colors.textStrong}
        icon="weather-sunset-up"
        text={String(weather?.sunrise)}
      />
      <ConditionsItem
        key="3"
        color={colors.textStrong}
        icon="weather-sunset-down"
        text={String(weather?.sunset)}
      />
      <ConditionsItem
        key="4"
        color={colors.textStrong}
        icon="water-outline"
        text={String(weather?.humidity)}
      />
    </Container>
  );
};

export default Conditions;
