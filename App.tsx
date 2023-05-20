/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import Route from "./src/navigation/Route";

import {SafeAreaView, View} from "react-native";
import SplashScreen from "react-native-splash-screen";


function App(): JSX.Element {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
            <Route/>
    );
}

export default App;
