import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BottomTab from './Navigation/Bottomtab';
import DrawerNav from './Navigation/Drawer';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
     <DrawerNav/>
    </NavigationContainer>
  );
}

