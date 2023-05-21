import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, View} from "react-native";
import Kanji from "../models/Kanji";
import {getApi, getRandomKanji} from "../services/QuizzService";
import Card from "../component/Card";
import CardKanji from "../component/CardKanji";
import Header from "../component/Header";
import BrushActivityIndicator from "../component/BrushActivityIndicator";
import KanjiBrushAnimation from "../component/EasedComponentRendering";
import {BLACK, RED, WHITE, WHITE_SMOKE} from "../assets/colors";
import EasedComponentRendering from "../component/EasedComponentRendering";


function QuizzTemplate({navigation, route}: any) {
    const [kanjiList, setKanjiList] = React.useState<Kanji[]>([]);
    const [kanji, setKanji] = React.useState<Kanji>();
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const [bool, setBool] = useState(false);
    const [kanjiSelected, setKanjiSelected] = useState<Kanji>();

    const onSelectAnswer = (answer: any, corectAnswer: any) => {
        if (corectAnswer) {
            setTimeout(() => {
                setSelectedAnswer(answer);
                setIsLoading(true);
                setKanjiSelected(null)
            }, 300);
        } else {
            setKanjiSelected(answer);
        }
    };

    const [answer, setAnswer] = React.useState<Kanji[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);

        }, 500);
        onRefresh();
        // Clear the timeout when the component unmounts or when the isLoading state changes
        return () => clearTimeout(timeout);

        // Reset selectedAnswer after refresh
    }, [selectedAnswer]);

    const onRefresh = () => {
        getRandomKanji(route.params.jplt, 10).then((res: Kanji[]) => {
            setKanjiList(res)
            // Sélectionner le premier élément comme réponse correcte
            setKanji(res[0]);
            answerInit(res);
            setSelectedAnswer(null);
        });
    }

    const itemAnswer = ({item}: any) => {
        console.log(item);
        setBool(false);
    }
    const answerInit = (res: any) => {

        const answersList = res.slice(0, 6);

        const incorrectAnswers = answersList.sort(() => Math.random() - 0.5);

        setAnswer(incorrectAnswers);
    }

    return (
        <SafeAreaView style={styles.container}>
            {kanji && !isLoading && answer ?
                <View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.kanji}>{kanji.meanings[0]}</Text>
                        <Text style={styles.lecture}>kun :{kanji.kunyomi} on : {kanji.onyomi}</Text>
                    </View>
                    <FlatList
                        data={answer}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={
                            ({item}) => (
                                <CardKanji style={styles.cardKanji} onSelect={onSelectAnswer}
                                           corectAnswer={item === kanji} item={item}></CardKanji>
                            )
                        }
                        numColumns={3}
                    />
                    {kanjiSelected ?
                        <View style={styles.wrongAnswerContainer}>
                            <Text style={styles.wrongAnswerMeaning}>{kanjiSelected.meanings[0]}</Text>
                            <Text style={styles.wrongAnswerYomi}>kun :{kanjiSelected.kunyomi} on
                                : {kanjiSelected.onyomi}</Text>
                        </View>
                        : null}

                </View> : <BrushActivityIndicator/>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
    },
    questionContainer: {
        marginBottom: 50,
        alignItems: 'center',
    },
    kanji: {
        marginTop: 50,
        fontSize: 50,
        color: BLACK,
        textAlign: 'center',
        fontFamily: 'OtsutomeFont_Ver3',
    },
    lecture: {
        width: '70%',
        fontSize: 15,
        paddingTop: 10,
        color: BLACK,
        fontFamily: 'LINESeedSans_A_Bd',
        textAlign: 'center',
    },
    answer: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'LINESeedSans_A_Bd',
    },
    wrongAnswerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    wrongAnswerMeaning: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'OtsutomeFont_Ver3',
        color: RED,
        paddingBottom: 10,
    },
    wrongAnswerYomi: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'LINESeedSans_A_Bd',
        color: RED
    },
    cardKanji: {
        flex: 1,
        margin: 10,
        width: 100,
        backgroundColor: WHITE_SMOKE,
    },
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default QuizzTemplate;