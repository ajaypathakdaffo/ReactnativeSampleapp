import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login';
import Signup from '../screens/signup';
import MyList from '../screens/infinitescroll';
import TabNavigator from './tabnavigation';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
console.disableYellowBox = true;

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Panel">
      <Drawer.Screen name="Panel" component={TabNavigator} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="MyList" component={MyList} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
