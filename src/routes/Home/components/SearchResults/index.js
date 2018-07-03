import React from "react";
import {Text} from "react-native";
import { View, List, ListItem, Left, Body } from "native-base";

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./SearchResultsStyles.js";

// export const SearchResults = ({predictions, getSelectedAddress})=> {
// 	function handleSelectedAddress(placeID){
// 		getSelectedAddress(placeID)
// 	}
export const SearchResults = ()=> {
		return(
			<View style={styles.searchResultsWrapper} >
				<List>
          <ListItem button avatar>
            <Left style={styles.leftContainer}>
                <Icon style={styles.leftIcon} name="location-on" />
            </Left>
          </ListItem>
          <ListItem><Text>List item 2</Text></ListItem>
        </List>
			</View>

		);
};

export default SearchResults;