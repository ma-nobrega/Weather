import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { WeatherContext } from '../../contexts/WeatherContext';
import { Date, City, Temperature } from './styles';

const Header: React.FC = () => {
  const { background, weather, icon } = useContext(WeatherContext);

  return (
    <LinearGradient style={styles.header} colors={background}>
      <Date>{weather?.date}</Date>
      <City>{weather?.city_name}</City>
      <FontAwesome5 name={icon.name} size={120} color={icon.color} />
      <Temperature>{weather?.temp}°</Temperature>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '56%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 8,
  },
});

export default Header;
