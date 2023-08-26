import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoard from './screens/DashBoard';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse, faUser, faDumbbell} from '@fortawesome/free-solid-svg-icons';
import UserProfile from './screens/UserProfile';
import Workout from './screens/Workout';

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
        <Tab.Screen
          name="Workouts"
          component={Workout}
          options={{
            tabBarIcon: () => <FontAwesomeIcon icon={faDumbbell} size={30} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserProfile}
          options={{
            tabBarIcon: () => <FontAwesomeIcon icon={faUser} size={30} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
