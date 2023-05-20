import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import React, { useState} from "react";

const CardKanji = ({style, children ,corectAnswer, onSelect}: any)=> {
    const animatedValue = new Animated.Value(0);

    const [cardColor, setCardColor] = useState('white');


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
        changeCardColor();
        if (corectAnswer) {
            setTimeout(() => {
                onSelect(corectAnswer); // Invoke the refreshQuizzTemplate callback function
            }, 1000);
        }
    };
    const changeCardColor = () => {
        if (corectAnswer) {
            setCardColor('green');
        } else {
            setCardColor('red');
        }
        setTimeout(() => {
            setCardColor('white');
        }, 1000);
    }
    const buttonScale = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.05, 1.1],
    });

    const animatedScaleStyle = {
        transform: [{scale: buttonScale}],
    };
    return (
    <TouchableWithoutFeedback onPressIn={onPressIn}
                              onPressOut={onPressOut}
    >
        <Animated.View
            style={[animatedScaleStyle ,styles.card, style, { backgroundColor: cardColor }]}>
            <View>{children}</View>
        </Animated.View>
    </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12
    }
});

export default CardKanji;