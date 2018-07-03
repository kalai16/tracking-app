import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon ,Button, Container, Header, Content, Left, Title, Body, Right, Item, Input } from 'native-base';
import MapView from 'react-native-maps';



class DirectionScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor:"#FF5E3A"}} iosBarStyle="light-content">
          <Left>
            <Icon name="menu" onPress={() =>
            this.props.navigation.navigate('DrawerOpen')} />
          </Left>
          <Text style={styles.navBarHeader}>Public Tranport Tracking App</Text>
          <Text style={styles.navBarButton}>More</Text>
        </Header>
        <Body style={styles.ContainerBody}>
          <Body style={styles.BodyOne}>
            <Title style={styles.title}>Directions</Title>
            <Item style={styles.searchBar}>
              <Input placeholder="Search for direction" />
              <Icon name="search" />
            </Item>
          </Body>
          <Body style={styles.BodyTwo}>
            {/* <View style={styles.Mapview}>
              <MapView style={styles.map}
                region={{
                  latitude:3.190964,
                  longitude:101.594533,
                  latitudeDelta:0.1,
                  longitudeDelta:0.1,
                }}
                >
              </MapView>
            </View> */}
            <Title style={styles.title}>View Map</Title>
            <Text style={styles.title2}>Map</Text>
          </Body>
        </Body>
      </Container>
    );
  }
}


export default DirectionScreen;

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d3d9e2',
  },
  ContainerBody: {
    //width: 300,
    //height: 50,
    //alignItems: 'center',
  
    
    
  },
  BodyOne :{
    //backgroundColor: 'red',
  },
  title: {
    //marginTop: 100,
    fontSize : 20,
    color : 'rgb(0,0,255)',
    textAlign: "center",
    margin: 30,
  
  },
  title2: {
    fontSize : 20,
    color : 'rgb(0,0,255)',
    textAlign: "center",
    //padding: 130,
    backgroundColor: 'grey',
  
  },
  searchBar :{
    backgroundColor: 'grey',
    borderRadius: 20,
    borderWidth: 0.5,
  },
  BodyTwo :{
    //backgroundColor: 'red',
    //width: 300,  
    //height: 50,
  },
});
