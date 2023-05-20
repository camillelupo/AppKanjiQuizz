const BASEURL = 'http://45.147.99.190/api/';

export const GET_RANDOM_KANJI = (jplt : number, number : number)=> BASEURL + `jplt/${jplt}/random/${number}`;