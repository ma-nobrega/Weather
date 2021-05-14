import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from '../pages/Home';
import Search from '../pages/Search';

const { Navigator, Screen } = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Minha Cidade',
          drawerIcon: ({ size, color }) => (
            <FontAwesome5 name="city" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          title: 'Procurar',
          drawerIcon: ({ size, color }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default Routes;
