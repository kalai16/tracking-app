import React from "react";
import {  StyleSheet, Text, Image } from "react-native";
import { Icon, Header, Left, Body, Right, Button, View} from "native-base";
//import Icon from "react-native-vector-icons/FontAwesome";
import { DrawerNavigator } from "react-navigation";

import DirectionScreen from "./DirectionScreen";
import RoutesScreen from "./RoutesScreen";
import OfflineMapScreen from "./OfflineMapScreen";
import BusServiceScreen from "./BusServiceScreen";
//import HeaderComponent from "../../../components/HeaderComponent";

class Home extends React.Component{

  render(){
    return(
      <View style={styles.container}>
        <MyApp/>
      </View>
    );
  }
}

const MyApp = DrawerNavigator({
  'Route Map': {
    screen: BusServiceScreen
  },
  'Bus Route Details': {
    screen: RoutesScreen
  },
  'Offline Transit Map': {
    screen: OfflineMapScreen
  }
})


export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 35,
    height: 64,
    backgroundColor: '#1EAAF1'
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign:'center',
    width: 64,
    marginLeft: 30,
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 40,
  },
});