import React, { useEffect, useRef } from 'react';
import {ActivityIndicator, Animated, Easing, Image, StyleSheet} from 'react-native';

const BrushActivityIndicator = () => {
    const brushAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        startAnimation();
    }, []);

    const startAnimation = () => {
        brushAnimation.setValue(0);
        Animated.timing(brushAnimation, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => startAnimation());
    };

    const brushScale = brushAnimation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.8, 1.2, 0.8],
    });


    return (
        <Animated.View style={[styles.container, { transform: [{ scale: brushScale }] }]}>
            <Image source={require('../assets/launch_screen-modified.png')} style={styles.image} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },  image: {
        width: 200,
        height: 200,
    },
});

export default BrushActivityIndicator;
