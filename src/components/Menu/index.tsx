import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';

interface ButtonProps extends RectButtonProps {
  children: string;
}

const Menu: React.FC<ButtonProps> = ({ ...rest }) => {
  const navigation = useNavigation();
  return (
    <Container {...rest} onPress={() => navigation.openDrawer()}>
      <FontAwesome5 name="align-justify" size={36} color="#373737" />
    </Container>
  );
};

export default Menu;
