import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface WorkoutCardProps {
  name: string;
  description: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({name, description}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default WorkoutCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 115,
    elevation: 100,
    marginBottom: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
  },
});
