import React from 'react';
import Time from '../components/time'
import BlockLink from '../components/block-link'
import TxLink from '../components/tx-link'
import AddressLink from '../components/address-link'
import Confirmations from '../components/confirmations'

import log from '../lib/log';

const duffToDsh = 100*1000000;

export default class Atom extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        log.debug(this.props.id)
        switch (this.props.id) {
            case "blocktime":
            case "mediantime":
            case "time": return (<Time ts={this.props.children} />)

            case "hash":
            case "blockhash":
            case "previousblockhash":
            case "nextblockhash": return (<BlockLink hash={unquote(this.props.children)}/>)

            case "txid":
            case "tx":  return (<TxLink id={unquote(this.props.children)}/>)

            case "address": return (<AddressLink addr={unquote(this.props.children)}/>)


            case "value":
            case "amount": return  (<div className="btn btn-dash">{this.props.children} DASH</div>)

            case "satoshis":
            case "received":
            case "balance": return  (<div className="btn btn-dash">{this.props.children / duffToDsh} DASH</div>)

            case "confirmations": return  (<Confirmations count={this.props.children}/>)



            default: return (<div>{unquote(this.props.children)}</div>)
        }


    }
}


function unquote(str) {
    return str.replace(/['"]+/g, '')
}
