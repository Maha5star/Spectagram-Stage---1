import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Feed from '../Screens/feed';
import Create from '../Screens/create';
import Ionicons from 'react-native-vector-icons/Ionicons';

var Bottom = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          var iconName;
          if (route.name === 'CreateScreen') {
            iconName = focused ? 'create' : 'create-outline';
          } else {
            iconName = focused ? 'book' : 'book-outline';
          }
          return <Ionicons name={iconName} size={23} color={color} />;
        },
      })}
      tabBarOptions={{ activeTintColor: 'salmon', inactiveTintColor: 'blue' }}>
      <Bottom.Screen name={'FeedScreen'} component={Feed} />
      <Bottom.Screen name={'CreateScreen'} component={Create} />
    </Bottom.Navigator>
  );
};

export default BottomTab;
