import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Lottie from 'lottie-react-native';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import { Container, Days } from './styles';
import { WeatherContext } from '../../contexts/WeatherContext';
import WeatherLoading from '../../../weather-icon.json';

const Home: React.FC = () => {
  const { weather, loading } = useContext(WeatherContext);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Lottie resizeMode="contain" source={WeatherLoading} autoPlay loop />
      </View>
    );
  }

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
