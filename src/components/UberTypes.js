import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import UberTypeRow from './UberTypeRow';
import typesData from '../assets/data/types';

const UberTypes = ({ typeState, onSubmit, distance }) => {

    const [selectedType, setSelectedType] = typeState;

    return (
        <View>
            {typesData.map(type =>
            <UberTypeRow 
                key={type.id} 
                type={type}
                isSelected={type.type === selectedType}
                onClick={() => setSelectedType(type.type)}
                distance={distance}
            />)}

            <Pressable style={styles.confirm} onPress={onSubmit}>
                <Text style={styles.color}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    confirm: {
        backgroundColor: "black",
        padding: 10,
        margin: 10,
        alignItems: "center"
    },
    color: {
        color: "white"
    }
});

export default UberTypes; 
