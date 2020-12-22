import React from 'react';
import Link from 'next/link';

export default class
Confirmations extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            {
                this.props.count < 6 ?
                    <div className="btn btn-conf-few">{this.props.count}</div>
                    :
                    <div className="btn btn-conf-lot">{this.props.count}</div>
            }
            </div>
        )
    }
}