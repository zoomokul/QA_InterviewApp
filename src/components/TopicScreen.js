import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { topics } from '../data/questions'; // Import the questions and answers from questions.js
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/1078013103';
const TopicScreen = ({ route }) => {
  const { topic } = route.params;
  const topicData = topics[topic] || [];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.topicTitle}>{topic}</Text>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
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
