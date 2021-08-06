import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const HomeSearch = () => {

    const navigation = useNavigation();
    
    return (
        <Pressable onPress={() => navigation.navigate('Destination')}>
            <View style={styles.inputBox}>
                <Text
                    style={styles.inputText} 
                    color={"#434343"}
                > Where to?</Text>
                <View style={styles.timeContainer}>
                <AntDesign name={"clockcircle"} size={16} color={"#535353"} />
                <Text>Now</Text>
                <MaterialIcons name={"keyboard-arrow-down"} size={16} />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                   <AntDesign name={"clockcircle"} size={20} color={"#ffffff"} />
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>
            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: "#218cff"}]}>
                   <Entypo name={"home"} size={20} color={"#ffffff"} />
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: "#d9d9d9" ,
        margin: 10,
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    inputText: {
        fontSize: 19,
        fontWeight: "600",
        color: "#434343"
    },
    timeContainer: {
        flexDirection: "row",
        width: 100,
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 50
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#dbdbdb"
    },
    iconContainer: {
        backgroundColor: "#b3b3b3",
        padding: 10,
        borderRadius: 25
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: "500",
        fontSize: 16
    }
});

export default HomeSearch;