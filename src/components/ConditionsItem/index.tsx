import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { Container } from './styles';

interface ItemProps {
  text: string;
  icon: string;
  color: string;
}
const ConditionsItem: React.FC<ItemProps> = ({ text, icon, color }) => {
  return (
    <Container>
      <MaterialCommunityIcons name={icon} size={24} color={color} />
      <Text>{text}</Text>
    </Container>
  );
};

export default ConditionsItem;
