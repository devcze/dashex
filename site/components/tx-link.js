import React from 'react';
import Link from 'next/link';

export default class TxLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Link href={"/tx?txn=" + this.props.id}><a>
            <div className="mt-2 btn btn-warning btn-tx">{this.props.id}</div>
        </a></Link>)
    }
}