import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';
import DestinationSearchScreen from './src/screens/DestinationSearchScreen';
import SearchResultScreen from './src/screens/SearchResultScreen';
import useCurrentLocation from './src/hooks/useCurrentLocation';
import DummyScreen from './src/components/DummyScreen';
import CustomDrawer from './src/components/CustomDrawer';
import InitialScreen from './src/screens/InitialScreen';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {


  useCurrentLocation();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const StackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName={InitialScreen}>
            <Stack.Screen name="Initial" component={InitialScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Destination" component={DestinationSearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SearchResults" component={SearchResultScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={
          props => <CustomDrawer { ...props } />
        }>
          <Drawer.Screen name="Home" component={StackNavigator} />

          <Drawer.Screen name="Help">
           {() => <DummyScreen name={"Help"} />}
          </Drawer.Screen>

          <Drawer.Screen name="Wallet">
            {() => <DummyScreen name={"Wallet"} />}
          </Drawer.Screen>

          <Drawer.Screen name="Settings">
            {() => <DummyScreen name={"Settings"} />}
          </Drawer.Screen>

          <Drawer.Screen name="Your Trips">
            {() => <DummyScreen name={"Your Trips"} />}
          </Drawer.Screen>

        </Drawer.Navigator>
      </NavigationContainer>
  )
}

export default App;