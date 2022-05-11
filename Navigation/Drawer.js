import *as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './Bottomtab';
import Profile from '../Screens/profile';

var Drawer = createDrawerNavigator();

const DrawerNav =()=>{
  return(

    <Drawer.Navigator>
    <Drawer.Screen name={'homeScreen'}component={BottomTab}/>
      <Drawer.Screen name={'profileScreen'}component={Profile}/>
    </Drawer.Navigator>

  );
}

export default DrawerNav;