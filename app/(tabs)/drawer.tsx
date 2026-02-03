import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from './index';
import Services from './services';
import Explore from './exploring';

export type DrawerParamList = {
  Home: undefined;
  Services: undefined;
  Explore: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        overlayColor: 'transparent',
        drawerStyle: { backgroundColor: '#fff' },
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveBackgroundColor: 'transparent',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Explore" component={Explore} />
    </Drawer.Navigator>
  );
}
