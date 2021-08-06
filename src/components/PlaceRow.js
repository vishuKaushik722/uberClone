import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";


const PlaceRow = ({ data }) => {

    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <Ionicons name='md-location-sharp' siz={20} color={'white'} />
            </View>
            <Text style={styles.locationText}>{data.description || data.vicinity }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
    iconContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        backgroundColor: '#a2a2a2',
        borderRadius: 50,
        marginRight: 15,
    },
});

export default PlaceRow;