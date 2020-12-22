import Layout from "../components/layout"
import React from 'react';
import Title from '../components/page-title'
import Data from '../components/data'
import load from '../lib/load'
import log from '../lib/log'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    static async getInitialProps({query}) {
        log.debug("query:" + JSON.stringify(query));

        return {data: await load('/address?addr=' + query.addr), addr: query.addr}
    }

    render() {


        if (this.props.data === null) {
            return (<div> No data from server </div>)
        }


        return (<Layout>
            <Title>Address details</Title>
            <div className="btn btn-success">{this.props.addr}</div>

            <Data data={this.props.data}></Data>

        </Layout>)
    }
}