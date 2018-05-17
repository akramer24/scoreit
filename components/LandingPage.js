import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import db from '../db';
import * as firebase from 'firebase';

export default class LandingPage extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleInputChange(inputField, value) {
    this.setState({ [inputField]: value });
  }

  signUp() {
    // db.collection('users').add({
    //   email: this.state.email,
    //   password: this.state.password
    // });
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(err => {
      console.log(err.message)
    })
    this.setState({ email: '', password: '' })
  }

  signIn() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {
        if (data.user) this.setState({ email: '', password: '', error: '' });
        this.props.navigation.navigate('UserPage');
      })
      .catch(err => {
        this.setState({error: err.message})
        console.log(err.message)
      })
  }

  render() {
    const { email, password, error } = this.state;

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
          {
            error && <Text>{error}</Text>
          }
          <TouchableOpacity style={styles.button} onPress={() => this.signIn()}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.signUp()}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
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
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.4
  },
  buttonText: {
    fontSize: 20
  }
});