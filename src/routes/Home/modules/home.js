import update from "react-addons-update";
import constants from "./actionConstants";
import { Actions } from "react-native-router-flux";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//const {} = constants;

//-----------------------
//Constants
//-----------------------
const { GET_CURRENT_LOCATION, GET_INPUT } = constants;
const {width, height} = Dimensions.get('window')
// const SCREEN_HEIGHT = height
// const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATTITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO


//-----------------------
//Actions
//-----------------------
export function getCurrentLocation(){
	return(dispatch)=>{
		navigator.geolocation.getCurrentPosition(
			(position)=>{
				dispatch({
					type:GET_CURRENT_LOCATION,
					payload:position
				});
			},
			(error)=> console.log(error.message),
			{enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
		);
	}
}


export function getInputData(payload){
	return{
		type:GET_INPUT,
		payload
	}
}



//-----------------------
//Actions Handlers
//-----------------------
function handleGetCurrentLocation(state, action){
    return update(state, {
        region:{
            latitude:{
                $set:action.payload.coords.latitude
            },
            longitude:{
                $set:action.payload.coords.longitude
            },
            latitudeDelta: {
                $set: LATTITUDE_DELTA             
            },
            latitudeDelta: {
                $set: LONGTITUDE_DELTA    
            }
        }
    })
}


function handleGetInputDate(state, action){
	const { key, value } = action.payload;
	return update(state, {
		inputData:{
			[key]:{
				$set:value
			}
		}
	});
}

const ACTION_HANDLERS = {
    GET_CURRENT_LOCATION:handleGetCurrentLocation,
    GET_INPUT:handleGetInputDate
} 
const initialState = {
    region:{},
    inputData:{}
};

export function HomeReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}