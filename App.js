import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './screens/MainTabScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent'
import SupportScreen from './screens/SupportScreen'
import SettingScreen from './screens/SettingScreen'
import BookMarkScreen from './screens/BookMarkScreen'

const Drawer = createDrawerNavigator();

const App  = () => {
  return(
    <NavigationContainer>
            <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name = "SupportScreen" component= {SupportScreen}/>
        <Drawer.Screen name = "SettingScreen" component= {SettingScreen}/> 
        <Drawer.Screen name = "BookMarkScreen" component= {BookMarkScreen}/> 
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default App;

