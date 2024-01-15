import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTemplate from "../template/HomeTemplate";
import {StatusBar} from "react-native";
import {BACKGROUND_COLOR, RED, VIOLET_LIGHT} from "../assets/colors";
import QuizzTemplate from "../template/QuizzTemplate";
import Header from "../component/Header";
import BottomTabNavigator from "../component/TabNavigator";

const Stack = createNativeStackNavigator();


function Route(): JSX.Element {

    const MainStackNavigator = () => {
        return (
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        );
    }








    return (
        <NavigationContainer>
            <StatusBar backgroundColor={RED} />
            <Header/>
            <Stack.Navigator>
                <Stack.Screen name="HomeTemplate" component={HomeTemplate} options={{headerShown: false}}/>
                <Stack.Screen name="QuizzTemplate" component={QuizzTemplate} options={{headerShown: false}}/>
                <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default Route;