import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon ,Button, Container, Header, Content, Left, Body,Title } from 'native-base'


class RoutesScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#FF5E3A"}} iosBarStyle="light-content">
          <Left>
            <Icon name="menu" onPress={() =>
            this.props.navigation.navigate('DrawerOpen')} />
          </Left>
          <Text style={styles.navBarHeader}>Bus Routes Timetable</Text>
          
        </Header>
        <ScrollView style={styles.container}>
          <Text style={styles.routesTitle}> Routes on Current Location</Text>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: T811</Text>
            <Text style={styles.lineText2}>Routes: MRT Station Bandar Utama -- Mutiara Tropicana</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 8 min away </Text>
          </View>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: T812</Text>
            <Text style={styles.lineText2}>Routes: MRT Station Bandar Utama -- TTDI North, Kg. Sg. Penchala</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 12 min away </Text>
          </View>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: T812</Text>
            <Text style={styles.lineText2}>Routes: MRT Station Bandar Utama -- TTDI North, Kg. Sg. Penchala</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 12 min away </Text>
          </View>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: T813</Text>
            <Text style={styles.lineText2}>Routes: MRT Station TTDI -- SS22 Petaling Jaya</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 12 min away </Text>
          </View>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: 800</Text>
            <Text style={styles.lineText2}>Routes: Bandar Utama-- KL Sentral</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 9 min away </Text>
          </View>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: 801</Text>
            <Text style={styles.lineText2}>Routes: Bandar Utama -- Metro Prima</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 18 min away </Text>
          </View>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: 802</Text>
            <Text style={styles.lineText2}>Routes: Stesen LRT Kelana Jaya -- Kota Damansara</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 18 min away </Text>
          </View>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: 821</Text>
            <Text style={styles.lineText2}>Routes: Pantai Hill Park -- Pasar Seni</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 18 min away </Text>
          </View>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: T103</Text>
            <Text style={styles.lineText2}>Routes: Mrt Sungai Buloh -- Damansara Damai</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 10 min away </Text>
          </View>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: 103</Text>
            <Text style={styles.lineText2}>Routes:  Damansara Damai</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 5 min away </Text>
          </View>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.lineText1} >Bus Line: 103</Text>
            <Text style={styles.lineText2}>Routes: Hab Lebuh Pudu</Text>
            <Text style={styles.lineText}>Estimated Arrival Time: 12 min away </Text>
          </View>
          

      </ScrollView>
      </Container>
    );
  }
}


export default RoutesScreen;

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
    marginRight: 95,
    paddingTop: 10,
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

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#d3d9e2',
  },
  box: {
    height: 120,
    margin: 10,
  },
  box1: {
    backgroundColor: '#C46C54',
    flex: 1,
    flexDirection: 'column',
  },
  lineText :{
    fontSize : 14,
    //color: '#FFFFFF',
    //fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  lineText1 :{
    fontSize : 20,
    //color: '#FFFFFF',
    fontWeight: 'bold',
    padding: 5,
  },
  lineText2 :{
    fontSize : 16,
    //color: '#FFFFFF',
    fontWeight: 'bold',
    padding: 5,
  }
});
