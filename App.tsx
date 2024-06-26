/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import Route from "./src/navigation/Route";
import {SafeAreaView, View} from "react-native";
import SplashScreen from "react-native-splash-screen";
import {Header} from "react-native/Libraries/NewAppScreen";


function App(): JSX.Element {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
            <Route/>
    );
}

export default App;
