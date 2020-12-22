const express = require('express')
const loader  = require('./loader')
const scheduler = require('./scheduler')
const cache = require('./cache')
const log = require('./log')
const ds = require('./dos-shield');

const dotenv = require('dotenv');
dotenv.config();

scheduler.start();
ds.start();

const app = express()
const port = process.env.API_PORT;
const V1 = "/api/v1"

app.get(V1 + '/block', async (req,res) => {
    getResponse('/block', req, res);
})

app.get(V1 + '/address', async (req,res) => {
    getResponse('/address', req, res);
})

app.get(V1 + '/search', async (req,res) => {
    getResponse('/search', req, res);
})

app.get(V1 + '/tx', async (req,res) => {
    getResponse('/tx', req, res);
})

app.get(V1 + '/', async (req, res) => {
    getResponse('/', req, res);
})


function setJSONHeader(res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Content-Type', 'application/json');
}

app.listen(port, 'localhost', () => log.debug(`Example app listening on port ${port}!`))


async function getResponse(pattern, req, res) {

    // TODO Dos protection
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    log.debug("IP:" + ip);

    // maximum connection from single IP in 10 seconds (~10 req/s)
    const dsTreshold = 100;
    if (ds.db[ip] === undefined) ds.db[ip] = 1;
    else  ds.db[ip] = ds.db[ip] + 1;

    if (ds.db[ip] > dsTreshold) pattern = "dos";
    if (ds.db[ip] > (dsTreshold + 5)) return;

    if (pattern !== "dos") {

        log.debug(JSON.stringify(req.query));
        log.debug(JSON.stringify(req.params));
        log.debug(pattern);
        let data = {};
    }

    let data = {}

    switch (pattern) {
        case '/block':
            data = await loader.loadBlock(req.query.hash);
            break;

        case '/address':
            data = await loader.loadAddress(req.query.addr);
            break;

        case '/search':
            data = await loader.searchStr(req.query.str);
            break;

        case '/tx':
            data = await loader.loadTransaction(req.query.txn);
            break;

        case '/':
            data = cache.lastBlocksData;
            break;

        case 'dos':
            data = { status: "error", message: 'Too many requests from your IP, try it later' };
            break;

        default:
            break;
    }

    setJSONHeader(res);
    res.end(JSON.stringify(data));
}


