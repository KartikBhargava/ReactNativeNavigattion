import 'react-native-gesture-handler';
import React, { Component, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './screens/MainTabScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent'
import SupportScreen from './screens/SupportScreen'
import SettingScreen from './screens/SettingScreen'
import BookMarkScreen from './screens/BookMarkScreen'
import RootStackScreen from './screens/RootStackScreen'
import { View } from 'react-native-animatable';
import { ActivityIndicator } from 'react-native-paper';

const Drawer = createDrawerNavigator();

const App  = () => {

const[isLoading, setIsLoading] = React.useState(true);
const[userToken, setUserToken] = React.useState(null);

useEffect(() =>{
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
}, []);

if( isLoading){
  return(
    <View style ={{flex:1, justifyContent:'center' , alignItems:'center'}}>
      <ActivityIndicator size = "large"/>
    </View>
  );
}

  return(
    <NavigationContainer>
      <RootStackScreen/>
            {/* <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name = "SupportScreen" component= {SupportScreen}/>
        <Drawer.Screen name = "SettingScreen" component= {SettingScreen}/> 
        <Drawer.Screen name = "BookMarkScreen" component= {BookMarkScreen}/> 
      </Drawer.Navigator> */}
    </NavigationContainer>
    
  );
}

export default App;

