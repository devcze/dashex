import fetch from 'isomorphic-unfetch'
import env from '../env'
import log from "./log";

export default
async (url) => {

    try {
        const api = await fetch(env.API_SERVER + url)
        const data = await api.json();
        return data;

    } catch (e) {
        log.error('Cannot connect API server')
    }

    return null;
}