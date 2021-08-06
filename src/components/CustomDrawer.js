import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';


const CustomDrawer = (props) => {

    
    const logoutHandler = async () => {
        try {
            await auth().signOut();
            props.navigation.navigate("Initial");
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <DrawerContentScrollView
            contentContainerStyle={{
                paddingTop: 0
            }}
            {...props}
         >

            <View style={{backgroundColor: '#212121', paddingVertical: 18, paddingHorizontal: 15}}>

                <View style={styles.userContainer}>
                    <Image style={styles.userImage} source={require("../assets/images/thomas.jpg")} />

                    <View>
                        <Text style={{color: 'white', fontSize: 24}}>Thomas Shelby</Text>
                        <Text style={{color: 'lightgrey', marginTop: 2}}>5.00 *</Text>
                    </View>
                </View>

                <View style={styles.messageRow}>
                <TouchableOpacity
                    onPress={() => {console.warn('Messages')}}>
                    <Text style={styles.messageText}>Messages</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => {console.warn('Make Money Driving')}}>
                    <Text style={{color: '#cacaca' }}>Do more with your account</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {console.warn('Make Money Driving')}}>
                    <Text style={{color: '#cacaca', paddingVertical: 10, marginTop: 7}}>Make money driving</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={logoutHandler}>
                    <Text style={{ marginTop: 15, fontSize: 15, color: "white"}}>Logout</Text>
                </TouchableOpacity>
                
            </View>

            <DrawerItemList {...props} />
            
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        paddingVertical: 11,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 10,
        resizeMode: "cover"
    },
    messageRow: {
        borderBottomWidth: 1,
        borderBottomColor: '#292929',
        borderTopWidth: 1,
        borderTopColor: '#292929',
        paddingVertical: 10,
        marginVertical: 15,
    },
    messageText: {
        color: '#dddddd',
        paddingVertical: 5,
        fontSize: 15
    }
});

export default CustomDrawer;