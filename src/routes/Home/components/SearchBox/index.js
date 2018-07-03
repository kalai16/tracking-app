import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Content, InputGroup, Input } from 'native-base';
import styles from "./SearchBosStyles.js";
import Icon from "react-native-vector-icons/FontAwesome";

export const SearchBox = ({getInputData})=>{
  function handleInput(key, val){
		getInputData({
			key,
			value:val
		});
		getAddressPredictions();
	}

  return(
    <View style={styles.searchBox}>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputSearch}>Tap on marker to view bus details</Text>
      </View>
      {/* <View style={styles.secondInputWrapper}>
        <Text style={styles.label}>Find Direction</Text>
        <InputGroup>
          <Icon name="search" size={15} color="#FF5E3A"/>
          <Input 
            style={styles.inputSearch}
            placeholder="Choose destination"
            onChangeText={handleInput.bind(this, "dropOff")}
          />
        </InputGroup>
      </View> */}
    </View>
  );
};
export default SearchBox;
