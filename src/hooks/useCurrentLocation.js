import { useEffect } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';


navigator.geolocation = require('react-native-geolocation-service');

export default () => {

  
    const requestLocationPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Uber Location Permission",
              message:
                "Uber needs access to your location " +
                "so you can set your current location.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.getCurrentPosition(
              (pos) => {
                console.log(pos);
              },
              (error) => {
                console.log(error);
              },
              { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
          } else {
            console.log("location permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };
    
      useEffect(() => {
        if(Platform.OS === "android") {
          
          requestLocationPermission();
        }
      },[])    
}