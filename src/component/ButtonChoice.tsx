import React, {useEffect} from 'react';
import {Animated, Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
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
            {language === 'french' ? (
                <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
                    <Animated.View  style={[animatedScaleStyle, styles.button]}>
                        <Text style={{...styles.text }}>Francais vers japonais</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            ) : language === 'japanese' ? (
                <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
                    <Animated.View  style={[animatedScaleStyle, styles.button]}>
                        <Text style={{...styles.text}}>Japonais vers Français</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            ) : null}
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
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 8,
        padding: 20,
        borderRadius: 12
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: BLACK,
    },
    flagImage: {
        width: 20, // Adjust the width as needed
        height: 20, // Adjust the height as needed
        marginRight: 10, // Optional: Add margin for spacing
    },
})

export default ButtonChoice;