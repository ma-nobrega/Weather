import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Date, City, Temperature } from './styles';

const Header: React.FC = () => {
  return (
    <LinearGradient style={styles.header} colors={['#1ed6ff', '#97c1ff']}>
      <Date>20/05/2021</Date>
      <City>Monte Alto</City>
      <FontAwesome5 name="cloud" size={120} color="#fff" />
      <Temperature>28°</Temperature>
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
