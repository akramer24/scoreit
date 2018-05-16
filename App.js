import React from 'react';
import RootNavigator from './Navigation';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './components/LandingPage';

export default class App extends React.Component {
  componentDidMount() {
    // firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
