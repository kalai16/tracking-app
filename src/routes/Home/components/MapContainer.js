import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Icon ,Button, Container, Header, Content, Left, Body,Title } from 'native-base'
import MapView, {Marker, Callout, ProvidePropType } from 'react-native-maps';
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";


export const MapContainer = ({region, 
  getInputData, markers, markers1, markers2, markers3, 
  markers4,
  markers5,
  markers6,
  markers7,
  markers8
})=>{
  return(
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      >

        <MapView.Marker 
        coordinate={region}
        pinColor="red"
        title="Current Location"
        description="Bus Stop:Centerpoint Bus stop -- BusID:T811 -- ETA:8min">
        </MapView.Marker>
        <MapView.Marker
        ref={ref => { this.marker1 = ref; }}
        coordinate={markers}
        pinColor="blue"
        title="Bus Stop"
        description="Route:MRT Bandar Utama ⟲ Kampung Sungai Kayu Ara (Utara) -- Bus Stop:Centerpoint Bus stop -- BusID:T811 -- ETA:12min"
        >
        </MapView.Marker>
        <MapView.Marker
        ref={ref => { this.marker1 = ref; }}
        coordinate={markers1}
        pinColor="blue"
        title="MRT Station"
        description="Route:Sungai Buloh - Kajang Line -- Nearby Station:Bandar Utama Mrt Station"
        >
        </MapView.Marker>
        <MapView.Marker
        ref={ref => { this.marker1 = ref; }}
        coordinate={markers2}
        pinColor="blue"
        title="Mrt Bus Station"
        description="Route:MRT Bandar Utama ⟲ Kampung Sungai Kayu Ara (Utara) -- Bus Station: Powerhouse One Utama -- BusID:T811,T812 "
        >
        </MapView.Marker>
        <MapView.Marker
        ref={ref => { this.marker1 = ref; }}
        coordinate={markers3}
        pinColor="blue"
        title="RapidKL Bus Station"
        description="Bus Station: Bandar Utama Rapid Bus Station -- BusID:800,801,802 "
        >
        </MapView.Marker>
        <MapView.Marker
        ref={ref => { this.marker1 = ref; }}
        coordinate={markers4}
        pinColor="blue"
        title="Bus stop"
        description="Mutiara Damansara Bus Stop -- BusID:T809 -- ETA:5min ,"
        >
        </MapView.Marker>
        <MapView.Marker
        ref={ref => { this.marker1 = ref; }}
        coordinate={markers5}
        pinColor="blue"
        title="MRT Station"
        description="Mutiara Damansara Mrt Station "
        >
        </MapView.Marker>
        <MapView.Marker
        ref={ref => { this.marker1 = ref; }}
        coordinate={markers6}
        pinColor="blue"
        title="Bus Stop"
        description="SMK Bandar Utama -- BusID:800 -- ETA:15min,"
        >
        </MapView.Marker>
        <MapView.Marker
        ref={ref => { this.marker1 = ref; }}
        coordinate={markers7}
        pinColor="blue"
        title="Bus Stop"
        description="PJ 536 First Avenue One U -- BusID:506 - ETA:6min -- BusID:802 - ETA:2min "
        >
        </MapView.Marker>
        <MapView.Marker
        ref={ref => { this.marker1 = ref; }}
        coordinate={markers8}
        pinColor="blue"
        title="Bus Stop"
        description="
        PJ 67 Damansara Utama (Selatan), Jalan SS 21/56 --BusID: 802 -- ETA:17min"
        >
        </MapView.Marker>
          
      </MapView>
        
      <SearchBox/>
      {/* <SearchResults />          */}
    </View>
  )
}
export default MapContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#d3d9e2',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }

});