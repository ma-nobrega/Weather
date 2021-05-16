interface IconProps {
  name: string;
  color: string;
}
export function IconConvert(condition: string): IconProps {
  if (condition === 'storm') {
    const icon = { name: 'weather-pouring', color: '#E6E8EB' };
    return icon;
  }
  if (condition === 'snow') {
    const icon = { name: 'weather-snowy', color: '#1ec9ff' };
    return icon;
  }
  if (condition === 'hail') {
    const icon = { name: 'weather-hail', color: '#E6E8EB' };
    return icon;
  }
  if (condition === 'rain') {
    const icon = { name: 'weather-rainy', color: '#1ec9ff' };
    return icon;
  }
  if (condition === 'fog') {
    const icon = { name: 'weather-fog', color: '#FFB300' };
    return icon;
  }
  if (condition === 'clear_day') {
    const icon = { name: 'weather-fog', color: '#E6E8EB' };
    return icon;
  }
  if (condition === 'cloud') {
    const icon = { name: 'weather-cloudy', color: '#E6E8EB' };
    return icon;
  }
  const icon = { name: 'weather-cloudy', color: '#E6E8EB' };
  return icon;
  s;
}
