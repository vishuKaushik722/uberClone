import React, { useState } from 'react';
import { View, Text,  Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth';

const DEVICE_HEIGHT = Dimensions.get("window").height;

const Signup = () => {

  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');


 const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(`+91${phoneNumber}`);
    setConfirm(confirmation);
  }

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
        <View style={styles.container}>    
            <View>
                <Text style={styles.upperText}>Uber</Text>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={styles.text}>Enter your phone no - </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                />
                </View>
            </View>
            <View style={styles.button}>
                <Button color={"#000000"} title="Get OTP" onPress={() => signInWithPhoneNumber(phone)} />
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.bottomText}>By Uber. All rights reserved.</Text>
            </View>
        </View>
      );
  }

  return (
    <View style={styles.container}>
        <TextInput style={{ fontSize: 17, marginBottom: 20}} value={code} onChangeText={text => setCode(text)} />
        <Button color="#000000" title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        top: DEVICE_HEIGHT/3
    },
    upperText: {
        fontSize: 35,
        fontWeight: "900",
        alignSelf: "center",
        top: -DEVICE_HEIGHT/3.7
    },
    text: {
        fontSize: 17
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        flex: 1,
        fontSize: 17
     },
    button: {
        marginVertical: 30
    },
    bottomText: {
        fontSize: 13
    },
    bottomView: {
        flex: 1,
        alignItems: "center",
        top: DEVICE_HEIGHT/2.59
    }
}) 

export default Signup;