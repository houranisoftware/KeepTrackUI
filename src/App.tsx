import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoard from './screens/DashBoard';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
          <Stack.Screen name="DashBoard" component={DashBoard} />
        </Stack.Navigator> */}

      <Tab.Navigator initialRouteName="Dashboard">
        <Tab.Screen name="Dashboard" component={DashBoard} />
        <Tab.Screen name="Dashboard2" component={DashBoard} />
        <Tab.Screen name="Dashboard3" component={DashBoard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
