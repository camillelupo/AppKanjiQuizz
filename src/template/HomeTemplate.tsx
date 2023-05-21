import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import Card from "../component/Card";
import Kanji from "../models/Kanji";
import {getRandomKanji} from "../services/QuizzService";

import {
    BACKGROUND_COLOR,
    BLACK, RED,
    WHITE, WHITE_SMOKE,

} from "../assets/colors";
import Header from "../component/Header";



function HomeTemplate({navigation}: any) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.chooseContainer}>
                <Text style={styles.textChoose}>Selectionnez le niveau de kanji</Text>
            </View>
            <View style={styles.cardContainer}>
                <Card navigation={navigation} jplt={4} style={styles.card}>
                    <Text style={styles.cardTitle}>N4</Text>
                </Card>
                <Card style={styles.card} jplt={3}  navigation={navigation}>
                    <Text style={styles.cardTitle}>N3</Text>
                </Card>
            </View>
            <View style={styles.cardContainer}>
                <Card style={styles.card} jplt={2}  navigation={navigation}>
                    <Text style={styles.cardTitle}>N2</Text>
                </Card>
                <Card style={styles.card} jplt={1}  navigation={navigation}>
                    <Text style={styles.cardTitle}>N1</Text>
                </Card>
            </View>
            {/*<FlatList data={} renderItem={}/>*/}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },
    textChoose: {
        marginTop: 12,
        fontSize: 20,
        color: BLACK,
        fontWeight: '600',
        alignSelf: 'center',
        fontFamily: 'OtsutomeFont_Ver3',
    },
    chooseContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        marginBottom: 20,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    card: {
        backgroundColor: WHITE_SMOKE,
        width: '40%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: BLACK,
    },
});

export default HomeTemplate;