// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTemplate from "../template/HomeTemplate";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeTemplate} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
