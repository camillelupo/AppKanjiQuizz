import axios from 'axios';
import {GET_RANDOM_KANJI} from '../config/ConfigURL';

const BASEURL = 'http://45.147.99.190/api/';

export async function getRandomKanji(jplt : number, number : number) {
    try {
        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
            },
        };

        let res = await axios.get(GET_RANDOM_KANJI(jplt, number), options);
        return res.data;
    } catch (e) {
        throw handler(e);
    }
}
export async function getApi() {
    try {
        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
            },
        };

        let res = await axios.get(BASEURL, options);
        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export function handler(err: any) {
    return err.response;
}