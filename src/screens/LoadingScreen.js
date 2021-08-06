import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoadingScreen = () => {
    return (
        <View>
            <Text>Uber</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default LoadingScreen;