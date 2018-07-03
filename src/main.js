// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { DrawerNavigator } from 'react-navigation';

// import DirectionScreen from './components/DirectionScreen'
// import RoutesScreen from './components/RoutesScreen'
// import OfflineMapScreen from './components/OfflineMapScreen'
// import BusServiceScreen from './components/BusServiceScreen'

// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MyApp/>
//       </View>
//     );
//   }
// }
// const MyApp = DrawerNavigator({
//   'Home': {
//     screen: DirectionScreen
//   },
//   'Routes': {
//     screen: RoutesScreen
//   },
//   'Bus Service': {
//     screen: BusServiceScreen
//   },
//   'Offline Map Screen': {
//     screen: OfflineMapScreen
//   }
// })


// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
// });

import React from "react";

import createStore from "./store/createStore";
import AppContainer from "./AppContainer";
export default class Root extends React.Component{
	renderApp(){
		const initialState = window.___INTITIAL_STATE__;
		const store = createStore(initialState);

		return (
			<AppContainer store={store} />

		);

	}

	render(){
		return this.renderApp();
	}
}