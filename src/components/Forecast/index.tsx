import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text } from 'react-native';
import { ForecastProps } from '../../contexts/WeatherContext';
import { IconConvert } from '../../utils/condition';
import colors from '../../styles/colors';

import { Container, Date, Temp } from './styles';

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  const { name, color } = IconConvert(data.condition);
  return (
    <Container>
      <Date>{data.weekday}</Date>
      <MaterialCommunityIcons name={name} size={28} color={color} />
      <Temp>
        <Text
          style={{ fontSize: 18, fontWeight: 'bold', color: colors.textStrong }}
        >
          {data.max}°
        </Text>
        <Text style={{ color: colors.text }}>{data.min}°</Text>
      </Temp>
    </Container>
  );
};

export default Forecast;
