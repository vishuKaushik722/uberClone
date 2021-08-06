import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Signup from '../components/Signup';
import HomeScreen from './HomeScreen';
import LoadingScreen from './LoadingScreen'



const InitialScreen =() => {

    const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return <LoadingScreen />;

  if (!user) {
    return (
      <Signup />
    );
  }

  return (
    <HomeScreen />
  );
}

export default InitialScreen;