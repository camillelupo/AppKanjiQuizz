import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTemplate from "../template/HomeTemplate";
import {StatusBar} from "react-native";
import {BACKGROUND_COLOR, RED, VIOLET_LIGHT} from "../assets/colors";
import QuizzTemplate from "../template/QuizzTemplate";
import Header from "../component/Header";

const Stack = createNativeStackNavigator();


function Route(): JSX.Element {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={RED} />
            <Header/>
            <Stack.Navigator>
                <Stack.Screen name="HomeTemplate" component={HomeTemplate} options={{headerShown: false}}/>
                <Stack.Screen name="QuizzTemplate" component={QuizzTemplate} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Route;