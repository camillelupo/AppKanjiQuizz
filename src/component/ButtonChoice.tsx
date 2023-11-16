import React, {useEffect} from 'react';
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {BLACK, WHITE_SMOKE} from "../assets/colors";

function ButtonChoice({language, onSelect}: any) {
    const animatedValue = new Animated.Value(0);
    const buttonScale = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.05, 1.1],
    });
    const animatedScaleStyle = {
        transform: [{scale: buttonScale}],
    };
    const onPressIn = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            bounciness: 15,
            useNativeDriver: true,
        }).start();

    };
    const onPressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 0,
            bounciness: 10,
            useNativeDriver: true,
        }).start();
        onSelect(language)
    };

    return (
        <TouchableWithoutFeedback onPressIn={onPressIn}
                                  onPressOut={onPressOut}
        >
            <Animated.View
                style={[animatedScaleStyle , styles.button]}>
                {language === 'french' ?
                    <Text style={styles.text}>Francais vers japonais</Text>
                    : <></>}
                {language === 'japanese' ?
                    <Text>Japonais vers Français</Text> : <></>
                }
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: WHITE_SMOKE,
        width: '90%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {}
})

export default ButtonChoice;