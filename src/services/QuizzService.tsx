import axios from 'axios';
import {GET_RANDOM_KANJI} from '../config/ConfigURL';

export async function getRandomKanji(jplt : number, number : number) {
    try {
        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        };

        let res = await axios.get(GET_RANDOM_KANJI(jplt, number));
        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export function handler(err: any) {
    return err.response;
}