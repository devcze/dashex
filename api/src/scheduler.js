const cache = require('./cache')
const loader = require('./loader')

const INTERVAL_MS = 10000;

module.exports = {

    // start scheduler to load RPC data into cache
    async start() {

        cache.lastBlocksData = await loader.loadLastBlocks();

        setInterval(async () => {
            cache.lastBlocksData = await loader.loadLastBlocks();
        }, INTERVAL_MS);
    }
}

