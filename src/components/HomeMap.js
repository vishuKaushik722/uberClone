import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Image, ActivityIndicator  } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

 
const DEVICE_HEIGHT = Dimensions.get("window").height;

const HomeMap = () => {

    const { uid } = auth().currentUser;
    
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const subscriber = firestore()
            .collection('Cars')
            .doc(uid)
            .collection('car')
            .get()
            .then(querySnapshot => {   
                const carList = []     
                querySnapshot.forEach(documentSnapshot => {
                    carList.push({
                      ...documentSnapshot.data(),
                      key: documentSnapshot.id,
                    });
                });
            
                setCars(carList);
                setLoading(false);
          });
    
        return () => subscriber;
      }, [uid]);

      if (loading) {
        return <ActivityIndicator />;
      }


    return (

        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                latitude: 30.1741802,
                longitude: 77.6184744,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
     >

         {
             cars.map(car => <Marker
                key={car.key}
                coordinate={{ latitude: car.latitude, longitude: car.longitude }}
             >
                 <Image style={[styles.markerImage, {transform: [{rotate: `${car.heading}deg`}]}]} source={{ uri: car.img }} />
             </Marker> )
         }
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

export default HomeMap;