import React from 'react';
import DrawerNavigator from './drawernavigator';

console.disableYellowBox = true;

const AppNavigation = () => {
  return (
    <>
      <DrawerNavigator />
      <TabNavigator />
    </>
  );
};

export default AppNavigation;
