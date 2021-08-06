import React from 'react'
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const UberTypeRow = ({ type, isSelected, onClick, distance }) => {


    return (
        <Pressable onPress={onClick} style={[styles.container, {
            backgroundColor: isSelected ? '#efefef' : 'white'
        }]}>
            <View>
                <Image style={styles.image} source={type.img} /> 
            </View>

            <View style={styles.middleContainer} >
                <Text style={styles.type}>{type.type}{" "}
                    <IonIcons name={"person"} size={16} />
                    3
                </Text>
                <Text style={styles.time}>8:05PM drop off</Text>
            </View>

            <View style={ styles.rightContainer } >
                <FontAwesome name={"money"} size={18} color={"#42d742"} />
                
                <Text style={styles.price}>est. ₹{type.price * distance()}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        padding: 17
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: "contain",
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 12,
    },
    type: {
        fontWeight: "bold",
        fontSize: 17,
        marginBottom: 5
    },
    time: {
        color: "#5d5d5d"
    },
    rightContainer: {
        width: 100,
        flexDirection: "row",
        alignItems: "flex-end"
    },
    price: {
        fontWeight: "bold",
        fontSize: 17,
        marginLeft: 6
    }
});

export default UberTypeRow
