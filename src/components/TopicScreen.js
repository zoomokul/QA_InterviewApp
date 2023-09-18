import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { topics } from '../data/questions'; // Import the questions and answers from questions.js

const TopicScreen = ({ route }) => {
  const { topic } = route.params;
  const topicData = topics[topic] || [];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.topicTitle}>{topic}</Text>
      {topicData.map((item, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{item.question}</Text>
          <Text style={styles.answerText}>{item.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  topicTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  answerText: {
    fontSize: 16,
  },
});

export default TopicScreen;
