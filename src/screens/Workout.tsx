import {ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {storage} from '../services/mmkvService';

export default class Workout extends Component {
  render() {
    return (
      <SafeAreaView>
        {storage.contains('workouts') ? (
          <Text>Theres workouts</Text>
        ) : (
          <Text>Theres no workouts</Text>
        )}
        <ScrollView></ScrollView>
      </SafeAreaView>
    );
  }
}
