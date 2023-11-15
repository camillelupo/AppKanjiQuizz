import React from "react";
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";


const Card = ({style, children ,language, navigation, jplt} : any) => {
    const animatedValue = new Animated.Value(0);
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
    };
    const buttonScale = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.05, 1.1],
    });
    const animatedScaleStyle = {
        transform: [{scale: buttonScale}],
    };


    return (
        <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}
                                  onPress={() => {
                                      navigation.navigate('QuizzTemplate', { jplt: jplt, language: language });
                                  }}
        >
            <Animated.View style={[animatedScaleStyle ,styles.card, style]}>
            <View >{children}</View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 8,
        padding: 20,
        borderRadius: 12
    }
});
export default Card;