import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { Container } from './styles';

interface ItemProps {
  text: string;
  icon: string;
}

const ConditionsItem: React.FC<ItemProps> = ({ text, icon }) => {
  return (
    <Container>
      <MaterialCommunityIcons name={icon} size={24} color="#1ed6ff" />
      <Text>{text}</Text>
    </Container>
  );
};

export default ConditionsItem;
