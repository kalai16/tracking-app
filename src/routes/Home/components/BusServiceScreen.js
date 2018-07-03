import React, { Component } from 'react';
import { PropTypes } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Icon ,Button, Container, Header, Content, Left, Body,Title, Right } from 'native-base'
import { MapView, Location, Permissions } from 'expo';
import {Marker, Callout, ProvidePropType } from 'react-native-maps';

import MapContainer from "./MapContainer";
// const {width, height} = Dimensions.get('window')

// const SCREEN_HEIGHT = height
// const SCREEN_WIDTH = width
// const ASPECT_RATIO = width / height
// const LATTITUDE_DELTA = 0.0922
// const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO

class BusServiceScreen extends React.Component {

  state = {
    region: {
      latitude: 36.174465,
      longitude: -86.767960,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }, 
    markers: {
        coordinate: {
          latitude: 3.138132,
          longitude: 101.610267,
        },
      },
    markers1: {
      coordinate: {
        latitude: 3.146632,
        longitude: 101.618794,
      },
    },
    markers2: {
      coordinate: {
        latitude: 3.144819,
        longitude: 101.617937,
      },
    },
    markers3: {
      coordinate: {
        latitude: 3.151525,
        longitude: 101.613293,
      },
    },
    markers4: {
      coordinate: {
        latitude: 3.147083,
        longitude: 101.624317,
      },
    },
    markers5: {
      coordinate: {
        latitude: 3.155262,
        longitude: 101.608718,
      },
    },
    markers6: {
      coordinate: {
        latitude: 3.143288,
        longitude: 101.614764,
      },
    },
    markers7: {
      coordinate: {
        latitude: 3.146489,
        longitude: 101.616301,
      },
    },
    markers8: {
      coordinate: {
        latitude: 3.138084,
        longitude: 101.622971,
      },
    }
  };
  
  show() {
    this.marker1.showCallout();
  }

  hide() {
    this.marker1.hideCallout();
  }

  _getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
    let position = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true
    });
    this.setState({
      region: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    })
  }
  }

  async componentDidMount() {
    this._getLocation();
  }

  render() {
    const { region, markers, markers1, markers2,  
      markers3, 
      markers4,
      markers5,
      markers6,
      markers7,
      markers8
      } = this.state;
    return (
        <Container>
        <Header style={{backgroundColor:"#FF5E3A"}} iosBarStyle="light-content">
          <Left>
            <Icon name="menu" onPress={() =>
            this.props.navigation.navigate('DrawerOpen')} />
          </Left>
          <Text style={styles.navBarHeader}>View Bus Details</Text>
         
        </Header>
          {(this.state.region.latitude, 
          this.state.markers.coordinate.latitude,
          this.state.markers1.coordinate.latitude,
          this.state.markers2.coordinate.latitude,
          this.state.markers3.coordinate.latitude,
          this.state.markers4.coordinate.latitude,
          this.state.markers5.coordinate.latitude,
          this.state.markers6.coordinate.latitude,
          this.state.markers7.coordinate.latitude,
          this.state.markers8.coordinate.latitude
        ) &&
          <MapContainer
          region={this.state.region}
          markers = {this.state.markers.coordinate}
          markers1 = {this.state.markers1.coordinate}
          markers2 = {this.state.markers2.coordinate}
          markers3 = {this.state.markers3.coordinate}
          markers4 = {this.state.markers4.coordinate}
          markers5 = {this.state.markers5.coordinate}
          markers6 = {this.state.markers6.coordinate}
          markers7 = {this.state.markers7.coordinate}
          markers8 = {this.state.markers8.coordinate}
          >
          <Text style={styles.textMap}>Tap on marker to view bus information</Text>
          </MapContainer>
        
        }

        </Container>
    );
  }
}

 
export default BusServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#d3d9e2',
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
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
    //marginLeft: 40,
    marginRight: 95,
    paddingTop: 15,
  },
  radius: {
    height:50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,122,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#0074FF'
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  },
  textMap :{
    //backgroundColor: 'white',
  }
});
