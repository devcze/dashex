import React from 'react';
import Link from 'next/link';

export default class BlockLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Link href={"/block?hash="  + this.props.hash}><a><div className="btn btn-info">{this.props.hash}</div></a></Link>)
    }
}