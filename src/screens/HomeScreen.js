import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToTopic = (topic) => {
    navigation.navigate('Topic', { topic });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QA Interview Subjects</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('Java')}
        >
          <Text style={styles.buttonText}>Java</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('Selenium')}
        >
          <Text style={styles.buttonText}>Selenium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('TestNG')}
        >
          <Text style={styles.buttonText}>TestNG</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('JUnit')}
        >
          <Text style={styles.buttonText}>JUnit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('Cucumber')}
        >
          <Text style={styles.buttonText}>Cucumber</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('SDLC')}
        >
          <Text style={styles.buttonText}>SDLC</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('STLC')}
        >
          <Text style={styles.buttonText}>STLC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('SQL')}
        >
          <Text style={styles.buttonText}>SQL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('API Testing')}
        >
          <Text style={styles.buttonText}>API Testing</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('GitHub')}
        >
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('Jenkins')}
        >
          <Text style={styles.buttonText}>Jenkins</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('Test Automation')}
        >
          <Text style={styles.buttonText}>Test Automation</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('Manual Testing')}
        >
          <Text style={styles.buttonText}>Manual Testing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('Java Lambda')}
        >
          <Text style={styles.buttonText}>Lambda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToTopic('Soft Skills')}
        >
          <Text style={styles.buttonText}>Soft Skills</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default HomeScreen;
