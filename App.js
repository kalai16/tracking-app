import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { androidClientId } from "./ApiKey"
import Expo from 'expo';

import Root from "./src/main";

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: androidClientId,
        iosClientId: '196498249021-3su0f8cqnelbgbnrhj615uaghf2j90a7.apps.googleusercontent.com',
        scopes: ["profile", "email"]
      })

      if (result.type === 'success') {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }
  render() {
    return ( 
      <View style={styles.containerTwo}>
      {this.state.signedIn ? (<LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />) : 
      (<LoginPage signIn={this.signIn} />)}
    </View>
    )
  }
}
const LoginPage = props => {
  return (
    <View
    source={require('./busImage.jpg')} style={styles.container}>
      <View style={styles.headerOne}>
        <Text style={styles.headerTitle}>Welcome to Public Transport Tracking App </Text>
      </View>
      <ImageBackground
      style={{
        flex: 1,
        resizeMode:'cover',
      }}
      source={require('./busImage.jpg')} style={styles.ImageOne}/>
      <View style={styles.headerTwo}>
        <Text style={styles.header}>Lets Get Started</Text>
        <View style={styles.signin}>
          <Button  
          color='#FFFFFF'
          title="Sign in with Google+" onPress={() => props.signIn()} />
        </View>
      </View>
    </View>

  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.containerTwo}>
      <Root {...this.props}/>
    </View>
  )
}

// const LoggedInPage = props => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome:{props.name}</Text>
//       <Image style={styles.image} source={{ uri: props.photoUrl }} />
//     </View>
//   )
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",  
    //minHeight: 700,
    //backgroundColor: '#2A4A5B',

   

  },
  containerTwo: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  ImageOne: {
    height: 400,
    width: 300, 
  },

  header: {
    fontSize: 25,
    color: '#1E3226',
    textAlign: "center",
  },
  headerOne: {
    //height:300,

  },
  headerTwo: {
    //height:50,

  },
  signin: {
    backgroundColor: '#2A4A5B',
    borderWidth: 2,
    borderRadius: 50,
    width:250,
    borderColor:'#E27572',
    
  },
  headerTitle:{
    fontSize: 25,
    textAlign: 'center',
    color: '#1E3226',
  },

  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
