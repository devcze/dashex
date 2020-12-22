// clean db every 10s
const cleanInterval = 10000;
const ds = {

    db: {},

    start() {
        interval = setInterval(() => ds.db = {}, cleanInterval );
    }
}

let interval = null;


module.exports = ds;