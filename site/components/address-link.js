import React from 'react';
import Link from 'next/link';

export default class AddressLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Link href={"/address?addr="  + this.props.addr}><a><div className="btn btn-success">{this.props.addr}</div></a></Link>)
    }
}