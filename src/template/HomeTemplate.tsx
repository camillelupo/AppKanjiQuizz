import React, {useEffect, useState} from 'react';
import {Animated, Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";


import {
    BACKGROUND_COLOR,
    BLACK, RED,
    WHITE, WHITE_SMOKE,

} from "../assets/colors";
import Header from "../component/Header";
import ChoiceDifficulty from "../component/ChoiceDifficulty";
import ButtonChoice from "../component/ButtonChoice";
import {useTranslation} from "react-i18next";



function HomeTemplate({navigation}: any) {
    const [language, setLanguage] = useState('')
    const [bool, setBoolean] = useState(false)
    const { t, i18n } = useTranslation();

    const onSelectAnswer = (answer: any) => {
        setLanguage(answer)
        setBoolean(true)
    }
    const returnBool= () => {
        setBoolean(false)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.chooseContainer}>
                <Text style={styles.textChoose}> {t('selectLevel')}</Text>
            </View>
            {!bool ?
                <View style={styles.buttonContainer}>
                    <ButtonChoice language={'french'} onSelect={onSelectAnswer}/>
                    <ButtonChoice language={'japanese'} onSelect={onSelectAnswer}/>
                </View>
                :
                <ChoiceDifficulty language={language} navigation={navigation} returnBool={returnBool}/>
            }
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
    buttonContainer: {
        flex: 0.6,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
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

export default HomeTemplate;