import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import colors from '../../styles/colors';

import { Container } from './styles';

const Menu: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.openDrawer()}>
      <FontAwesome5 name="align-justify" size={36} color={colors.white} />
    </Container>
  );
};

export default Menu;
