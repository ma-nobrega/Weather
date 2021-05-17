import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text } from 'react-native';
import { ForecastProps } from '../../contexts/WeatherContext';
import { IconConvert } from '../../utils/condition';

import { Container, Date, Temp } from './styles';

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  const { name, color } = IconConvert(data.condition);
  return (
    <Container>
      <Date>{data.date}</Date>
      <MaterialCommunityIcons name={name} size={28} color={color} />
      <Temp>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.max}°</Text>
        <Text>{data.min}°</Text>
      </Temp>
    </Container>
  );
};

export default Forecast;
