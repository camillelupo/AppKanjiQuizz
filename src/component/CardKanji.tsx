import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import React, {useEffect, useState} from "react";
import {BACKGROUND_COLOR, BLACK, GREEN, RED, WHITE, WHITE_SMOKE} from "../assets/colors";

const CardKanji = ({style, item, corectAnswer, onSelect, language}: any) => {
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
        onSelect(item, corectAnswer);
    };
    const changeCardColor = () => {
        if (corectAnswer) {
            setCardColor(GREEN);
            setTimeout(() => {
                setCardColor(WHITE_SMOKE);
            }, 300);
        } else {
            setCardColor(RED);
        }

    }
    const buttonScale = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.05, 1.1],
    });

    const animatedScaleStyle = {
        transform: [{scale: buttonScale}],
    };
    return (
        language === 'french' ? (
                <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
                    <Animated.View
                        style={[animatedScaleStyle, styles.card, style, {backgroundColor: cardColor}]}
                    >
                        <Text style={styles.text}>{item.kanji}</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            ) :
            <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
                <Animated.View
                    style={[animatedScaleStyle, styles.card, style, {backgroundColor: cardColor}]}
                >
                    <Text style={styles.textFr}>{item.fr[0]}</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    card: {
        shadowColor: BLACK,
        shadowOffset: {width: 3, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 8,
        padding: 20,
        borderRadius: 12
    },
    text: {
        paddingTop: 5,
        paddingBottom: 5,
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 30,
        color: BLACK,
        fontFamily: 'LINESeedSans_A_Bd',
    } ,
    textFr: {
        paddingTop: 5,
        paddingBottom: 5,
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 12,
        color: BLACK,
        fontFamily: 'LINESeedSans_A_Bd',
    }
});

export default CardKanji;