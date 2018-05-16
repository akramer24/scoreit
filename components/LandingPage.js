import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, Button } from 'react-native';
import db from '../db';

export default class LandingPage extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputChange(inputField, value) {
    this.setState({ [inputField]: value });
  }

  signUp() {
    db.collection('users').add({
      email: this.state.email,
      password: this.state.password
    });
    this.setState({ email: '', password: '' })
  }

  render() {
    const { email, password } = this.state;

    return (
      <ImageBackground style={styles.image} source={require('../scorecard.jpg')}>
        <View style={styles.overlay}>
          <Text style={styles.header}>Welcome</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            value={email}
            onChangeText={(email) => this.handleInputChange('email', email)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => this.handleInputChange('password', password)}
          />
          <Button title="Sign In" onPress={() => this.signUp()} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(42,41,3,0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    width: 300,
    margin: 10,
    color: 'white',
    fontSize: 15,
    borderBottomWidth: 2,
    borderColor: 'gray'
  }
});