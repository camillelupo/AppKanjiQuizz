import React, {useEffect, useState} from "react";
import {FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, View} from "react-native";
import Kanji from "../models/Kanji";
import {getRandomKanji} from "../services/QuizzService";
import Card from "../component/Card";
import CardKanji from "../component/CardKanji";


function QuizzTemplate({route}: any) {
    const [kanjiList, setKanjiList] = React.useState<Kanji[]>([]);
    const [kanji, setKanji] = React.useState<Kanji>();

    const [refreshing, setRefreshing] = React.useState(false);

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const onSelectAnswer = (answer: any) => {
        setSelectedAnswer(answer);
    };

    const [answer, setAnswer] = React.useState<Kanji[]>([]);

    useEffect(() => {
                let unsubScribe = false;
                onRefresh();
                if (!unsubScribe) {
                    setSelectedAnswer(null);
                }
                return () => {
                  unsubScribe = true;

                };
           // Reset selectedAnswer after refresh
    }, [selectedAnswer]);

    const onRefresh  = () => {
        getRandomKanji(route.params.jplt, 10).then((res: Kanji[]) => {
            setKanjiList(res)

            // Sélectionner le premier élément comme réponse correcte
            setKanji(res[0]);

            answerInit(res);
        });
    }

    const answerInit = (res: any) => {

        const answersList = res.slice(0, 6);

        const incorrectAnswers = answersList.sort(() => Math.random() - 0.5);

        setAnswer(incorrectAnswers);
    }

    return (
        <SafeAreaView style={styles.container}>
            {kanji ?
                <View>
                    <Text style={styles.kanji}>{kanji.meanings[0]}</Text>
                </View>
                :
                <Text>loading</Text>
            }

            {answer ? <View>
                <FlatList
                    data={answer}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={
                    ({item}) => (
                        <CardKanji style={styles.cardKanji}  onSelect={onSelectAnswer} kanjiList={answer}  corectAnswer={item === kanji}><Text style={styles.answer}>{item.kanji}</Text></CardKanji>
                    )
                }
                    numColumns={3}
                />
            </View> : <Text>loading</Text>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    kanji: {
        marginTop: 50,
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'LINESeedSans_A_Bd',
    },
    answer: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'LINESeedSans_A_Bd',

    },
    cardKanji: {
        flex: 1,
        margin: 10,
        width: 100,
    }
});

export default QuizzTemplate;