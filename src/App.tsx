import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faUser,
  faDumbbell,
  faCalendarWeek,
} from '@fortawesome/free-solid-svg-icons';

import DashBoard from './screens/DashBoard';
import UserProfile from './screens/UserProfile';
import Workout from './screens/Workout';
import MyWeek from './screens/MyWeek';

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
          name="My Week"
          component={MyWeek}
          options={{
            tabBarIcon: () => (
              <FontAwesomeIcon icon={faCalendarWeek} size={30} />
            ),
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
