const RPCclient = require('@dashevo/dashd-rpc/promise')
const log = require('./log');

const client = new RPCclient({
    protocol: 'http',
    user: 'dev',
    pass: 'password',
    host: '127.0.0.1',
    port: 1234
});

module.exports = {

    async loadLastBlocks() {

        let obj = [{Result: "No records"}];

        try {
            const ret = await getLastBlocks(15);
            return ret;
        } catch (e) {
            logErr(e)
        }

        return obj;
    },

    async loadBlock(blockhash) {
        let obj = {"Result" :"Record not found"};

        try {
            const ret = await getBlock(blockhash);
            return ret;
        } catch (e) {
            logErr(e)
        }

        return obj;
    },

    async loadTransaction(txn) {
        let obj = {"Result" :"Record not found"};

        try {
            const ret = await getTransaction(txn);
            return ret;
        } catch (e) {
            logErr(e)
        }

        return obj;
    },

    async loadAddress(address) {
        let obj = {Result : "Record not found"};

        log.debug("loadaddress")

        try {
            const ret = await getAddressBalance(address);
            return ret;
        } catch (e) {
            logErr(e)
        }

        return obj;
    },

    async searchStr(str) {
        let obj = {"Result" :"Record not found"};

        try {
            if (str.length === 64 && str.startsWith("0000000") ) {
                log.debug('probably block address')
                obj = await getBlock(str);
                return obj;
            }
            else if (str.length === 64) {
                log.debug('probably transaction')
                obj = await getTransaction(str);
                return obj;
            }
            else if (str.length ==34) {
                log.debug('probably address')
                obj = await getAddressBalance(str);
                return obj;
            }
            else {
                log.debug('unknown format');
                obj = {"Result:" : "Unknown format" }
            }

        } catch(e) {
            logErr(e)
        }


        return obj;
    }
}

function logErr(e) { console.log("Unable to load RPC data: " + e.message + e) }

async function getBlockCount() {
    const obj = await client.getinfo();
    const result = obj.result;
    return result.blocks;
}

async function getLastBlockHash() {
    const obj = await client.getblockhash(await getBlockCount());
    const result = obj.result;
    return result
}

async function getBlockHeader(blockHash) {
    const header = await client.getblockheader(blockHash)
    const previous = header.result;
    return previous;
}

async function getLastBlocks(amount) {
    const ret = [];
    let hash = await getLastBlockHash();
    for (let i = amount; i > 0; i--) {
        const header = await getBlockHeader(hash);
        ret.push(header);
        hash = header.previousblockhash;
    }
    return ret;
}

async function getBlock(blockHash) {
    const block = await client.getblock(blockHash)
    const res = block.result;
    return res;
}

async function getTransaction(txn) {
    const block = await client.getrawtransaction(txn, 1)
    const res = block.result;
    return res;
}



async function getAddressBalance(addr) {
    //const block = await client.listreceivedbyaddress()
    // const res = block.result;

    log.debug('getaddressbalance');

    const t1 = new Date().getTime();

    log.debug('balance');
    const res = {};
    const balance = await client.getaddressbalance({"addresses":[addr]});



    log.debug('deltas');
    const deltas = await client.getaddressdeltas({"addresses":[addr]});


    log.debug('mempools');
    const mempool = await client.getaddressmempool({"addresses":[addr]});


    log.debug('txids');
    const txids = await client.getaddresstxids({"addresses":[addr]});


    log.debug('utxos');
    const utxos = await client.getaddressutxos({"addresses":[addr]});


    const duration = new Date().getTime() - t1;

    res.balances = balance.result;

    // performance optimization
    if (duration < 100) {
        res.deltas = deltas.result;
        res.mempool = mempool.result;
        res.txids = txids.result;
        res.utxos = utxos.result;
    } else {
        res.deltas = "Too many records";
        res.mempool = mempool.result;
        res.txids = "Too many records";
        res.utxos = "Too many records";
    }

    log.debug('performed in ', duration, " ms")

    return res;
}






