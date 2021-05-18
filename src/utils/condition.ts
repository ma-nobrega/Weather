import colors from '../styles/colors';

interface IconProps {
  name: string;
  color: string;
}

export function IconConvert(condition: string): IconProps {
  if (condition === 'storm') {
    const icon = { name: 'weather-pouring', color: colors.blue };
    return icon;
  }
  if (condition === 'snow') {
    const icon = { name: 'weather-snowy', color: colors.blue };
    return icon;
  }
  if (condition === 'hail') {
    const icon = { name: 'weather-hail', color: colors.grayDark };
    return icon;
  }
  if (condition === 'rain') {
    const icon = { name: 'weather-rainy', color: colors.blue };
    return icon;
  }
  if (condition === 'fog') {
    const icon = { name: 'weather-fog', color: colors.grayDark };
    return icon;
  }
  if (condition === 'clear_day') {
    const icon = { name: 'weather-sunny', color: colors.yellow };
    return icon;
  }
  if (condition === 'cloud') {
    const icon = { name: 'weather-cloudy', color: colors.grayDark };
    return icon;
  }
  const icon = { name: 'weather-cloudy', color: colors.grayDark };
  return icon;
}
