import React, { useContext, useState } from 'react';
import { Keyboard, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Header } from 'react-native/Libraries/NewAppScreen';
import {
  Container,
  Back,
  SearchBox,
  Input,
  Icon,
  Date,
  City,
  Temperature,
} from './styles';
import colors from '../../styles/colors';
import api, { key } from '../../services/api';
import { WeatherContext, Weather } from '../../contexts/WeatherContext';

const Search: React.FC = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState<string>();
  const [city, setCity] = useState<Weather>();
  const [error, setError] = useState<string>();
  const { background } = useContext(WeatherContext);

  async function handleSearch(): Promise<void> {
    const response = await api.get(`/weather?key=${key}&city_name=${input}`);
    if (response.data.by === 'default') {
      setError('Humm, cidade não encontrada!');
      setInput('');
      setCity(null);
      Keyboard.dismiss();
    }
    console.log(response.data.results);
    setCity(response.data.results);
    setInput('');
    Keyboard.dismiss();
  }

  return (
    <Container>
      <Back onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={16} color={colors.textStrong} />
        <Text style={{ fontSize: 24, color: colors.textStrong, marginLeft: 6 }}>
          Voltar
        </Text>
      </Back>
      <SearchBox>
        <Input
          value={input}
          onChangeText={value => {
            setInput(value);
          }}
          placeholder="Ex: São Paulo, SP"
        />
        <Icon
          onPress={() => {
            handleSearch();
          }}
        >
          <Ionicons name="search" size={24} color={colors.white} />
        </Icon>
      </SearchBox>
      {error && (
        <Text style={{ marginTop: 32, color: colors.text }}>{error}</Text>
      )}
      {city && (
        <LinearGradient style={styles.header} colors={background}>
          <Date>{city?.date}</Date>
          <City>{city?.city}</City>
          <Ionicons name="cloud" size={120} color={colors.white} />
          <Temperature>{city.temp}°</Temperature>
        </LinearGradient>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '56%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 16,
    borderRadius: 8,
  },
});

export default Search;
