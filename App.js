import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './source/navigation/drawernavigator';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  SplashScreen.hide();

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
