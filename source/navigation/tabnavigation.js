import React from 'react';
import {Text, View} from 'react-native';
import Login from '../screens/login';
import Signup from '../screens/signup';
import MyList from '../screens/infinitescroll';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
console.disableYellowBox = true;

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: (focused, color, size) => {
          return (
            <Text style={{color: focused.focused ? 'red' : 'black'}}>
              {route.name}
            </Text>
          );
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Login') {
            iconName = 'cloudo';
          } else if (route.name === 'Signup') {
            iconName = 'pausecircle';
          } else if (route.name === 'MyList') {
            iconName = 'barschart';
          }

          return <Icon name="stepforward" size={30} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
      <Tab.Screen name="MyList" component={MyList} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
