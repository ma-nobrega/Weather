import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Container } from './styles';

const Menu: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.openDrawer()}>
      <FontAwesome5 name="align-justify" size={36} color="#373737" />
    </Container>
  );
};

export default Menu;
