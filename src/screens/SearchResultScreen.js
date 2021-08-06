import React, { useState } from 'react'
import { View, Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import RouteMap from '../components/RouteMap';
import UberTypes from '../components/UberTypes';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const SearchResultScreen = () => {

    const route = useRoute();
    const typeState = useState(null);
    const { textFrom, whereTo } = route.params;
    const navigation = useNavigation();

    const { uid } = auth().currentUser;


    const onSubmit = async () => {
        const [type] = typeState;
        if(!type) {
            return alert("First select the car");
        }

        try {
            const date = new Date();
            await   firestore()
                    .collection(uid)
                    .add({
                        type: type,
                        originLatitude: textFrom.details.geometry.location.lat,
                        originLongitude: textFrom.details.geometry.location.lng,
                        destLatitude: whereTo.details.geometry.location.lat,
                        destLongitude: whereTo.details.geometry.location.lng,
                        carId: "",
                        createdAt: date
                    })
                    .then(() => {
                        Alert.alert(
                            "Hurayyyy",
                            "Your ride is on its way",
                            [
                              {
                                text: "ok",
                                onPress: () => navigation.navigate("Initial"),
                              }
                            ]
                          );
                      
                      });
        } catch(err) {
            console.log(err)
        }
    }

    const distance = (lat1, lat2, lon1, lon2) => {
        lon1 =  lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;

        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)
            + Math.cos(lat1) * Math.cos(lat2)
            * Math.pow(Math.sin(dlon / 2),2);
        
        let c = 2 * Math.asin(Math.sqrt(a));
        let r = 6371;
        return(Math.round(c * r));
    }

    return (
        <View>
            <RouteMap textFrom={textFrom} whereTo={whereTo} />
            <UberTypes 
                typeState={typeState} 
                onSubmit={onSubmit} 
                distance={() => 
                    distance(
                        textFrom.details.geometry.location.lat,
                        whereTo.details.geometry.location.lat,
                        textFrom.details.geometry.location.lng,
                        whereTo.details.geometry.location.lng
                    )
                } 
            />
        </View>
    )
}

export default SearchResultScreen
