import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { WeatherProvider } from './src/contexts/WeatherContext';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <WeatherProvider>
        <StatusBar />
        <Routes />
      </WeatherProvider>
    </NavigationContainer>
  );
};

export default App;
