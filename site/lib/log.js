import env from '../env'

module.exports = {

    info(msg)
    {
        print("| INFO | " + msg);
    },

    debug(msg) {
        print("| DEBUG | " + msg);
    },

    error(msg) {
        print("| ERROR | " + msg);
    }



}

function print(msg) {
    if (env.DEBUG === true) {
        console.log(msg);
    }
}