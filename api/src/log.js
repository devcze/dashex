const debug = false;

module.exports = {

    info(...msg)
    {
        console.log("| INFO | " + msg);
    },

    debug(...msg) {
        console.log("| DEBUG | " + msg);
    }


}

