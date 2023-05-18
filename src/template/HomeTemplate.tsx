import React, {useEffect} from 'react';
import {Animated, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import SplashScreen from 'react-native-splash-screen'
import FlatList = Animated.FlatList;
import Card from "../component/Card";
import {Colors} from "react-native/Libraries/NewAppScreen";

function HomeTemplate() {
    SplashScreen.hide();
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.sectionContainer}>
                    <Image source={require('../assets/round_logo.png')}/>
                    <Text style={styles.sectionTitle}>Kanji Quizz</Text>
                </View>
                <Card style={styles.card}>
                    <Text style={styles.cardTitle}>N4</Text>
                </Card>
                <Card style={styles.card}>
                    <Text style={styles.cardTitle}>N3</Text>
                </Card>
                <Card style={styles.card}>
                    <Text style={styles.cardTitle}>N2</Text>
                </Card>
                <Card style={styles.card}>
                    <Text style={styles.cardTitle}>N1</Text>
                </Card>

                {/*<FlatList data={} renderItem={}/>*/}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        alignItems: 'center', // Centered horizontally
    },
    sectionContainer: {
      flexDirection: 'row',
        alignItems: 'center', // Centered horizontally
        alignContent: 'center',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.white,
    },
    sectionTitle: {
        marginLeft: 16,
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    card: {
        marginTop: 16,
        height: 80,
        width: 300,
        backgroundColor: 'black',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
});

export default HomeTemplate;