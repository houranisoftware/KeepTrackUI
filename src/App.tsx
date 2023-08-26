import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoard from './screens/DashBoard';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Dashboard">
        <Tab.Screen
          name="Dashboard"
          component={DashBoard}
          options={{
            tabBarIcon: () => <FontAwesomeIcon icon={faHouse} size={30} />,
          }}
        />
        <Tab.Screen name="Dashboard2" component={DashBoard} />
        <Tab.Screen name="Dashboard3" component={DashBoard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
