import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import PlaceRow from '../components/PlaceRow';
import auth from '@react-native-firebase/auth';


const DestinationSearchScreen = () => {

    const [ textFrom, setTextFrom ] = useState("");
    const [ whereTo, setWhereTo ] = useState("");
    const navigation = useNavigation();

    const effectHandler = () => textFrom && whereTo;

    useEffect(() => {

        if(textFrom && whereTo) {
            navigation.navigate('SearchResults',{
                textFrom,
                whereTo
            });
        }
        
    },[effectHandler()])

    return (
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data, details = null) => {
                        setTextFrom({data, details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autoCompleteContainer,
                        separator: styles.separator,
                        listView: {
                            top: 69
                        }
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyAKEARSEWpEKloA87RByp8QpOWAqPn2m4E',
                        language: 'en',
                    }}
                    renderRow={(results) => <PlaceRow data={results} />}
                    renderDescription={data => data.description || data.vicinity }
                />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setWhereTo({data, details});
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    styles={{
                        textInput: styles.textInput,
                        container: {...styles.autoCompleteContainer, top: 70 },
                        separator: styles.separator,
                        listView: {
                            top: 9
                        }
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyAKEARSEWpEKloA87RByp8QpOWAqPn2m4E',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={data => data.description || data.vicinity }
                />

                
                <View style={styles.circle}></View>

                <View style={styles.line}></View>

                <View style={styles.square}></View>


            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: "100%"
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 20,
    },
    autoCompleteContainer : {
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10
    },
    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },
    circle: {
        width: 5,
        height: 5,
        backgroundColor: "black",
        position: "absolute",
        top: 35,
        left: 15,
        borderRadius: 5
    },
    line: {
        width: 1,
        height: 45,
        backgroundColor: "#c4c4c4",
        position: "absolute",
        top: 44,
        left: 16.7
    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: "black",
        position: "absolute",
        top: 95,
        left: 15
    }
});

export default DestinationSearchScreen;