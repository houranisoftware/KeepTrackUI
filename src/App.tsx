import React, {useEffect} from 'react';
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

import {storage} from './services/mmkvService';
import {WorkoutState} from './redux/workout/types';
import {setWorkoutList} from './redux/workout/slice';
import {useDispatch} from 'react-redux';
const Tab = createBottomTabNavigator();

export default function App() {
  const dispatch = useDispatch();
  const workoutListArray: string | null | undefined =
    storage.getString('workoutList');

  useEffect(() => {
    if (workoutListArray !== null) {
      const workoutList: WorkoutState[] = JSON.parse(workoutListArray!);
      dispatch(setWorkoutList(workoutList));
      console.log(workoutList);
    } else {
      console.log('No workouts');
    }
  }, [workoutListArray, dispatch]);

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
