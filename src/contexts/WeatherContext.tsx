import React, { createContext, ReactNode, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import api, { key } from '../services/api';

interface WeatherProps {
  children: ReactNode;
}

export interface ForecastProps {
  data: {
    date: string;
    max: number;
    min: number;
    condition: string;
    weekday: string;
  };
}

export interface Weather {
  city: string;
  city_name: string;
  condition_code: string;
  currently: string;
  forecast: ForecastProps;
  humidity: number;
  sunrise: string;
  sunset: string;
  temp: string;
  date: string;
  wind_speedy: string;
}

interface WeatherContextData {
  errorMessage: string;
  loading: boolean;
  weather: Weather | undefined;
  icon: { color: string; name: string };
  background: string[];
}

export const WeatherContext = createContext({} as WeatherContextData);

export const WeatherProvider = ({
  children,
}: WeatherProps): React.ReactNode => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<Weather>();
  const [icon, setIcon] = useState({ name: 'cloud', color: '#fff' });
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

  useEffect(() => {
    async function Localization(): Promise<void> {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permissão negada para acessar localização ');
        setLoading(false);
        return;
      }
      const { coords } = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = coords;
      const response = await api.get(
        `/weather?key=${key}&lat=${latitude}&lon=${longitude}`,
      );
      setWeather(response.data.results);
      if (response.data.results.currently === 'noite') {
        setBackground(['#0c3741', '#0f2f61']);
      }
      if (response.data.results.condition_slug) {
        if (response.data.results.condition_slug === 'clear_day') {
          setIcon({ name: 'sunny', color: '#fff' });
        }
        if (response.data.results.conditizon_slug === 'rain') {
          setIcon({ name: 'rainy', color: '#fff' });
        }
        if (response.data.results.condition_slug === 'storm') {
          setIcon({ name: 'rainy', color: '#fff' });
        }
      }
      setLoading(false);
    }
    Localization();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        errorMessage,
        loading,
        weather,
        icon,
        background,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
