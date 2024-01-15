import React, {useEffect} from 'react';
import Card from "./Card";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {BACKGROUND_COLOR, BLACK, WHITE_SMOKE} from "../assets/colors";
import buttonChoice from "./ButtonChoice";

function ChoiceDifficulty ({navigation , returnBool ,language }: any) {
    return (
        <View style={styles.cardContainer}>
            <Card navigation={navigation} jplt={4} language={language} style={{ ...styles.card, backgroundColor: '#7FFF7F' }} >
                <Text style={styles.cardTitle}>Facile</Text>
            </Card>
            <Card style={{ ...styles.card, backgroundColor: '#87CEFA' }}  jplt={3} language={language}  navigation={navigation}>
                <Text style={styles.cardTitle}>Moyen</Text>
            </Card>
            <Card style={{ ...styles.card, backgroundColor: '#FFA500' }}  jplt={2} language={language}  navigation={navigation}>
                <Text style={styles.cardTitle}>Difficile</Text>
            </Card>
            <Card style={{ ...styles.card, backgroundColor: '#FF0000' }}  jplt={1} language={language}  navigation={navigation}>
                <Text style={styles.cardTitle}>Tres difficile</Text>
            </Card>
            <TouchableWithoutFeedback onPress={returnBool}>
                <Text style={styles.textChoose}>Retour</Text>
            </TouchableWithoutFeedback>
        </View>

    )
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
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    card: {
        backgroundColor: WHITE_SMOKE,
        width: '90%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: BLACK,
    },
});
export default ChoiceDifficulty;