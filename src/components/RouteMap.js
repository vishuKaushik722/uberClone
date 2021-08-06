import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const DEVICE_HEIGHT = Dimensions.get("window").height;
const GOOGLE_MAPS_APIKEY = "AIzaSyAKEARSEWpEKloA87RByp8QpOWAqPn2m4E";

const RouteMap = ({ textFrom, whereTo}) => {

    const origin = {
        latitude: textFrom.details.geometry.location.lat,
        longitude: textFrom.details.geometry.location.lng,
    }

    const destination = {
        latitude: whereTo.details.geometry.location.lat,
        longitude: whereTo.details.geometry.location.lng,
    }


    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                latitude: textFrom.details.geometry.location.lat,
                longitude: textFrom.details.geometry.location.lng,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
     >
        <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
        />
        <Marker 
            coordinate={origin}
            title={"Origin"}
        />
        <Marker 
            coordinate={destination}
            title={"Destination"}
        />
     </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: DEVICE_HEIGHT - DEVICE_HEIGHT/2.1
    },
    markerImage: {
        width: 70,
        height: 70,
        resizeMode: "contain"
    }
});

export default React.memo(RouteMap);