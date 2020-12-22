import Layout from "../components/layout"
import React from 'react';
import Title from '../components/page-title'
import Data from '../components/data'
import log from '../lib/log'
import load from "../lib/load";

export default class extends React.Component {

    constructor(props) {
        super(props)
    }


    static async getInitialProps({query}) {
        log.debug("query:" + JSON.stringify(query));

        return {data: await load('/block?hash=' + query.hash)}
    }

    render() {

        if (this.props.data === null) {
            return (<div> No data from server </div>)
        }


        return (<Layout>
            <Title>Block details</Title>

            <Data data={this.props.data}></Data>

        </Layout>)
    }
}