import React from "react";
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {RED, WHITE} from "../assets/colors";
import {useNavigation} from "@react-navigation/native";


const Header = ()=> {
    const navigation = useNavigation();
    const navigateToHome = () => {
        // @ts-ignore
        navigation.navigate('HomeTemplate');
    };
    return (
        <View style={styles.titleContainer}>
            <TouchableWithoutFeedback onPress={navigateToHome}>
                <Image style={styles.image} source={require('../assets/round_logo.png')}/>
            </TouchableWithoutFeedback>
            <View style={styles.rightItem}><Text style={styles.sectionTitle}>Kanji Quizz</Text></View>
        </View>
    )
};


const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: RED,
        paddingBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginLeft: 16,
        marginTop: 20,
    },
    rightItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        marginTop: 20,
        paddingRight: 16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: WHITE,
        textAlign: 'center',
        fontFamily: 'OtsutomeFont_Ver3',
    },
});

export default Header;
