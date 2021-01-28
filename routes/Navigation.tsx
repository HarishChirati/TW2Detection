import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Country from '../screens/Country';
import Weather from '../screens/Weather';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title:"Home",
            headerStyle: {
              backgroundColor:"#3379ff"
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={{
            title:"Country",
            headerStyle: {
              backgroundColor:"#3379ff"
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
        name="Weather"
          component={Weather}
          options={{
            title:"Weather",
            headerStyle: {
              backgroundColor:"#3379ff",
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;