import React from 'react';
import ConditionsItem from '../ConditionsItem';

import { Container } from './styles';

const Conditions: React.FC = () => {
  return (
    <Container>
      <ConditionsItem key="1" icon="weather-windy" text="7 km/h" />
      <ConditionsItem key="2" icon="weather-sunset-up" text="5:22 am" />
      <ConditionsItem key="3" icon="weather-sunset-down" text="6:00 pm" />
      <ConditionsItem key="4" icon="water-outline" text="65" />
    </Container>
  );
};

export default Conditions;
