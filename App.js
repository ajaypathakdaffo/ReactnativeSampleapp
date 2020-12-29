import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './source/navigation';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  SplashScreen.hide()

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
