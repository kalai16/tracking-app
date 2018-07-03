import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,ScrollView, Easing } from 'react-native';
import { Icon ,Button, Container, Header, Content, Left, Body, Title } from 'native-base'
import ZoomImage from 'react-native-zoom-image';
//import { createOpenLink } from 'react-native-open-maps';


class OfflineMapScreen extends Component {
  render() {
    return (
    <Container>
      <Header style={{backgroundColor:"#FF5E3A"}} iosBarStyle="light-content">
          <Left>
            <Icon name="menu" onPress={() =>
            this.props.navigation.navigate('DrawerOpen')} />
          </Left>
          <Text style={styles.navBarHeader}>Offline Maps</Text>
         
        </Header>
      <ScrollView style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.routesTitle}> SPAD Official Transit Map </Text>
            <ZoomImage
              style={styles.image}
              imgStyle={{width: 300, minHeight: 430}}
              duration={200}
              enableScaling={false}
              easingFunc={Easing.ease}
            
              source={{
                uri: "https://www.kualalumpur2017.com.my/img/img-cityguide-ktm.jpg"
              }}
              />
          <Text style={styles.routesTitle}>Klang Valley Maps </Text>
            <ZoomImage
              style={styles.image}
              imgStyle={{width: 250, height: 230}}
              duration={200}
              enableScaling={false}
              easingFunc={Easing.ease}
              source={{
                uri: "http://www.discoveryoverland.com/WebLITE/Applications/productcatalog/uploaded/pics/useful_tips/transport/bus.jpg"
              }}
              />
          <Text style={styles.routesTitle}>One Utama Shuttle Bus Service </Text>
            <ZoomImage
              style={styles.image}
              imgStyle={{width: 300, minHeight: 430}}
              duration={200}
              enableScaling={false}
              easingFunc={Easing.ease}
              source={{
                uri: "http://www.1utama.com.my/Portals/0/Images/ShuttleService.jpg"
              }}
              />          
          <Text style={styles.routesTitle}>MYrapid Rail Transit </Text>
            <ZoomImage
              style={styles.image}
              imgStyle={{width: 300, minHeight: 400}}
              duration={200}
              enableScaling={false}
              easingFunc={Easing.ease}
              source={{
                uri: "http://cylcw.net/rapid/img/kl-transit-map.jpg"
              }}
              />
          <Text style={styles.routesTitle}>KL GOKL City Bus</Text>
            <ZoomImage
              style={styles.image}
              imgStyle={{width: 300, height: 300}}
              duration={200}
              enableScaling={false}
              easingFunc={Easing.ease}
              source={{
                uri: "http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/magazine/go-kl-city-bus/allParagraphs/BucketComponent/ListingContainer/00/image/go-kl-citybus-map.jpg"
              }}
              />
            </View>
      </ScrollView>
    </Container>  
      
    
    );
  }
}


export default OfflineMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d3d9e2',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    //height: 400,
    //width: 300,
    marginBottom: 50,
    //minHeight: 400,
  },
  routesTitle: {
    //padding: 50,
    //alignItems: 'center',
    //justifyContent: 'center',
    //backgroundColor: 'red',
    fontSize : 20,
    color : '#1E3226',
    textAlign: "center",
    margin: 30,
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
    marginRight: 95,
    paddingTop: 15,
  },

});
